import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Shape(props) {
    return (
        <div className={props.type}></div>
    );
}

export default Shape;