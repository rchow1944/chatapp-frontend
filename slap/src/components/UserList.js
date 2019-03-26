import React, { Component } from 'react'
import User from "../components/User"

class UserList extends Component {


  render(){

    let newUsers = this.props.userRooms.map(userRoom => <User key={userRoom.room.id} userRoom={userRoom} deleteChat={this.props.deleteChat} handleSelectUser={this.props.handleSelectUser}/>)
    // let newUser = this.props.currentList.map()

    return (
      <div id="UserList">
        {newUsers}
      </div>
    )
  }
}

export default UserList
