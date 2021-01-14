import React from 'react'

class NameForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    console.log(this.state.value)
    e.preventDefault()
  }

  handleChange = (e)=>{
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type='text' value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
  
}

export default NameForm;