import React, { Component } from 'react';
import ReactDom from "react-dom"
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav"
import LoginSignup from "./pages/LoginSignup"
import Home from "./pages/Home"
import Error from "./pages/Error"

class App extends Component {


  // componentDidMount(){
  //   fetch()
  //   .then(resp=>resp.json())
  //   .then(console.log)
  // }

  render() {
    return (
      <div id="App">
        <header className="App-header">
        <Nav/>
          <Switch>
              <Route exact path="/login" component={LoginSignup} />
              <Route exact path="/home" component={Home} />
              <Route path="/" component={Error} />
              {/*<Route path=`/user/${id}` component={User}/>*/}
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
