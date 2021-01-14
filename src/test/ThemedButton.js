import React from 'react'

const ThemeContext = React.createContext('pink')

function Toolbar(props) {
  return(
    <div>
      <ChildrenThemedButton/>
    </div>
  )
}

class ChildrenThemedButton extends React.Component{

  
  static contextType = ThemeContext;
  render() {
    console.log('this.props.theme: ', this.context)
    return(
      <button type="button">Click Me!</button>
    )
  }
}

class ThemedButton extends React.Component{
  render() {
    return(
      <ThemeContext.Provider value="light">
        <Toolbar/>
      </ThemeContext.Provider>
    )
  }
}

export default ThemedButton;