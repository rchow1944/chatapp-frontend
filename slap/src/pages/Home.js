import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import RoomContainer from '../containers/RoomContainer'

class Home extends Component{

  state = {
    users: [{
              name: "Joseph"
            }, {
              name: "Raymond"
            }, {
              name: "Tony"
            }, {
              name: "John"
            }, {
              name: "Redmond"
            }, {
              name: "Edwin"
            }],
    search: '',
  }



  handleUserSearch = (s) =>{
    // console.log(s);
    let newUsers = [...this.state.users]
    let foundUser = newUsers.filter(user => user.name.toLowerCase().includes(s.toLowerCase()))
    console.log(foundUser);
    if (foundUser.length > 0) {
      alert(`${foundUser[0].name} ${foundUser[1].name}`)
    } else {
      alert("No one was found");
    }
  }





  render () {
    // console.log(this.state.addUser);
    return (
      <div id="Home">
          <UserContainer users={this.state.users} handleUserSearch={this.handleUserSearch}  />
          <RoomContainer />
      </div>
    )
  }
}

export default Home
