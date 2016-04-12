import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import users from './data';
import { Route, Router, Link, hashHistory } from 'react-router';

export default class ListView extends Component {
	// static propTypes = {
	// users: PropTypes.arrayOf(
	// 	PropTypes.shape({
	// 	name: PropTypes.string.isRequired,
	// 	email: PropTypes.string.isRequired,
	// 	phone: PropTypes.string.isRequired,
	// 	location: PropTypes.string.isRequired, 
	// 	photo: PropTypes.string.isRequired
	// })).isRequired,

	// onUserSelect: PropTypes.func.isRequired,

	// onNew: PropTypes.func.isRequired
	// };

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

	// <Link to={`/single-view/${ user.name }`}>{user.name}</Link>


		// <li key={person.name} onClick={onUserSelect.bind(0, person)}>
		// 	<img src={person.photo} alt="headshot" height="50px"/>
		// 	{person.name}
		// </li>
		// )
	// }

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
// let { users, onUserSelect, onNew } = this.props;
// 		return (
// 		<div className="list-view">
// 			<div className="title">
// 				<h2>My Contact List</h2>
// 				<button onClick={ onNew }>+ Add</button>
// 			</div>
// 			<div className="fullContactList">
// 				<ul>
// 					{ users.map(::this.personListItem) }
// 				</ul>
// 			</div>
// 		</div>
// 		)





