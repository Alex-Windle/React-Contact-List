import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import users from './data';
import { Route, Router, Link, hashHistory } from 'react-router';

export default class ListView extends Component {


	personListItem(person){
		// let { photo, onUserSelect } = this.props;
		return (
			<li  key={person.name}>
				<Link to={`/single-view/${person.name}`}>
					{person.name}
					<img src={person.photo} alt="headshot" height="50px"/>
				</Link>
			</li>
		)
	};

	render() {
		// let { users, onUserSelect, onNew } = this.props;
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






