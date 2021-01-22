import React from 'react'
import { Button } from 'antd'
import style from './style.module.scss'

const NotFound = () => (
  <div className={`${style['page-404']} h-100`}>
    <div className="wrap h-100">
      <div className={style['lost']}>
        <img className="img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3136626573,2216251976&fm=26&gp=0.jpg" alt="404" width="605"
          height="368" />
        <p className="text my-15">
          您访问的页面走失了
        </p>
      </div>
    </div>
  </div>
)

export default NotFound