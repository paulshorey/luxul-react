import React from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';

class Top extends React.Component {
    render() {
        console.warn('Top.js',this.props);
        return (
            <AppBar className="componentTop" title={this.props.title}></AppBar>
        )
    }
};

// data
const mapStateToProps = (state) => {
    return {
        title: 'Title set in Top.js'
    };
};
export default connect(mapStateToProps)(Top);