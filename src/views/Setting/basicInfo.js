import { Card, Form, Input, Button, Select, Space, Radio, Upload, Spin, message  } from 'antd'
import React from 'react'
import { ROLES } from './constants'

const { $http } = React

const defaultAvatar = require('@assets/images/default.png')
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}


class BasicInfo extends React.Component{
  constructor() {
    super()
    this.state = {
      imageUrl: defaultAvatar,
      spinning: true,
      form: {
        role: '',
        username: '',
        nickname: '',
        sex: 0,
        avatar: '',
        phone: '',
        email: '',
        remark: ''
      }
    }
  }

  componentDidMount() {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo')) || {}
    $http.get('user/details/' + userInfo.userId).then((res) => {
      console.log(res)
      this.setState({
        imageUrl: res.avatar,
        spinning: false
      })
      this.formRef.current.setFieldsValue(res)
    }).catch((err) => {
      console.log(err)
    });
  }

  formRef = React.createRef()


  render() {
    const { imageUrl, spinning } = this.state

    return(
      <div>
        <Card title="设置我的资料">
          <Spin spinning={spinning}>
            <Form {...layout} initialValues={this.state.form} ref={this.formRef} name="control-ref">
              <Form.Item label="我的角色">
                <Form.Item name="role"
                  noStyle
                  style={{marginBottom: 0}}>
                  <Select>
                    {
                      ROLES.map(item => (
                        <Select.Option key={item.value} value={item.value} disabled={item.value === 0 ? false : true}>{item.label}</Select.Option>
                      ))
                    }
                  </Select>
                </Form.Item>
                <span className="ant-form-text">
                  <span className="text-grey-9">当前角色不可更改为其他角色</span>
                </span>
              </Form.Item>
              <Form.Item label="用户名">
                <Form.Item name="username"
                  noStyle
                  style={{marginBottom: 0}}>
                  <Input readOnly />
                </Form.Item>
                <span className="ant-form-text">
                  <span className="text-grey-9">不可修改。一般用于后台登入名</span>
                </span>
              </Form.Item>
            </Form>
          </Spin>
        </Card>
      </div>
    )
  }
}

export default BasicInfo