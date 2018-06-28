import React, { Component } from 'react';
import './App.css';

export default class Header extends Component {
  render() {
    return(
      <div className="header">
        <ul className="list">
          {
            this.props.tabs.map((tab, i) => {
              return(
                <li key={i} onClick={() => this.props.changeFuckingPage(i)}> Item </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}