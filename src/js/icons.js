import React from 'react';

export default class Icon extends React.Component {
	static propTypes = {
	type: PropTypes.string.isRequired
	}

	render(){
		return (
		<i className={`fa fa-${this.props.type}`}></i>
		)
	}
}