import React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

class Top extends React.Component {
	render() {
		return (
			<Paper zDepth={3} className="pageTop">
				<AppBar title={this.props.title}></AppBar>
			</Paper>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		title: 'Dashboard'
	};
};
export default connect(mapStateToProps)(Top);
