// @import '~antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import { Provider } from 'react-redux'
import App from './App';



ReactDOM.render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
    // <ConfigProvider locale={zhCN}>
    //   <Button type="primary">Primary Button</Button>
    // </ConfigProvider>,
  document.getElementById('root')
);

reportWebVitals();
