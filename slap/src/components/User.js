import React, { Component } from 'react'

class User extends Component {
  state = {
    active: false
  }


  render () {
    return (
      <div className="User">
        <span>
        <span>{this.state.active ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}</span>
        <span>{this.props.users.name}</span>
        <i onClick={this.props.deleteChat}className="fas fa-times"></i>
        </span>
      </div>
    )
  }
}

export default User
