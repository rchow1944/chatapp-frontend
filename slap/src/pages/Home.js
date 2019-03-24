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
    theme: 'light'

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

  handleThemeClearlyWhite=()=>{
    console.log("white");
    this.setState({
      theme: "whitewhite"
    })
  }

  handleThemeDeepSea=()=>{
    this.setState({
      theme: "navy"
    })
  }

  handleThemeFancySpancy =()=> {
    this.setState({
      theme: "rainbow"
    })
  }


  render () {
    // console.log(this.state.addUser);
    return (
      <div id="Home">
          <UserContainer users={this.state.users} handleUserSearch={this.handleUserSearch} handleTheme={this.state.theme}/>
          <RoomContainer handleTheme={this.state.theme}/>
      </div>
    )
  }
}

export default Home
