import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user= {props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user= {props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

class TestSingle extends React.Component {
  constructor() {
    super()
    this.state = {
      single: 'dsf',
      name: 'jack'
    }
  }

  handleChange = (e) => {
    this.setState(preState => {
      console.log(preState)
      return {
        single: e.target.value
      }
    })
  }

  render() {
    return(
      <div>
        <input type="text" name="single" onChange={this.handleChange} value={this.state.single}></input>
        {/* <Comment/> */}
      </div>
    )
  }
}

export default TestSingle;