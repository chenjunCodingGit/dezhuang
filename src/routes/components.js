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

const NotFound = Loadable({
  loader: () => import('@/views/NotFound/404'),
  loading: Loading
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Login,
  Login2,
  NotFound
}