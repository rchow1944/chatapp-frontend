import React, { Component } from 'react'
class Signup extends Component {


  render () {
    return (
      <div className="LoginSignupForm">
        <form>
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
