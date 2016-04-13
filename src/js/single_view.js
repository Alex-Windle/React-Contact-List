import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import users from './data';
import { Route, Router, Link, hashHistory } from 'react-router';

//build a list view component

export default class SingleView extends Component {

	render () {
	let { user_details } = this.props.params;
	let user = users.find(currentUser => currentUser.name === user_details);
	
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
};

