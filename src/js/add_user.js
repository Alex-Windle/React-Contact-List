import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class AddUser extends Component {
	static propTypes = {
		onAdd: PropTypes.func.isRequired
		}

dataHandler(formData) {
this.props.onAdd(formData);
}

	render () {
		let { onAdd } = this.props;
		return (
			<div className="add-user">
			<h2>Add New User</h2>
			<SimpleSerialForm onData={ ::this.dataHandler }>
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
					<input type="text" name="phone"/>
				</label>
				</div>

				<div>
				<label>
					Location:
					<input type="text" name="location"/>
				</label>
				</div>

				<div>
				<label>
					Photo (URL):
					<input type="text" name="photo"/>
				</label>
				</div>
			<button>Add New User</button>
			</SimpleSerialForm>
			</div>
			)
	}
}