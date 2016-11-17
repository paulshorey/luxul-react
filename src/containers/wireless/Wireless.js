import React from 'react';
import { connect } from 'react-redux';
import WirelessRadios from './components/WirelessRadios';
import WirelessProfilesEdit from './components/WirelessProfilesEdit';
import WirelessProfilesDisplay from './components/WirelessProfilesDisplay';
import { setRadioEnabled, setRadioChannel, addProfile, deleteProfile } from '../../redux/wireless';
import './Wireless.scss';

class Wireless extends React.Component {
    render() {
        const { profiles, radios, dispatch } = this.props;

        return (
            <div className="containerWireless">
                <WirelessRadios
                    radios={radios}
                    handleRadioToggle={ (radio, enabled) => dispatch(setRadioEnabled(radio, enabled)) }
                    handleRadioChannel={ (radio, channel) => dispatch(setRadioChannel(radio, channel)) }
                />
                <WirelessProfilesEdit
                    onSubmit={ (profile) => dispatch(addProfile(profile)) }
                />
                <WirelessProfilesDisplay
                    profiles={profiles}
                    handleDelete={ (i) => dispatch(deleteProfile(i)) }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        radios: state.wireless.radios,
        profiles: state.wireless.profiles,
    };
};

export default connect(mapStateToProps)(Wireless);