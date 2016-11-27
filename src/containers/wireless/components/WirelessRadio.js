import React from 'react';

import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class WirelessRadios extends React.Component {
    render() {
        const {
            ghz,
            radios,
            events,
            handlers
        } = this.props;

        return (
            <div>
                <Toggle
                    className="mui-Toggle"
                    label={ghz+" Enabled"}
                    toggled={this.props.radios[ghz].enabled}
                    onToggle={ (event, value) => handlers.radioToggle(ghz, {enabled:value}) }
                />
                <SelectField
                    className="mui-SelectField"
                    floatingLabelText={ghz+" Channel"}
                    value={this.props.radios[ghz].channel}
                    onChange={ (event, key, value) => { handlers.radioChannel(ghz, {channel:value}) } }
                    fullWidth
                    disabled={ ! this.props.radios[ghz].enabled}
                >
                    {(this.props.radios[ghz].channels).map((x, i) => { return <MenuItem key={i} value={x} primaryText={x} />; } )}
                </SelectField>
                <SelectField
                    className="mui-SelectField"
                    floatingLabelText={ghz+" Width"}
                    value={this.props.radios[ghz].width}
                    onChange={ (event, key, value) => { handlers.radioWidth(ghz, {width:value}) } }
                    fullWidth
                    disabled={ ! this.props.radios[ghz].enabled}
                >
                    {(this.props.radios[ghz].widthsAvailableFunction()).map((x,i) => { return <MenuItem key={i} value={x} primaryText={x} disabled={this.props.radios[ghz].disabledWidth==x} />; } )}
                </SelectField>
            </div>
        )
    }
};