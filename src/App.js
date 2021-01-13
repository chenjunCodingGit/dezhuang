// import logo from './logo.svg';
import './App.css';
import React from 'react';

import Comment from '../src/test/test'
import Clock from '../src/test/Clock'

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

class Toggle extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isBtnState: false
    }

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.onClickHandle = this.onClickHandle.bind(this)
  }

  onClickHandle = ()=> {
    this.setState(state => ({
      isBtnState: !state.isBtnState
    }));
  }

  render() {
    return (
      <button onClick={this.onClickHandle}>
        {this.state.isBtnState ? '开开开' : '关关关'}
      </button>
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
      <Toggle></Toggle>

      <Comment 
        author= {comment.author}
        text= {comment.text}
        date= {comment.date}
      />
    </div>
  );
}

export default App;
