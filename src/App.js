// import logo from './logo.svg';
import './App.css';
import React from 'react';

function Welcome(props) {
  return <h1>她的名字是：{props.name}</h1>
}

class Welcome2 extends React.Component{
  render(){
    return <h1>欢迎第二个人：{this.props.name}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello,! world!</h1>
      <h2>it is {new Date().toLocaleTimeString()}</h2>
      <Welcome name="jane" />
      <Welcome name="jane2" />
      <Welcome2 name='maria'/>
      <Welcome2 name='maria2'/>
    </div>
  );
}

export default App;
