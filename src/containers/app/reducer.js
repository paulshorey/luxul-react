import * as vars from './vars';

/*
    REDUCER
*/
export default function appReducer(initialState = vars.initialState, action = {}) {
    switch (action.type) {
        case vars.container+'/PAGE_URL':
        {
        	let state = Object.assign({},initialState);
        	state.url = action.pageUrl;
        	state.page = state.pages.get(action.pageUrl);
		return state;
        }
    	default:
    	return initialState;
    }
}

