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
    path: '/login',
    requiredAuth: false,
    // component: AsyncComponent(() => import('@/views/Login'))
    component: RouteComponents.Login
  },
  {
    path: '*',
    component: RouteComponents.NotFound
  }
]

export default routes

