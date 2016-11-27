import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import {BottomNavigation,BottomNavigationItem} from 'material-ui/BottomNavigation';

class AppBottom extends React.Component {
	render() {

		// dependencies
		const { dispatch } = this.props;
		const actions = require('./actions');
		const events = actions.events.call({});
		const handlers = actions.handlers.call({ events, dispatch });

		// functions
		const urlIndex = function(arr) {
			var i = arr.length;
			while(i-- > 0) {
				if (arr[i].url == window.location.pathname) {
					return i;
				}
			}
		};

		// elements
		var BottomNavigationItems = [];
		this.props.app.pages.forEach(function(page, url) {
			BottomNavigationItems.push(
				<BottomNavigationItem
					key={url}
					label={page.title}
					icon={page.icon}
					onTouchTap={ ()=>{  handlers.pageUrl(url);  } }
				/>
			);
		});

		// container
		return (
			<Paper zDepth={3} className="AppBottom">
				<BottomNavigation selectedIndex={this.props.app.page.mainNavPosition}>
					{BottomNavigationItems}
				</BottomNavigation>
			</Paper>
		)
	}
};
AppBottom.contextTypes = {
	store: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		app: state.app
	};
};
export default connect(mapStateToProps)(AppBottom);