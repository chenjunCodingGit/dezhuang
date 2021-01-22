import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import { createStore } from "redux";
import { Provider } from 'react-redux'
import routes from './routes/index'


import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import reportWebVitals from './reportWebVitals';
import './index.css';

const state =  {
  name: 'created by chenjun'
};

const reducer = (defaultState = state, action) => {
  return defaultState;
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
