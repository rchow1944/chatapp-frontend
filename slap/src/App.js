import React, { Component } from 'react';
import ReactDom from "react-dom"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav"
import Login from "./pages/Login"
import Home from "./pages/Home"

class App extends Component {


  // componentDidMount(){
  //   fetch()
  //   .then(resp=>resp.json())
  //   .then(console.log)
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Nav/>
          <Switch>
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              {/*<Route path=`/user/${id}` component={User}/>*/}
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
