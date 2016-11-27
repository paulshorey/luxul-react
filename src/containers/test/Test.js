import React from 'react';
import { connect } from 'react-redux';

import AppTop from './../app/AppTop';
import AppBottom from './../app/AppBottom';
import TestContent from './components/TestContent';

//import { setRadioEnabled, setRadioChannel, setRadioWidth, addProfile, profileDelete } from '../../redux/test';
//import './Wireless.scss';

// layout
class Test extends React.Component {
    render() {
        console.log('Test.js',this.props);

        return (
            <div className="containerWireless">
                <AppTop />
                <div className="wirelessSection section2">
                	<TestContent params={this.props.params} data={this.props.data} />
                </div>
                <AppBottom />
            </div>
        )
    }
}

// data
const mapStateToProps = (state) => {
    return {
        no: 'no?',
        data: {text:'testtextdata'}
    };
};
export default connect(mapStateToProps)(Test);