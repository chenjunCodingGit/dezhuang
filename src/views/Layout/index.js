import React from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// import style from './index.module.scss'
import { Layout, Menu, Breadcrumb, Avatar, Dropdown, Button } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  CodepenCircleOutlined,
  DownOutlined,
  ReadOutlined,
  FileTextOutlined
} from '@ant-design/icons'


import style from './index.module.scss'
const { Header, Sider, Content } = Layout

// const style = require('./index.module.scss')


class LayoutContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log('props: ', props)
    this.state = {
      collapsed: false,
      title: '后台管理系统',

    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { route } = this.props
    const { collapsed, title } = this.state
    const breadcrumb = [1,2,3,4]
    return(
      <HashRouter>
        <Layout className={style['layout-container']}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className={style['logo']}>
              <CodepenCircleOutlined className={style['icon']}/>
              <span>{title}</span>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
              <Menu.Item key="home" icon={<HomeOutlined />}>
                首页
              </Menu.Item>
              <Menu.SubMenu
                key="user-menu"
                title={
                  <span><UserOutlined />
                    <span>用户管理</span>
                  </span>
                }
              >
                <Menu.Item key="user">用户列表</Menu.Item>
                <Menu.Item key="roles">角色管理</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="article-menu"
                title={
                  <span>
                    <FileTextOutlined />
                    <span>文章管理</span>
                  </span>
                }
              >
                <Menu.Item key="articles">文章列表</Menu.Item>
                <Menu.Item key="category">文章分类</Menu.Item>
                <Menu.Item key="comments">文章评论</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="community"
                title={
                  <span>
                    <ReadOutlined />
                    <span>社区管理</span>
                  </span>
                }
              >
                <Menu.Item key="message">消息中心</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="setting-menu"
                title={
                  <span>
                    <SettingOutlined />
                    <span>设置管理</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="system-setting" title="系统设置">
                  <Menu.Item key="website-setting">网站设置</Menu.Item>
                  <Menu.Item key="email-service">邮件服务</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="user-setting" title="我的设置">
                  <Menu.Item key="basic-info">基本资料</Menu.Item>
                  <Menu.Item key="modify-password">修改密码</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Layout className={style['site-layout']}>
            <Header className={`${style['layout-header']} bg-white`}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: style['trigger'],
                onClick: this.toggle,
              })}
            </Header>
            <Content className={style['layout-content']}>
              <Breadcrumb className={style['layout-nav']}>
                {
                  breadcrumb.map((item, index) => 
                    <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                  )
                }
              </Breadcrumb>
              <div className={`${style['layout-content--info']}`}>
                {renderRoutes(route.routes)}
              </div>
            </Content>
          </Layout>
        </Layout>
      </HashRouter>
    )
  }
}

export default LayoutContainer