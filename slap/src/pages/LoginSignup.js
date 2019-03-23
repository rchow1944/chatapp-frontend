import React, { Component } from 'react'
import Login from "../components/Login"
import Signup from "../components/Signup"

class LoginSignup extends Component {
  state = {
    signUp:true,
    button: "Switch to Login"
  }




  handleSwitch=()=>{
    if(this.state.signUp){
      this.setState({
        signUp: !this.state.signUp,
        button: "Switch to Sign Up"
      })
    } else {
      this.setState({
        signUp: !this.state.signUp,
        button: "Switch to Login"
      })
    }
  }





  render () {
    console.log(this.state);
    return (
      <div id="LoginSignup">
        <button id="toggleLoginSignup" onClick={this.handleSwitch}>{this.state.button}</button>
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
