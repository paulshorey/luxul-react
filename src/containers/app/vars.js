import React from 'react';
import FontIcon from 'material-ui/FontIcon';

// vars.container
export const container = 'app';
// vars.initialState
export const initialState = (function(){
	// map
	let state = {
		pages: new Map([
			["/secondary/etc", {
				secondaryNavPosition: '',
				title: "Page On Secondary Navigation",
				icon: <FontIcon className="material-icons">wifi</FontIcon>
			}], 
			["/wifi", {
				mainNavPosition: 1,
				title: "Configure Your WiFi",
				icon: <FontIcon className="material-icons">wifi</FontIcon>
			}], 
			["/", {
				mainNavPosition: 0,
				title: "Dashboard",
				icon: <FontIcon className="material-icons">dashboard</FontIcon>
			}],
			["/test/text", {
				mainNavPosition: 2,
				title: "Test",
				icon: <FontIcon className="material-icons">help</FontIcon>
			}],
			["/404", {
				title: "Page Not Found",
				icon: <FontIcon className="material-icons">help</FontIcon>
			}]
		])
	};
	// add
	state.page = state.pages.get(window.location.pathname);
	if (!state.page) {
		state.page = state.pages.get('/404');
	}
	// wtf
	return state;
}());