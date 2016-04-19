import React from 'react';
import { Component } from 'react';
import Header from '../containers/header.js';

export default class App extends Component {
  render() {
    return (
	<div className="app-component-body">
        <Header/>
        <div className="main-content">
          {this.props.children}
        </div>
    </div>
    );
  }
}
