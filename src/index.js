import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/TodoApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const Wrapper = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root'),
);
