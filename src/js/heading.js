import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class Heading extends Component {
	render(){

		return (
			<div>
				<h3>Alex Windle's Phone</h3>

				<nav>
				  <Link to="/">Contact List</Link>
		          <Link to="/add-user">Add New Contact</Link>
        		</nav>

        		{this.props.children}

        		<footer>
        			<i className="fa fa-unlock-alt" aria-hidden="true">Unlocked</i>
        		</footer>
			</div>
		)
	}
}

