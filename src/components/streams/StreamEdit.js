import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';

import StreamForm from './StreamForm';

class StreamEdit extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmitForm = formValues => {
		this.props.editStream(this.props.match.params.id, formValues);
	};

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit Stream</h3>
				<StreamForm
					initialValues={_.pick(this.props.stream, 'title', 'description')} //to pick just a properties that we want to update. Not the whole object.
					onSubmit={this.onSubmitForm}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
	StreamEdit
);
