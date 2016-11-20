import React from 'react';

export default class extends React.Component {
    render() {
        console.warn('TestText.js',this.props);
        return (
            <span className="componentTest componentTestText">
                uri: {this.props.params.uriText},<br />
                data: {this.props.data.text}
            </span>
        )
    }
};