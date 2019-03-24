import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class Login extends Component {
  state={
    login:false
  }

  handleLogin=()=>{
    this.setState({
      login: true
    })
  }


  render () {
    const login = this.state.login;
        if (login === true) {
            return <Redirect to="/home" />
        }
    return (
      <div className="LoginSignupForm">
        <form onSubmit={this.handleLogin}>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <input type="submit" name="Login"/>
        </form>
      </div>
    )
  }
}

export default Login
