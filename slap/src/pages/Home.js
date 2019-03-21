import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import RoomContainer from '../containers/RoomContainer'

class Home extends Component{
  render () {
    return (
      <div id="Home">
          <UserContainer />
          <RoomContainer />
      </div>
    )
  }
}

export default Home
