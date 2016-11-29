import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppTop from './../app/components/AppTop';
import AppBottom from './../app/components/AppBottom';

//import { setRadioEnabled, setRadioChannel, setRadioWidth, addProfile, profileDelete } from '../../redux/stream';
import './css/layout.scss';

// layout
class Stream extends React.Component {
    preventLocationChange = (e) => { e.preventDefault(); }

    render() {
       //console.log('Stream.js props',this.props);

        return (
            <div className="container containerStream">
                <AppTop handlers={this.props.route.handlers} />
                <div className="section sectionStream">
                	<p>Some AJAX and Websocket content will go here</p>
                </div>
                <AppBottom handlers={this.props.route.handlers} />
            </div>
        )
    }
}

// data
const mapStateToProps = (state) => {
    console.log('Stream.js state', state);
    return {
    	app: state.app
    };
};
export default connect(mapStateToProps)(Stream);