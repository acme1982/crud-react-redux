import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';

import { createStream } from '../../actions';

class StreamCreate extends React.Component {
	onSubmitForm = formValues => {
		this.props.createStream(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create Stream</h3>
				<StreamForm onSubmit={this.onSubmitForm} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
