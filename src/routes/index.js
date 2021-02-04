import React from 'react'
import { Redirect } from 'react-router-dom'

import * as RouteComponents from './components'

function getToken() {
  return sessionStorage.getItem('token')
}

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/login" />
  },
  {
    path: '/login2',
    requiredAuth: false,
    // component: AsyncComponent(() => import('@/views/Login'))
    component: RouteComponents.Login2
  },
  {
    path: '/login',
    requiredAuth: false,
    component: RouteComponents.Login
  },
  {
    path: '/test',
    requiredAuth: false,
    component: RouteComponents.TestSingle
  },
  {
    path: '/404',
    requiredAuth: false,
    component: RouteComponents.NotFound
  },
  {
    render: (props) => {
      const token = getToken()
      if (!token) {
        return <Redirect to="/login"/>
      }
      return <RouteComponents.Layout {...props}/>
    },
    requiredAuth: true,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to="/home" />
      },
      {
        path: '/home',
        requiredAuth: true,
        component: RouteComponents.Home
      },
      {
        path: '/test',
        requiredAuth: false,
        component: RouteComponents.TestSingle
      },
      {
        path: '/basic-info',
        requiredAuth: false,
        component: RouteComponents.BasicInfo
      },
      {
        path: '/modify-password',
        requiredAuth: false,
        component: RouteComponents.ModifyPwd
      },
      {
        path: '*',
        render: () => <Redirect to="/404" />
      }
    ]
  },  
  {
    path: '*',
    component: RouteComponents.NotFound
  }
]

export default routes

