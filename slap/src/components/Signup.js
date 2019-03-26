import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class Signup extends Component {
  state={
    username: '',
    first_name: '',
    last_name: '',
    password: ''
  }

  handleSignup=(e)=>{
    e.preventDefault()

    this.props.handleSignup(this.state)

    this.setState({
      username: '',
      first_name: '',
      last_name: '',
      password: ''
    })
  }

  handleChange =(e)=> {
    this.setState({
      [e.target.name]: e.target.value
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
          <input type="text" placeholder="First Name" autoComplete="off" value={this.state.first_name}name="first_name" onChange={this.handleChange}/>
          <input type="text" placeholder="Last Name" autoComplete="off" value={this.state.last_name}name="last_name"onChange={this.handleChange}/>
          <input type="text" placeholder="Username" autoComplete="off" value={this.state.username}name="username"onChange={this.handleChange}/>
          <input type="password" placeholder="Password" value={this.state.password}name="password"onChange={this.handleChange}/>
          <input type="submit" value="Signup"/>
        </form>
      </div>
    )
  }
}

export default Signup
