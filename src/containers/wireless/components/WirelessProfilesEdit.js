import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {TextField, SelectField, Toggle} from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
//import CSSModules from 'react-css-modules';

class WirelessProfilesEdit extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="componentWireless componentWirelessProfilesEdit containersWireless" onSubmit={handleSubmit}>
                <h3>Add WiFi Profile</h3>
                <Field
                    name="radio"
                    component={SelectField}
                    floatingLabelText="Band"
                    fullWidth
                >
                    <MenuItem value="2.4GHz" primaryText="2.4GHz" />
                    <MenuItem value="5GHz" primaryText="5GHz" />
                </Field>
                <Field
                    name="ssid"
                    component={TextField}
                    floatingLabelText="SSID"
                    fullWidth
                />
                <Field
                    name="ssidBroadcast"
                    component={Toggle}
                    label="SSID Broadcast"
                />
                <Field
                    name="clientIsolation"
                    component={Toggle}
                    label="Client Isolation"
                />
                <Field
                    name="security"
                    component={SelectField}
                    floatingLabelText="Security"
                    fullWidth
                >
                    <MenuItem value="none" primaryText="None" />
                    <MenuItem value="wpa" primaryText="WPA" />
                    <MenuItem value="wpa2" primaryText="WPA2" />
                    <MenuItem value="vpa+wpa2" primaryText="WAP/WPA2 Mixed" />
                </Field>
                <RaisedButton
                    label="Add"
                    type="submit"
                    primary

                />
            </form>
        )
    }
}
//export default CSSModules(WirelessProfilesEdit, styles);

export default reduxForm({
    form: 'profile',
    initialValues: {
        radio: "2.4GHz",
        ssid: "",
        ssidBroadcast: true,
        clientIsolation: false,
        security: "none"
    }
})(WirelessProfilesEdit);