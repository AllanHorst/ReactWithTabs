import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
import Page1 from './Page1'
import Page2 from './Page2'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [],
      index: null
    }
    this.changeFuckingPage = this.changeFuckingPage.bind(this);
  }

  addFuckingPage(Component) {
    console.log(Component)
    let index = 0
    if (this.state.index) {
      index = this.state.index + 1
    }
    this.setState((prevState) => {
      return {
        tabs: prevState.tabs.concat({id: <Component/>}),
        index: index
      }
    })
  }

  changeFuckingPage(index) {
    this.setState({index})
  }

  render() {
    const { tabs, index } = this.state
    return (
      <div className="App">
        <Header tabs={tabs} changeFuckingPage={this.changeFuckingPage} />
        <button onClick={() => this.addFuckingPage(Page1)}> Page1 </button>
        <button onClick={() => this.addFuckingPage(Page2)}> Page2 </button>
        <Content tabs={tabs} index={index} />
      </div>
    );
  }
}

export default App;
