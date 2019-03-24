import React, { Component } from 'react'
import Login from "../components/Login"
import Signup from "../components/Signup"

class LoginSignup extends Component {
  state = {
    signUp:true,
  }




  handleSwitch=()=>{
    this.setState({
      signUp: !this.state.signUp,
    })
  }





  render () {
    const buttonText = this.state.signUp? "Switch to Login" :"Switch to Sign Up"
    return (
      <div id="LoginSignup">
        <button id="toggleLoginSignup" onClick={this.handleSwitch}>{buttonText}</button>
        {
          this.state.signUp
          ?
          <Signup />
          :
          <Login />
        }
      </div>
    )
  }
}



export default LoginSignup
