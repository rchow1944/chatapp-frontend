import React, { Component } from 'react'

class Test extends Component {
  state = {
    user: {}
  }

  componentDidMount(){
    const token = localStorage.token
    token ?
      getCurrentUser(token)
        .then(res => res.json())
        .then(userData => console.log(userData))
          :
      console.log("SignUp")
  }

  handleSignUp = () => {
    postNewUser()
      .then(r => r.json())
      .then(userData => {
        userData.error ? console.log(userData.error) : localStorage.setItem("token", userData.jwt)
      })
  }

  handleLogIn = () => {
    postLogIn()
      .then(res => res.json())
      .then(userData => console.log("Logged in", userData))
  }

  handleLogOut = () => {
    localStorage.removeItem("token")
    console.log("Logged Out");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSignUp}>Sign Up</button>
        <button onClick={this.handleLogIn}>Log In</button>
        <button onClick={this.handleLogOut}>Log Out</button>
      </div>
    )
  }
}

export default Test

//Fetch Helpers
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

function postNewUser() {
  return fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        first_name: 'Bob',
        last_name: 'Bob',
        username: 'guy',
        password: 'hi',
      }
    })
  })
}

function postLogIn() {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: 'guy',
        password: 'hi'
      }
    })
  })
}
