import React, { Component } from 'react';
import ReactDom from "react-dom"
import './App.css';
import Nav from "./components/Nav"
import Test from "./components/Test"

// <header className="App-header">
// <Nav/>
// </header>
class App extends Component {
  render() {
    return (
      <div className="App">
        <Test />
      </div>
    );
  }
}

export default App;
