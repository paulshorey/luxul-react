import React from 'react';
import { connect } from 'react-redux';

import Top from './../../components/Top';
import Bottom from './../../components/Bottom';
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
                <Top />
                <div className="pageContent">
                    <div className="pageContentRow pageCol2">
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
                        className="pageContentRow pageCol1"
                        profileDeleteConfirm={profileDeleteConfirm}
                        profiles={profiles}
                        events={events}
                        handlers={handlers}
                    />
                </div>
                <Bottom />
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
