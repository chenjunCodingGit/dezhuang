import React from 'react'
import { Link } from 'react-router-dom'

import { message, notification } from 'antd'
import {
  LoadingOutlined
} from '@ant-design/icons'
import './style2.scss'


const { $http } = React

class Login2 extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      loginType: true,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: '',
        email: ''
      }
    }
  }

  handleInputChange(e, formType, formTypeInput) {

  }

  render() {
    const { loginType, registerForm, loginForm, loading} = this.state
    const activeClass = ''
    return(
      <div className="login-wrapper" id="container">
        <div className={`${activeClass} container`} id="container">
          <div className="form-container sign-up-container">
            <form id="register">
              <h1>注册</h1>
              <input type="text" name="username" value={registerForm.username}
              onChange={(e) => {this.handleInputChange(e, 'register', 'username')}}
              placeholder="用户名"/>
              <input type="email" name="email" value={registerForm.email}
              onChange={(e) => {this.handleInputChange(e, 'register', 'email')}}
              placeholder="邮箱"/>
              <input type="password" name="usernpasswordame" value={registerForm.password}
              onChange={(e) => {this.handleInputChange(e, 'register', 'password')}}
              placeholder="密码"/>
              <button type="submit" data-type="primary">注册</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form id="login">
              <h1>登录</h1>
              <input type="text" name="username" vale={loginForm.username}
              onChange={(e) => {this.handleInputChange(e, 'login', 'username')}}
              placeholder="用户名"/>
              <input type="text" name="password" vale={loginForm.password}
              onChange={(e) => {this.handleInputChange(e, 'login', 'password')}}
              placeholder="密码"/>
              <Link to="/forget">忘记密码</Link>
              <button type="submit" data-type="primary" disabled={loading? true:false}>
                {loading && <LoadingOutlined className="mr-5" />} 登录
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login2