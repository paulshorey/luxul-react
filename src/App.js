// react
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// redux
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createLogger from 'redux-logger';
// react/redux
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux';
// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// app
import Test from './containers/test/Test';
import testReducer from './containers/test/reducer';
import Wireless from './containers/wireless/Wireless';
import wirelessReducer from './containers/wireless/reducer';

// data
const middleware = routerMiddleware(browserHistory);
let store = createStore(
    combineReducers({
        test: testReducer,
        wireless: wirelessReducer,
        form: formReducer,
        routing: routerReducer
    }),
    applyMiddleware(middleware)
);
const history = syncHistoryWithStore(browserHistory, store);

// view
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={history}>
            <Route path="/" component={Wireless} />
            <Route path="/wifi" component={Wireless} />
            <Route path="/test(/:uriText)" component={Test} />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}