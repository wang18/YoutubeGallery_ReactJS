import React from 'react';
import './App.css';

import AddForm from './components/addForm';
var ReactCreateClass = require('create-react-class');

var App =  ReactCreateClass({
  render() {
    return (
      <div className="App">
        <AddForm />
      </div>
    );
  }
});

export default App;
