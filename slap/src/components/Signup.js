import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class Signup extends Component {
  state={
    signup:false
  }

  handleSignup=()=>{
    this.setState({
      signup: true
    })
  }

  render () {
    const signup = this.state.signup;
        if (signup === true) {
            return <Redirect to="/home" />
        }
    return (
      <div className="LoginSignupForm">
        <form onSubmit={this.handleSignup}>
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <input type="submit" value="Signup"/>
        </form>
      </div>
    )
  }
}

export default Signup
