import React from 'react'
import { Redirect } from 'react-router-dom'

import RouteComponents from './components'

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
  // {
  //   path: '/test',
  //   requiredAuth: false,
  //   component: RouteComponents.TestSingle
  // },
  {
    path: '*',
    component: RouteComponents.NotFound
  }
]

export default routes

