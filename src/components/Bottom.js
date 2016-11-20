import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';


const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

//const linkTag = <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">;
//const styleTag = <style>.muidocs-icon-custom-github:before { content: "\e625"; }</style>;

class Bottom extends React.Component {
	render() {
		console.warn('Bottom.js', this.props);
		return (
			<div className="componentBottom">
				<BottomNavigation>
					<BottomNavigationItem
						label="Recents"
						icon={recentsIcon}
						onTouchTap={() => this.select(0)}
					/>
					<BottomNavigationItem
						label="Favorites"
						icon={favoritesIcon}
						onTouchTap={() => this.select(1)}
					/>
					<BottomNavigationItem
						label="Nearby"
						icon={nearbyIcon}
						onTouchTap={() => this.select(2)}
					/>
				</BottomNavigation>
			</div>
		)
	}
};
// data
const mapStateToProps = (state) => {
	return {
		title: 'Title set in Bottom.js'
	};
};
export default connect(mapStateToProps)(Bottom);
