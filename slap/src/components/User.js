import React, { Component } from 'react'

class User extends Component {
  state = {
    active: false
  }

  handleSelectUser=(e)=>{
    this.setState({
      active: !this.state.active
    })
    this.props.handleSelectUser(e)
  }



  render () {
    // debugger
    const username = this.props.userRoom.receiver ? this.props.userRoom.receiver.username : ""
    return (
      <div className="User">
        <span>
        <span>{this.state.active ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}</span>
        <span onClick={()=>this.handleSelectUser(this.props.userRoom)} className="userName">{username}</span>
        <i onClick={this.props.deleteChat}className="fas fa-times"></i>
        </span>
      </div>
    )
  }
}

export default User
