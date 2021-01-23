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
        password: '',
        email: ''
      },
      registerForm: {
        username: '',
        password: '',
        email: ''
      }
    }
  }

  handleInputChange = (e, formType, formTypeInput) => {
    const { loginForm, registerForm } = this.state
    if (formType === 'register') {
      registerForm[formTypeInput] = e.target.value
      this.setState({
        registerForm
      })
    } else {
      loginForm[formTypeInput] = e.target.value
      this.setState({
        loginForm
      })
    }
  }

  handleLogin() {

  }

  toggleClass = () => {
    this.setState((state) => {
      return {
        registerForm: {
          username: '',
          email: '',
          password: ''
        },
        loginForm: {
          username: '',
          password: '',
          email: ''
        },
        loginType: state.loginType
      }
    })
    this.setState({loginType: !this.state.loginType})
  }

  render() {
    const { loginType, registerForm, loginForm, loading } = this.state
    const activeClass = !loginType ? 'right-panel-active' : ''

    return(
      <div className="login-wrapper">
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
              <input type="text" value={loginForm.username} onChange={(event) => this.handleInputChange(event, 'login', 'username')} name="username" placeholder="用户名" />
              {/* <input type="text" name="username" value={loginForm.username} onChange={(e) => {this.handleInputChange(e, 'login', 'username')}} placeholder="用户名"/> */}
              <input type="text" name="password" value={loginForm.password}
              onChange={(e) => {this.handleInputChange(e, 'login', 'password')}}
              placeholder="密码"/>
              <Link to="/forget">忘记密码</Link>
              <button type="submit" data-type="primary" disabled={loading? true:false}>
                {loading && <LoadingOutlined className="mr-5" />} 登录
              </button>
            </form>
          </div>
          <div  className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="text-white">欢迎回来！</h1>
                <p>请您先登录的个人信息，进行操作。</p>
                <button className="ghost" data-type="primary" id="signIn" onClick={this.toggleClass}>登录</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="text-white">注册新账号！</h1>
                <p>输入您的个人信息注册账号。</p>
                <button className="ghost" data-type="primary" id="signUp" onClick={this.toggleClass}>注册</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login2