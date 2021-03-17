import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'popper.js/dist/popper-utils';
import 'bootstrap/dist/js/bootstrap';
import App from './containers/App';
import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => (
  <App />
);

ReactDOM.render(<Index />, document.getElementById('root'));
