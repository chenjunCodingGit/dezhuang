import './App.css';
import React from 'react';

import Clock from '../src/test/Clock'

class Toggle extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isBtnState: false
    }
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
    </div>
  );
}

export default App;
