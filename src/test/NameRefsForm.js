import React from 'react'

class NameRefsForm extends React.Component{

  constructor(props){
    super(props);
    this.input = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log('e: ', this.input.current.value)
    e.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' ref={this.input}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NameRefsForm;