import React, { Component } from 'react'
class Login extends Component {


  render () {
    return (
      <div className="LoginSignupForm">
        <form>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <input type="submit" name="Login"/>
        </form>
      </div>
    )
  }
}

export default Login
