// import logo from './logo.svg';
import './App.css';
import React from 'react';

// import Comment from '../src/test/test'
import Clock from '../src/test/Clock'
import LoginControl from '../src/test/LoginControl'
// import NumberList from '../src/test/NumberList'
import NameForm from '../src/test/NameForm'
import Reservation from '../src/test/Reservation'
import Calculator from '../src/test/Calculator'
import ThemedButton from '../src/test/ThemedButton'
import ContextContextApp from '../src/test/ThemeContext/app'
import GuestContext from '../src/test/ThemeContext/GuestContext'


// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   }
// };

// function Welcome(props) {
//   return <h1>她的名字是：{props.name}</h1>
// }

// class Welcome2 extends React.Component{
//   render(){
//     return <h1>欢迎第二个人：{this.props.name}</h1>
//   }
// }

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
      <Toggle></Toggle>
      <LoginControl/>
      {/* <NumberList numbers={[1,2,3,5,4,8]}/> */}
      <NameForm/>
      <Calculator/>
      <Reservation/>
      <ThemedButton/>
      <ContextContextApp/>
      <GuestContext signedInUser={'Guest1'} theme={'dark'}/>
      {/* <Comment 
        author= {comment.author}
        text= {comment.text}
        date= {comment.date}
      /> */}
    </div>
  );
}

export default App;
