import React from 'react'
import { Card, Col, Row, Tag, Space, Progress, Radio, Table } from 'antd'

import style from './style.module.scss'

import { HEAD_BANNER, CHART_OPTION, USERCOLUMNS, TASKCOLUMNS } from './constants' 
import { showIcon, formatCurrency } from './utils'

// echarts 5.0 按需引入模块 
import * as echarts from 'echarts/core';
import { TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use(
    [TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer]
);

const { $http } = React

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '1',
      headerBanner: {
        visit: [0, '0万'],
        download: [0, '0%'],
        income: [0, '***'],
        activeUser: [0, '0%']
      },
      chartData: {},
      userTableData: [],
      taskTableData: []
    }
  }

  componentDidMount() {
    // 顶部统计
    $http.get('count').then(res => {
      this.setState({
        headerBanner: res
      })
    })

    this.chart = echarts.init(document.getElementById('chart'))
    this.handleGetChart()

    // 表格
    $http.get('user/list').then(res => {
      const list = res.list.slice(0, 7)
      this.setState({userTableData: list})
    })
    $http.get('task/list').then(res => {
      const list = res.list.slice(0, 7)
      this.setState({taskTableData: list})
    })
  }
  
  handleGetChart = () => {
    this.chart.showLoading({ color: '#5FB878'})
    const _this = this
    $http.get('visit/chart').then(res => {
      _this.chart.hideLoading()
      _this.setState({ chartData: res })
      CHART_OPTION.series[0].data = res.visit
      CHART_OPTION.series[1].data = res.download
      CHART_OPTION.series[2].data = res.averageVisits
      _this.chart.setOption(CHART_OPTION)
    })
  }

  handleYearChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  render() {
    const { date, headerBanner, chartData, userTableData, taskTableData } = this.state

    return(
      <div className={style['page-home']}>
        <div className="header-wrapper">
          <Row gutter={16}>
            {HEAD_BANNER.map((item, index) => (
              <Col span={6} key={index}> 
              <Card title={item.title} extra={<Tag color={item.tagColor}>{item.tagValue}</Tag>}>
                <p className={style['count']}>{formatCurrency(headerBanner[item.aliasCurrency][0])}</p>
                <Row justify="space-between">
                  <Col span={12}>
                    <span>{item.desc}</span>
                  </Col>
                  <Col span={12} className="text-right">
                    <Space>
                    <span>{headerBanner[item.aliasCurrency][1]}</span>
                    <span>{showIcon(item.icon)}</span>
                    </Space>
                  </Col>
                </Row>
              </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="home-chart mt-20">
          <Card title="访问量" extra={
            <Radio.Group size="small" className="fs-12" value={date} onChange={this.handleYearChange}>
              <Radio.Button value="1">今年</Radio.Button>
              <Radio.Button value="0">去年</Radio.Button>
            </Radio.Group>
          }>
            <Row gutter={16}>
              <Col span={16}>
                <div id="chart" style={{height: '330px',width: "100%"}}></div>
              </Col>
              <Col span={8}>
                <div className="p15">
                  <p className={`pb-10 fs-20 text-grey-6 ${style['chart-title']}`}>月访问数</p>
                  <p>同上期增长</p>
                  <Progress percent={chartData.monthVisit} strokeWidth={12}  />
                </div>
                <div className="p15">
                  <p className={`pb-10 fs-20 text-grey-6 ${style['chart-title']}`}>月下载数</p>
                  <p>同上期增长</p>
                  <Progress percent={chartData.monthDownload} strokeWidth={12}  />
                </div>
                <div className="p15">
                  <p className={`pb-10 fs-20 text-grey-6 ${style['chart-title']}`}>月收入</p>
                  <p>同上期增长</p>
                  <Progress percent={chartData.monthIncome} strokeWidth={12}  />
                </div>
              </Col>
            </Row>
          </Card>
        </div>

        <div className="home-table mt-20">
          <Row gutter={16}>
            <Col span={12}>
              <Card title="本周活跃用户列表">
                <Table columns={USERCOLUMNS} className={style['table-border']} dataSource={userTableData} pagination={false} />
              </Card>
            </Col>
            <Col span="12">
              <Card title="项目进展">
                <Table columns={TASKCOLUMNS} className={style['table-border']} dataSource={taskTableData} pagination={false} />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Home