import React from 'react';

class Reservation extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
  }

  handleChange = (e) =>{
    const target = e.target
    console.log('target: ', target)
    const value = target.name === 'isGoing' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  
  render(){
    return(
      <form>
        <label>
          参与：
          <input
            name="isGoing"
            type='checkbox'
            checked={this.state.isGoing}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type='number'
            value={this.state.numberOfGuests}
            onChange={this.handleChange}
          />
        </label>
      </form>
    )
  }

}

export default Reservation;