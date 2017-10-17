import './index.css';
import './App.css';
var App = require('./App');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI');

AppAPI.getVideo();

ReactDOM.render(
    <App />,
    document.getElementById('app')
);