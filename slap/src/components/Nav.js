import React, {Component} from "react"

class Nav extends Component{
  render(){
    return(
      <div id="Nav">
        <div className="NavComponents">
          <img id="NavIcon" src="https://cdn1.iconfinder.com/data/icons/paper-rock-scissors-1/100/Halt-512.png"/>
          <h1> Slap! (userName)</h1>
          <h1>logout</h1>
        </div>
      </div>
    )
  }
}

export default Nav
