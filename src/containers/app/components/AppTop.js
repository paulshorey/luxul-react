import React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { Menu, MenuItem } from 'material-ui/Menu';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

class AppTop extends React.Component {
	constructor(props){
		super(props);
		this.state = { };
		this.updateDimensions = this.updateDimensions.bind(this);
	}
	componentDidMount(){
	        this.updateDimensions();
	        window.addEventListener("resize", this.updateDimensions);
	}
	updateDimensions() {
	    this.setState({
	        height: window.innerHeight,
	        footerHeight: document.getElementById('leftNavFooter').clientHeight
	     });
	}
	render() {
		return (
			<Paper zDepth={3} className="AppTop">
				<AppBar title={this.props.app.page.title}></AppBar>
				<Drawer open={true} docked={false}>
					{/* top */ }
					<div style={{overflowY: 'auto', overflowX: 'hidden', height: (this.state.height - this.state.footerHeight) + 'px'}}>
						<Card>
							<CardTitle title="Dashboard" subtitle={<span><FontIcon className="material-icons">wifi</FontIcon><span>Subtitle</span></span>} titleColor="#666" subtitleColor="#999"/>
						</Card>
						<Menu>
							<MenuItem primaryText="testdomain1.com" leftIcon={<FontIcon className="material-icons">wifi</FontIcon>} />
							<MenuItem primaryText="testdomain2.com" leftIcon={<FontIcon className="material-icons">wifi</FontIcon>}/>
							<MenuItem primaryText="Add site..." leftIcon={<FontIcon className="material-icons">wifi</FontIcon>} />
						</Menu>
					</div>
					{/* bottom */}
					<div id="leftNavFooter" style={{position: 'absolute', bottom: 0, width: '100%', overflow: 'hidden'}}>
						<Divider />
						<Menu>
							<MenuItem primaryText="Settings" leftIcon={<FontIcon className="material-icons">wifi</FontIcon>} />
							<MenuItem primaryText="Help & About" leftIcon={<FontIcon className="material-icons">wifi</FontIcon>} />
						</Menu>
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
