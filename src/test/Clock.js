import React from 'react'

class Clock extends React.Component {

	// 构造函数唯一给state赋值的地方
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		this.timeID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timeID)
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	render(){
		return (
			<div>
				<h1>Hello,! world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}

}

export default Clock;