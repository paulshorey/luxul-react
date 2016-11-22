import React from 'react';

import Paper from 'material-ui/Paper';

import WirelessRadio from './WirelessRadio';

export default class WirelessRadios extends React.Component {
    render() {
        const {
            radios,
            events,
            handlers
        } = this.props;

        return (
            <Paper zDepth={4} className="componentWireless componentWirelessRadios">
                <h3>Configure Radios</h3>
                
                {(radios.all.keys).map((x, i) => { return <WirelessRadio key={i} ghz={x} radios={radios} events={events} handlers={handlers} />; } )}

            </Paper>
        )
    }
};