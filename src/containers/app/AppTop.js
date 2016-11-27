import React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

class AppTop extends React.Component {
	render() {
		return (
			<Paper zDepth={3} className="AppTop">
				<AppBar title={this.props.app.page.title}></AppBar>
			</Paper>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		app: state.app
	};
};
export default connect(mapStateToProps)(AppTop);
