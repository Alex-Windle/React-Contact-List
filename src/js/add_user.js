import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class AddUser extends Component {
	static propTypes = {
		onAdd: PropTypes.func.isRequired
		}

	render () {
		return (
			<div className="add-user">
			<h2>Add New User</h2>
			<SimpleSerialForm>
				<div>
				<label>
					Name:
					<input type="text" name="name"/>
				</label>
				</div> 

				<div>
				<label>
					Email:
					<input type="text" name="email"/>
				</label>
				</div>

				<div>
				<label>
					Phone:
					<input type="text" name="name"/>
				</label>
				</div>

				<div>
				<label>
					Location:
					<input type="text" name="name"/>
				</label>
				</div>

				<div>
				<label>
					Photo:
					<input type="text" name="name"/>
				</label>
				</div>
			</SimpleSerialForm>
			</div>
			)
	}
}