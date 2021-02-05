import Loadable from 'react-loadable'
import { Spin } from 'antd'
import Loading from '@/components/loading'

const Login = Loadable({
  loader: () => import('@/views/Login/login'),
  loading: Loading
})

const Login2 = Loadable({
  loader: () => import('@/views/Login'),
  loading() { return <Spin/> }
})

const Layout = Loadable({
  loader: () => import('@/views/Layout'),
  loading: Loading
})

const Home = Loadable({
  loader: () => import('@/views/Home'),
  loading: Loading
})

const BasicInfo = Loadable({
  loader: () => import('@/views/Setting/basicInfo'),
  loading: Loading
})

const ModifyPwd = Loadable({
  loader: () => import('@/views/Setting/modify-password'),
  loading: Loading
})

const User = Loadable({
  loader: () => import('@/views/User/index'),
  loading: Loading
})

const NotFound = Loadable({
  loader: () => import('@/views/NotFound/404'),
  loading: Loading
})

const TestSingle = Loadable({
  loader: () => import('@/test/test'),
  loading: Loading
})

export {
  Login,
  Login2,
  Layout,
  Home,
  BasicInfo,
  ModifyPwd,
  User,
  NotFound,
  TestSingle
}