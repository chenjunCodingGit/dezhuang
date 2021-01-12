import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {

  function formatName(user){
    // return <h1>Hello, Stranger.</h1> + user;
    return user.name + ' ' + user.lastname;
  }

  const user = {
    name: 'kangkang',
    lastname: 'jane'
  }

  const element = (
    <h1 className="greeting">
      Hello, world!333333333333333
    </h1>
  );

    const element2 = React.createElement(
      'h1',
      {className: 'greeting'},
      '2222222222222'
    )

    const element3 = <h1>ddddd33ddddddd</h1>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {element}
        {element2}
        {element3}
        <div>hello {formatName(user)}</div>
      </header>
    </div>
  );
}

export default App;
