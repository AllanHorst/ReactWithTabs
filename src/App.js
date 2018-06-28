import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
import Page1 from './Page1'
import Page2 from './Page2'
import './App.css';

class App extends Component {
  
  state = { 
    tabs: [],
    index: 0
  }

  addFuckingPage(component) {
    this.setState(prevState => ({
      tabs: [...prevState.tabs, component],
      index: prevState.tabs.length
    }))
  }

  changeFuckingPage(index) {
    console.log(index)
    this.setState({ index })
  }

  render() {
    const { tabs, index } = this.state
    return (
      <div className="App">
        <Header tabs={tabs} changeFuckingPage={ index => this.changeFuckingPage(index) } />
        <button onClick={ () => this.addFuckingPage(Page1) }> Page1 </button>
        <button onClick={ () => this.addFuckingPage(Page2) }> Page2 </button>
        <Content tabs={tabs} index={index} />
      </div>
    );
  }
}

export default App;
