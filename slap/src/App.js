import React, { Component } from 'react';
import ReactDom from "react-dom"
import { withRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav"
import LoginSignup from "./pages/LoginSignup"
import Home from "./pages/Home"
import Error from "./pages/Error"

class App extends Component {
  state ={
    user:{},
    userRooms: [],
    userMessages: [],
  }


  componentDidMount(){
    // userData.messages.filter(message => message.content)
    const token = localStorage.token
    token ?
      getCurrentUser(token)
        .then(res => res.json())
        .then(userData => this.setState({
          user:userData.user,
          userRooms:userData.rooms,
          userMessages: userData.messages
        }, () => {
          // debugger
          console.log(userData)
          this.props.history.push("/home")
        }))
          :
      this.props.history.push("/login")
  }

  handleLogin = (userInfo) =>{

      postLogIn(userInfo).then(resp=>resp.json()).then(userData=>this.setState({
        user:userData.user,
        userRooms:userData.rooms,
        userMessages: userData.messages
      }, () => {
        localStorage.setItem("token", userData.jwt)
        this.props.history.push("/home")
      }))
  }

  handleSignup =(userInfo)=>{
    postNewUser(userInfo).then(resp=>resp.json()).then(userData=>this.setState({
      user:userData.user
    }, ()=>{
      localStorage.setItem("token", userData.jwt)
      this.props.history.push("/home")
    }))
  }
  handleSubmitMessage=(m, currentRoom)=>{
    postNewMessage(m, currentRoom, localStorage.token)
      .then(res => res.json())
      .then(message => this.setState({
        userMessages: [...this.state.userMessages, message]
      }))
  }


  render() {
    return (
      <div id="App">
        <header className="App-header">
        <Nav user={this.state.user}/>
          <Switch>
              <Route exact path="/login" render={()=><LoginSignup handleLogin={this.handleLogin} handleSignup={this.handleSignup}/>} />
              <Route exact path="/home" render={()=><Home user ={this.state.user} userRooms={this.state.userRooms} messages={this.state.userMessages} handleSubmitMessage={this.handleSubmitMessage}/>}/>
              <Route path="/" component={Error} />
              {/*<Route path=`/user/${id}` component={User}/>*/}
          </Switch>
        </header>
      </div>
    );
  }
}

export default withRouter(App);


function getCurrentUser(token) {
  return fetch('http://localhost:3001/messages', {
    headers: {
      method: 'GET',
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
}


function postLogIn(userInfo) {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: userInfo
    })
  })
}



function postNewUser(userInfo) {
  return fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: userInfo
    })
  })
}

function postNewMessage(newMessage, currentRoom, token) {
  // debugger
  return fetch('http://localhost:3001/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/jqson',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({message:{
      content: newMessage,
      room_id: currentRoom.room.id
    }})
  })
}
