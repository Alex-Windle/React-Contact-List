import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Link, hashHistory } from 'react-router';
import { ajax } from 'jquery';

//ajax request to pull data from an api ?
//state allows the data to change on the page ?  

export default class ListView extends Component {
constructor(...args) {
	super(...args);
	this.state = { users: []};
}

componentWillMount(){
	ajax('http://10.0.0.24:8026/data').then(users=> {
	this.setState({users});	
	)}
	
	personListItem(person){
		return (
			<li  key={person._id}>
				<Link to={`/single-view/${person.name}`}>
				{person.name}
				<img src={person.photo} alt="headshot" height="50px"/>
				</Link>
			</li>
		)
	};

	render() {
		let { users } = this.state;
		return (
		<div className="list-view">

			<div className="fullContactList">
				<ul>
				{ users.map(::this.personListItem) }
				</ul>
			</div>

		</div>
		)
	}
}