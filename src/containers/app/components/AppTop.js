import React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Menu, MenuItem } from 'material-ui/Menu';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

class AppTop extends React.Component {

	// refactor this!
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		};
	}
	handleExpandChange = (expanded) => {
		this.setState({expanded: expanded});
	};
	handleToggle = (event, toggle) => {
		this.setState({expanded: toggle});
	};
	handleExpand = () => {
		this.setState({expanded: true});
	};
	handleReduce = () => {
		this.setState({expanded: false});
	};

	// view
	render() {

		// dependencies
		const { dispatch } = this.props;
		const actions = require('./../actions');
		const events = actions.events.call({});
		const handlers = actions.handlers.call({ events, dispatch });

		// reusable
		const AppTopBar = <AppBar title={this.props.app.page.title} onTouchTap={ ()=>{  handlers.drawerToggle();  } }></AppBar>;

		// view
		return (
			<Paper zDepth={3} id="AppTop">
				{AppTopBar}
				<Drawer className="Drawer topDrawer" open={this.props.app.drawerOpen} docked={false} onRequestChange={ ()=>{ handlers.drawerToggle(); } }>

					{/* top */ }
					<div className="drawerTop">
						<AppBar title={this.props.app.page.title} onTouchTap={ ()=>{  handlers.drawerToggle();  } }></AppBar>
						<Menu>
							<MenuItem primaryText="test 1" leftIcon={<FontIcon className="material-icons">wifi</FontIcon>} />
							<MenuItem primaryText="test 2" leftIcon={<FontIcon className="material-icons">wifi</FontIcon>}/>
							<MenuItem primaryText="test 3" leftIcon={<FontIcon className="material-icons">wifi</FontIcon>} />
						</Menu>
					</div>

					{/* bottom */}
					<div className="drawerBottom">
						<Divider />
						<Card className="Card" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
							<CardText expandable={true}>
								<Menu>
									<MenuItem primaryText="Settings" leftIcon={<FontIcon className="material-icons">wifi</FontIcon>} />
									<MenuItem primaryText="Help & About" leftIcon={<FontIcon className="material-icons">wifi</FontIcon>} />
								</Menu>
							</CardText>
							<CardText actAsExpander={true}>
								<Menu>
									<MenuItem primaryText="settings" leftIcon={<FontIcon className="material-icons">{ this.state.expanded ? 'more_vert' : 'more_horiz' }</FontIcon>} />
								</Menu>
							</CardText>
						</Card>
					</div>

				</Drawer>
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
