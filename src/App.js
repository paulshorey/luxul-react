
// react
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// redux
import { applyMiddleware, createStore, combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import createLogger from 'redux-logger';

// react/redux
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// layout
import Test from './containers/test/Test';
import testReducer from './redux/test';

import Wireless from './containers/wireless/Wireless';
import wirelessReducer from './redux/wireless';

// data
let store = createStore(
    combineReducers({
        test: testReducer,
        wireless: wirelessReducer,
        form: formReducer,
        routing: routerReducer
    }),
    applyMiddleware(createLogger())
);
const history = syncHistoryWithStore(browserHistory, store);

// view
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={history}>
            <Route path="/test(/:uriText)" component={Test} />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;