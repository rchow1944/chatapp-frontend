import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class Login extends Component {
  state={
    username:'',
    password: ''
  }

  handleLogin=(e)=>{
    e.preventDefault()

    this.props.handleLogin(this.state)

    this.setState({
      username: '',
      password: ''
    })
  }

  handleChangeUsername =(e)=> {
    this.setState({
      username: e.target.value
    })
  }
  handleChangePassword =(e)=> {
    this.setState({
      password: e.target.value
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
          <input type="text" placeholder="Username" onChange={this.handleChangeUsername} value={this.state.username}/>
          <input type="password" placeholder="Password" onChange={this.handleChangePassword} value={this.state.password}/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

export default Login
