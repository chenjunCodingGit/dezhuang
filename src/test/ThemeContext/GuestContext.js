import React from 'react'

const ThemeContext = React.createContext('light');
const UserContext = React.createContext({
  name: 'Guest'
});

// 一个组件可能会消费多个 context
function Content() {
  return(
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user =>(
            <div user={user} theme={theme}>2222</div>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

class GuestContext extends React.Component{
  render() {
    const {signedInUser, theme} = this.props;
    return(
    // 提供初始 context 值的 App 组件
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        <Layout/>
      </UserContext.Provider>
    </ThemeContext.Provider>
    )
  }
}

function Layout() {
  return (
    <div>
      <Content />
    </div>
  );
}

export default GuestContext;