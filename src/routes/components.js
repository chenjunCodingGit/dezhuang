import Loadable from 'react-loadable'
import { Spin } from 'antd'
import Loading from '@/components/loading'


const Login = Loadable({
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
  NotFound
}