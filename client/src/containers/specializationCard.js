import React, {Component} from 'react';

export default class Card extends Component{

	constructor(props){
		super(props)
	}

	render(){
		return (

			<div>
				<span className="card-logo">{this.props.logo}</span>
				<h3 className="card-header">{this.props.title}</h3>
				<p className="card-paragraph">{this.props.content}</p>

			</div>

		)
	}

}