import React from 'react';

export default class extends React.Component {
    render() {
        console.warn('TestText.js',this.props);
        return (
            <span className="componentTest componentTestText">
                url: {this.props.params.splat},<br />
                uri[0]: {this.props.params.uriText}
            </span>
        )
    }
};