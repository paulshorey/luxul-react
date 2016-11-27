// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute, browserHistory } from 'react-router';
// redux
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createLogger from 'redux-logger';
// react/redux
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux';
// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// app
import './containers/app/css/uui.scss';
import './containers/app/css/layout.scss';
import appReducer from './containers/app/reducer';
// wireless
import Wireless from './containers/wireless/Wireless';
import wirelessReducer from './containers/wireless/reducer';
// test
import Test from './containers/test/Test';
import testReducer from './containers/test/reducer';

// data
const middleware = routerMiddleware(browserHistory);
let store = createStore(
    combineReducers({
        test: testReducer,
        wireless: wirelessReducer,
        form: formReducer,
        routing: routerReducer,
        app: appReducer
    }),
    applyMiddleware(middleware)
);
const history = syncHistoryWithStore(browserHistory, store);

// click
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// view
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path="/" component={Wireless} />
        <Route path="/wifi" component={Wireless} />
        <Route path="/test(/:uriText)" component={Test} />
        <Route path="*" component={Test} />
      </Router>
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);
