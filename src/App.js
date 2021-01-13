// import logo from './logo.svg';
import './App.css';
import React from 'react';

import Comment from '../src/test/test'

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  }
};

function Welcome(props) {
  return <h1>她的名字是：{props.name}</h1>
}

class Welcome2 extends React.Component{
  render(){
    return <h1>欢迎第二个人：{this.props.name}</h1>
  }
}

class Clock extends React.Component {

  // 构造函数唯一给state赋值的地方
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timeId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello,! world!</h1>
        <h1>it is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Clock/>
      <Welcome name="jane" />
      <Welcome name="jane2" />
      <Welcome2 name='maria'/>
      <Welcome2 name='maria2'/>

      <Comment 
        author= {comment.author}
        text= {comment.text}
        date= {comment.date}
      />
    </div>
  );
}

export default App;
