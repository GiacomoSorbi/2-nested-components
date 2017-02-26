import React, { Component } from 'react';
import Circle from './Circle.js';
import './App.css';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <Circle />
      </div>
    );
  }
}

export default Container;