import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import users from './data';
import { Route, Router, Link, hashHistory } from 'react-router';
import { ajax } from 'jquery'; 

export default class SingleView extends Component {
constructor(...props) {
	super(...props);
	this.state = { user: {} }; //{peanut butter: {}};
}
//re render with new user
// make re render happen by setting new state in this function
	componentWillMount(){
		let { user_id } = this.props.params;
		ajax(`http://10.0.0.24:8026/data/{user_id}`).then(user =>{
			this.setState({user: user}); //this.setState({peanut butter: user});
		})
	}

//will re render if it gets new props or state
	render () {
	//let { user_details } = this.props.params;
	//let user = users.find(currentUser => currentUser.name === user_details);
	let { user } = this.state; 

		return (
			
			<div className="single-view">
				<div className="avatar">
					<img src={ user.photo } alt="profile pic" height="100px"/>
				</div>
				
				<div className="info">
					 <ul>
					 	<li><i className="fa fa-user"></i>{user.name}</li>
					 	<li><i className="fa fa-envelope"></i>{user.email}</li>
						<li><i className="fa fa-mobile"></i>{user.phone}</li>
						<li><i className="fa fa-globe"></i>{user.location}</li>
					 </ul>
				</div>
			</div>
			)
	}

	}
};