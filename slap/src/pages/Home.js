import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import RoomContainer from '../containers/RoomContainer'
class Home extends Component{

  state = {
    currentRoom: {}
  }


  handleSelectUser=(userRoom)=>{
    this.setState({
      currentRoom: userRoom
    }, console.log(userRoom))
  }


  render () {
    // console.log(this.state.addUser);

    const roomMessages = Object.keys(this.state.currentRoom).length > 0 ? this.props.messages.filter(message => message.room_id === this.state.currentRoom.room.id) : []
    return (
      <div id="Home">
          <UserContainer handleUserSearch={this.handleUserSearch} handleSelectUser={this.handleSelectUser} handleUserAdd={this.handleSelectUser} userRooms={this.props.userRooms}/>
          <RoomContainer handleSubmitMessage={this.props.handleSubmitMessage} currentRoom={this.state.currentRoom} messages={roomMessages}/>
      </div>
    )
  }
}

export default Home
