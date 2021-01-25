import React from 'react'
import { Card, Col, Row, Tag, Space, Progress, Radio, Table } from 'antd'


import style from './style.module.scss'

import { HEAD_BANNER, CHART_OPTION } from './constants' 

import { showIcon, formatCurrency } from './utils'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      headerBanner: {
        visit: [0, '0万'],
        download: [0, '0%'],
        income: [0, '***'],
        activeUser: [0, '0%']
      },
    }
  }

  render() {
    const { headerBanner } = this.state

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

        {/* <div className="home-table mt-20">
          <Row gutter={16}>
            <Col span={12}>
              <Card title="本周活跃用户列表">
                <Table columns={UserColumns} className={style['table-border']} dataSource={userTableData} pagination={false} />
              </Card>
            </Col>
          </Row>
        </div> */}
      </div>
    )
  }
}

export default Home