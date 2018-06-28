import React, { Component } from 'react';
import './App.css';

export default class Content extends Component {
  render() {
    const { tabs, index} = this.props
    if (tabs.length > 0) {
      console.log(tabs[index])
      console.log(index)
    }
    return(
      tabs.length > 0 ? tabs[index].id : <div/>
    )
  }
}