import React from 'react';

import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class WirelessRadios extends React.Component {
    render() {
        const {
            radios: {
                "2.4GHz": {
                    enabled: radio24Enabled,
                    channel: radio24Channel,
                    width: radio24Width,
                },
                "5GHz": {
                    enabled: radio5Enabled,
                    channel: radio5Channel,
                    width: radio5Width,
                }
            },
            handleRadioToggle,
            handleRadioChannel,
            handleRadioWidth
        } = this.props;

        return (
            <div className="componentWireless componentWirelessRadios optionsContainer">
                <h3>Configure Radios</h3>
                
                {/* 2.4G */}
                <Toggle
                    label="2.4 GHz Enabled"
                    toggled={radio24Enabled}
                    onToggle={ (event, value) => handleRadioToggle("2.4GHz", value) }
                />
                <SelectField
                    floatingLabelText="2.4 GHz Channel"
                    value={this.props.radios['2.4GHz'].channel}
                    onChange={ (event, key, value) => { handleRadioChannel("2.4GHz", value) } }
                    fullWidth
                >
                    {[...Array(11)].map((x, i) => { if (i) { return <MenuItem key={i} value={i} primaryText={i} />; } } )}
                </SelectField>
                <SelectField
                    floatingLabelText="Width (Above/Below)"
                    value={this.props.radios['2.4GHz'].width}
                    onChange={ (event, key, value) => { handleRadioWidth("2.4GHz", value); } }
                    fullWidth
                >
                    <MenuItem value={"Above"} primaryText="Above" />
                    <MenuItem value={"Below"} primaryText="Below" />
                </SelectField>

                {/* 5G */}
                <Toggle
                    label="5 GHz Enabled"
                    toggled={radio5Enabled}
                    onToggle={ (event, value) => handleRadioToggle("5GHz", value) }
                />
                <SelectField
                    floatingLabelText="5 GHz Channel"
                    value={radio5Channel}
                    onChange={ (event, key, value) => handleRadioChannel("5GHz", value) }
                    fullWidth
                >
                    <MenuItem value={40} primaryText="40" />
                    <MenuItem value={153} primaryText="153" />
                </SelectField>

            </div>
        )
    }
}

// WirelessRadios.propTypes = {
//     radios: React.PropTypes.object,
//     handleRadioToggle: React.PropTypes.func,
//     handleRadioChannel: React.PropTypes.func,
//     handleRadioWidth: React.PropTypes.func,
// };