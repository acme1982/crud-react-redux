import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderContent = () => {
		if (!this.props.stream) {
			return <div>'Loading...'</div>;
		} else {
			const { title, description } = this.props.stream;
			return (
				<div>
					<h1>{title}</h1>
					<h3>{description}</h3>
				</div>
			);
		}
	};

	render() {
		console.log(this.props.stream);
		return <div>{this.renderContent()}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
