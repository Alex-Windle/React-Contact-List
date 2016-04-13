import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import ReactDOM from 'react-dom';
import data from './data';
import { Link, hashHistory } from 'react-router';
import { ajax } from 'jquery';

export default class AddUser extends Component {

dataHandler(data) {
//this.props.onAdd(data);//this noooooooo good
//users.push(data);//class+++
//hashHistory.push('/');//class+++
ajax({
	url: 'http://10.0.0.24:8026/data';
	type: 'POST';
	data,


}).then( ()=> {
	hasHistory.push('/');
}
)
}
	render () {
		// let { onAdd } = this.props;
		return (
			<div className="add-user">
			<div className="title">
			</div>
			
			<SimpleSerialForm onData={ x => x }>
				
				<div className="dropzone-box">
					<Dropzone onDrop= { x => x } >
						<img src="http://fillmurray.com/50/50" height="195px" width="195px"/>
						<input type="hidden" name="photo"/>
					</Dropzone>
				</div>
				
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

				<div className="label" id="phone">
				<label>
					Phone:
					<input type="text" name="phone"/>
				</label>
				</div>

				<div className="label" id="location">
				<label>
					Location:
					<input type="text" name="location"/>
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

// <div className="add-user">
// 			<div className="title">
// 				<h2>Add Contact</h2>
// 			</div>
// 			<SimpleSerialForm onData={ ::this.dataHandler }>
				
// 				<div className="dropzone-box">
// 					<Dropzone onDrop= { ::this.dropHandler } >
// 						<img src={ this.state.preview } height="195px" width="195px"/>
// 						<input type="hidden" name="photo" value={ this.state.preview }/>
// 					</Dropzone>
// 				</div>
				
// 				<div className="label">
// 				<label>
// 					Name:
// 					<input type="text" name="name"/>
// 				</label>
// 				</div> 

// 				<div className="label">
// 				<label>
// 					Email:
// 					<input type="text" name="email"/>
// 				</label>
// 				</div>

// 				<div className="label" id="phone">
// 				<label>
// 					Phone:
// 					<input type="text" name="phone"/>
// 				</label>
// 				</div>

// 				<div className="label" id="location">
// 				<label>
// 					Location:
// 					<input type="text" name="location"/>
// 				</label>
// 				</div>

// 				<div className="btn">
// 					<button>Done</button>
// 				</div>

// 			</SimpleSerialForm>
// 			</div>
// 			)
// 	}
// }