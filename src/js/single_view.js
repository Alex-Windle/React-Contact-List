import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import data from './data';

//build a list view component

export default class SingleView extends Component {

	static propTypes = {
	user: PropTypes.shape ({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired, 
		photo: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired
	}).isRequired,

	onBack: PropTypes.func.isRequired
	};

	render () {
		let { user, onBack } = this.props;
		return (
			<div className="single-view">
				<div className="avatar">
					<i className="fa fa-arrow-left" onClick={ onBack }></i>
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

// <SingleView user="..." onBack={func}/>
// create('SingleView', {user: "...", onBack: func })

//what does this.props (line 26) reference?