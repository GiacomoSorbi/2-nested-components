import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shape from './shape.js';

class App extends Component {
  render() {
    return (
        <Shape type="rectangular"/>
    );
  }
}

export default App;
