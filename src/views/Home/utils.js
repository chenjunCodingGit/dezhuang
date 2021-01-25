import {
  FlagOutlined,
  SmileOutlined,
  PoundOutlined,
  UserOutlined,
  EllipsisOutlined
} from '@ant-design/icons';

const showIcon = (type) => {
  switch(type) {
    case 'Flag':
      return <FlagOutlined />
    case 'Smile':
        return <SmileOutlined />
    case 'Pound':
        return <PoundOutlined />
    case 'User':
        return <UserOutlined />
    default:
        return <EllipsisOutlined />
  }
}

const formatCurrency = (val, n = 0) => {
  if (val) {
    const num = parseInt(val, 10)
    return (num.toFixed(n).toString()).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
  }
  return '0.003333333333333333'
}

export {
  showIcon,
  formatCurrency
}