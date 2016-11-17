import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

// required for <SelectField>
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// app
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
