import React from 'react';
import { connect } from 'react-redux';

import AppTop from './../app/AppTop';
import AppBottom from './../app/AppBottom';

import WirelessRadios from './components/WirelessRadios';
import WirelessProfilesEdit from './components/WirelessProfilesEdit';
import WirelessProfilesDisplay from './components/WirelessProfilesDisplay';

import './layout.scss';

class Wireless extends React.Component {
    render() {
        const { profiles, radios, dispatch, profileDeleteConfirm } = this.props;
        let actions = require('./actions');
        const events = actions.events.call({});
        const handlers = actions.handlers.call({ events, dispatch });
        return (
            <div className="containerWireless">
                <AppTop />
                <div className="wirelessSection section2">
                    <WirelessRadios
                        radios={radios}
                        events={events}
                        handlers={handlers}
                    />
                    <WirelessProfilesEdit
                        radios={radios}
                        onSubmit={ (profile) => dispatch(events.addProfile(profile)) }
                    />
                </div>
                <WirelessProfilesDisplay
                    className="wirelessSection section1"
                    profileDeleteConfirm={profileDeleteConfirm}
                    profiles={profiles}
                    events={events}
                    handlers={handlers}
                />
                <AppBottom />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        radios: state.wireless.radios,
        profiles: state.wireless.profiles,
        profileDeleteConfirm: state.wireless.profileDeleteConfirm,
    };
};
export default connect(mapStateToProps)(Wireless);
