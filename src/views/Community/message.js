import React from 'react'
import { connect } from 'react-redux'
import { Space, Card, Table, Button, Row, Col, Select, Form, message } from 'antd'

import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import {
  fetchList,
  fetchMessageDelete,
  fetchMessageStatus
} from './action'

const columns = [
  { title: '消息内容', dataIndex: 'content' },
  { title: '状态', dataIndex: 'status', render: (text) => {
    const styleClass = text === 0 ? 'text-green' : 'text-light-red'
    return (
      <span className={styleClass}>{text === 0 ? '已读' : '未读'}</span>
    )
  }},
  { title: '时间', dataIndex: 'createDate'},
]

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      status: -1,
      selectedRowKeys: [],

    }
  }

  formRef = React.createRef()

  componentDidMount() {
    const { onLoadMessageList, pagination = {} } = this.props
    onLoadMessageList({
      status: this.state.status,
      page: pagination.current,
      pageSize: pagination.pageSize
    }, () => {
      this.setState({loading: false})
    })
  }

  onSearch = values => {
    console.log(values)
  }
  onControl = type => {
    console.log(type)
  }
  paginationChange = pagination => {
    console.log(pagination)
  }


  render() {
    const { list, pagination } = this.props
    console.log('props: ', this.props)
    const { loading, status } = this.state
    return (
      <div>
        <Card title="消息列表">
          <Form
            name="search"
            onFinish={this.onSearch}>
            <Row gutter={24}>
              <Col span={6}>
                <Form.Item
                  label="状态"
                  name="status"
                  initialValue={status}>
                    <Select>
                        <Select.Option value={-1}>全部消息</Select.Option>
                        <Select.Option value={0}>已读</Select.Option>
                        <Select.Option value={1}>未读</Select.Option>
                    </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Space>
                  <Button type="primary" htmlType="submit">查询</Button>
                  <Button onClick={() => this.formRef.current.resetFields()}>重置</Button>
                </Space>
              </Col>
            </Row>
          </Form>
          <Space className="mb-10">
            <Button type="primary" onClick={() => this.onControl('delete')}><DeleteOutlined />删除</Button>
            <Button type="primary" onClick={() => this.onControl('read')}><EditOutlined />标记已读</Button>
          </Space>
          <Table
            loading={loading}
            columns={columns}
            pagination={pagination}
            onChange={this.paginationChange}
            dataSource={list}
            bordered/>
        </Card>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    list: state.messageReducer.list,
    pagination: state.messageReducer.pagination
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onLoadMessageList: (query, resolve) => dispatch(fetchList(query, resolve)),
    onMessageDelete: (ids, resolve) => dispatch(fetchMessageDelete(ids, resolve)),
    onMessageStatus: (ids, resolve) => dispatch(fetchMessageStatus(ids, resolve)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)