import React from 'react';

function ListItem(props) {
  return <li>{props.value} + '----' + {props.value}</li>
}

class NumberList extends React.Component {
  render(){
    const numbers = this.props.numbers
    // const listItems = numbers.map((item, index) => 
    //   <li key= {index}>{item}</li>
    // )
    return (
      <ul>{numbers.map((item, index) => 
        <ListItem key={index} value={item}/>
        )}</ul>
    )
  }
}

export default NumberList;