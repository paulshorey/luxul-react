import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

class Bottom extends React.Component {
	render() {
		return (
			<Paper zDepth={3} className="pageBottom">
				<BottomNavigation selectedIndex={this.props.navPrimary}>
					<BottomNavigationItem
						label="Dashboard"
						icon={<FontIcon className="material-icons">dashboard</FontIcon>}
						onTouchTap={() => { this.context.store.dispatch(push('/')); } }
					/>
					<BottomNavigationItem
						label="Configure Your WiFi"
						icon={<FontIcon className="material-icons">wifi</FontIcon>}
						onTouchTap={() => { this.context.store.dispatch(push('/wifi')); } }
					/>
					<BottomNavigationItem
						label="Test"
						icon={<FontIcon className="material-icons">help</FontIcon>}
						onTouchTap={() => { this.context.store.dispatch(push('/test/three')); } }
					/>
				</BottomNavigation>
			</Paper>
		)
	}
};
Bottom.contextTypes = {
  store: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		history,
		navPrimary: state.navPrimary || 0
	};
};
export default connect(mapStateToProps)(Bottom);
