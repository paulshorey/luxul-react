import * as vars from './vars';
import {browserHistory} from 'react-router';

/*
	HANDLERS
*/
export function handlers(){
	return {
		...this,
		pageUrl: function(pageUrl) { 
			browserHistory.push(pageUrl);
			this.dispatch(this.events.pageUrl(pageUrl));
		}
	}
};

/*
	EVENTS
*/
export function events(){
	return {
		...this,
		pageUrl: function(pageUrl) { 
			return {
				type: vars.container + '/PAGE_URL',
				pageUrl
			}
		}
	}
}