import React from 'react'
import { Card, Form, Input, Button, message } from 'antd'

import style from './style.module.scss'

const { $http } = React
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

class Login extends React.Component{

  constructor() {
    super()
    this.state = {
      form: {
        username: '',
        password: '',
        validateCode: ''
      }
    }
  }

  onFinish = (values) => {
    console.log('Success:', values);
    $http.post('login',values).then(res => {
      const {token, ...user} = res
      console.log(JSON.stringify(res))
      sessionStorage.setItem('token', res.token)
      sessionStorage.setItem('userInfo', JSON.stringify(user))
      message.success('登录成功')
      this.props.history.push('/home')
    })
  };

  render() {
    return(
      <div className={style['page-login']}>
        <Card title='欢迎登录' className={style['login-wrapper']}>
        <Form
          {...layout}
          name="control-ref"
          initialValues={this.state.form}
          onFinish={this.onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('请输入用户名')
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('请输入密码')
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
             label="验证码"
             name="validateCode"
             rules={[
              {
                validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('请输入验证码')
              }
             ]}
          >
            <Input addonAfter={
              <img src="https://www.oschina.net/action/user/captcha" alt="code" width="100" height="30" />
            } />
          </Form.Item>
          <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
              登录
              </Button>
          </Form.Item>
        </Form>
        </Card>
      </div>
    )
  }
}

export default Login