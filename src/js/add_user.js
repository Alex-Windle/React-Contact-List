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
			<div className="title">
			<h2>Add Contact</h2>
			</div>
			<SimpleSerialForm onData={ ::this.dataHandler }>
				<div className="label">
				<label>
					Name:
					<input type="text" name="name"/>
				</label>
				</div> 

				<div className="label">
				<label>
					Email:
					<input type="text" name="email"/>
				</label>
				</div>

				<div className="label">
				<label>
					Phone:
					<input type="text" name="phone"/>
				</label>
				</div>

				<div className="label">
				<label>
					Location:
					<input type="text" name="location"/>
				</label>
				</div>

				<div className="label">
				<label>
					Photo (URL):
					<input type="text" name="photo"/>
				</label>
				</div>

				<div className="btn">
					<button>Done</button>
				</div>
			</SimpleSerialForm>
			</div>
			)
	}
}