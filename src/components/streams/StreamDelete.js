import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {
		return (
			//Use react fragment when you don't want to return any html.
			<React.Fragment>
				<button
					onClick={() => this.props.deleteStream(this.props.match.params.id)}
					className="ui negative button"
				>
					Delete
				</button>
				<Link className="ui button" to="/">
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	renderDescription() {
		if (!this.props.stream) {
			return 'Are you sure you want to delete this stream?';
		} else {
			return `Are you sure you want to delete this stream: ${this.props.stream.title}`;
		}
	}

	render() {
		return (
			<Modal
				title="Delete stream"
				description={this.renderDescription()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
	StreamDelete
);
