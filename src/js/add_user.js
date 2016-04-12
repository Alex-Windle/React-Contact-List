import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import ReactDOM from 'react-dom';
import data from './data';
import { Link, hashHistory } from 'react-router';

export default class AddUser extends Component {
	// static propTypes = {
	// 	onAdd: PropTypes.func.isRequired
	// 	}
	// constructor(props){
	// 	super(props);
	// 	this.state = {
 //      	preview: 'https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png'
 //    	}
	// }

dataHandler(formData) {
this.props.onAdd(formData);
}

// dropHandler([file]) {
//     this.setState({preview: file.preview});
//   }
	render () {
		// let { onAdd } = this.props;
		return (
			<div className="add-user">
			<div className="title">
				<h2>Add Contact</h2>
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
			
			<Link to="/">BACK</Link>

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