import React, { Component } from 'react'
import User from "../components/User"

class UserList extends Component {


  render(){

    let newUsers = this.props.currentList.map(user => <User key = {user.name} users={user} deleteChat={this.props.deleteChat}/>)
    // let newUser = this.props.currentList.map()

    return (
      <div id="UserList">
        {newUsers}
      </div>
    )
  }
}

export default UserList
