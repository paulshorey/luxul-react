import React from 'react';
import { connect } from 'react-redux';

import AppTop from './../app/components/AppTop';
import AppBottom from './../app/components/AppBottom';

//import { setRadioEnabled, setRadioChannel, setRadioWidth, addProfile, profileDelete } from '../../redux/test';
import './css/layout.scss';

// layout
class Test extends React.Component {
    preventLocationChange = (e) => { e.preventDefault(); }

    render() {
       //console.log('Test.js props',this.props);

        return (
            <div className="container containerTest">
                <AppTop handlers={this.props.route.handlers} />
                <div className="section sectionTest">
                	<ul>
				<li><b>location.pathname:</b> {this.props.location.pathname}</li>
				<li><b>page:</b> {this.props.app.page.title}</li>
				<li className={this.props.params.category ? '' : 'hidden'}><b>category:</b> {this.props.params.category}</li>
			</ul>
			<p>
				<a href="/test/something-else" onClick={ (e) => { e.preventDefault(); } } onTouchTap={ ()=>{ this.props.route.handlers.pageUrl('/test/something-else'); } }>/test/something-else</a>
			</p>
			<p>
				<a href="/some-random-url" onClick={ (e) => { e.preventDefault(); } } onTouchTap={ ()=>{ this.props.route.handlers.pageUrl('/some-random-url'); } }>/some-random-url</a>
			</p>
                </div>
                <AppBottom handlers={this.props.route.handlers} />
            </div>
        )
    }
}

// data
const mapStateToProps = (state) => {
    console.log('Test.js state', state);
    return {
    	app: state.app
    };
};
export default connect(mapStateToProps)(Test);