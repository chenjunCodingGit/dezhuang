import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"
// import { createStore } from "redux";
import { Provider } from 'react-redux'
import routes from './routes'

import configureStore from '@/store'


import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import reportWebVitals from './reportWebVitals';
import './index.css';

// const reducer = (defaultState = state, action) => {
//   return defaultState;
// };

const store = configureStore();

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
