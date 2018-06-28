import React, { Component } from 'react';
import './App.css';

export default class Content extends Component {
  render() {
    let { tabs, index } = this.props
    return tabs.map((Tab, i) => (
    	<div className={ `tab-wrapper ${
    		i === index ? 'active' : ''
    	}`}>
    		<Tab/>
    	</div>
    ))
  }
}