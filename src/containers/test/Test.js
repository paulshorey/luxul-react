import React from 'react';
import { connect } from 'react-redux';

import Top from './../../components/Top';
import Bottom from './../../components/Bottom';
import TestContent from './components/TestContent';

//import { setRadioEnabled, setRadioChannel, setRadioWidth, addProfile, deleteProfile } from '../../redux/test';
//import './Wireless.scss';

// layout
class Test extends React.Component {
    render() {
        console.error('Test.js',this.props);

        return (
            <div className="containerTest">
                <Top />
                <TestContent params={this.props.params} data={this.props.data} />
                <Bottom />
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