import React, {Component} from "react"
import {Redirect, withRouter} from "react-router-dom"
class Nav extends Component{

  handleLogOut=()=>{
    localStorage.removeItem("token")
    this.props.history.push("/login")
  }

  render(){

    return(
      <div id="Nav">
        <div className="NavComponents">
          <img id="NavIcon" src="https://cdn1.iconfinder.com/data/icons/paper-rock-scissors/100/Halt1-512.png"/>
          <h1> Slap! </h1>
          <div id="nameNlogout">
            <h1>{
              Object.keys(this.props.user).length > 0
              ?
              this.props.user.username.toUpperCase()
              :
              null
            }</h1>
              <div>
                <div>
                {
                  Object.keys(this.props.user).length > 0
                  ?
                  <button onClick={this.handleLogOut} id="logOutButton">Logout</button>
                  :
                  null
                }
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Nav)
