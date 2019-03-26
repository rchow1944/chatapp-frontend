import React, { Component } from 'react'
import UserList from '../components/UserList'
import SearchUsers from '../components/SearchUsers'
import SearchResult from '../components/SearchResult'


class UserContainer extends Component {

  state={
    activateSearch: false,
    search:'',
    result: [],
    error: "No one to Slap!",
    currentList: [],
    allUsers: []
  }


  clickHandler = () => {
    fetchAllUsers(localStorage.token)
      .then(resp=>resp.json())
      .then(users => {
        const currentListUsernames = this.state.currentList.map(user=>user.username)
        const searchResult = users.allUsers.length > 0 ? users.allUsers.filter(user => currentListUsernames.indexOf(user.username) < 0) : []
        this.setState({
          activateSearch: !this.state.activateSearch,
          allUsers: users.allUsers,
          result: searchResult
        })
      })
  }

  handleUserSearch = (s) =>{
    // console.log(s);
    let newUsers = [...this.state.allUsers]
    let foundUser = newUsers.filter(user => user.username.toLowerCase().includes(s.toLowerCase()))
    console.log(foundUser);
    if (foundUser.length > 0) {
      alert(`${foundUser[0].username} ${foundUser[1].username}`)
    } else {
      alert("No one was found");
    }
  }

  handleSearchOnChange=(search)=>{
    console.log(search.target.value);
    this.setState({
      search: search.target.value
    })
    let newUsers = [...this.state.allUsers]
    let foundUser = newUsers.filter(user => user.username.toLowerCase().includes(search.target.value.toLowerCase()))
    if (foundUser.length > 0 && foundUser!== undefined) {
      console.log(foundUser.map(user=> user.username))
      this.setState({
        result: foundUser
      })
    } else if (search.target.value === ''){
      console.log(newUsers.map(user=> user.username))
      this.setState({
        result: newUsers
      })
    } else {
      console.log(this.state.error);
    }
  }


    handleUserAdd = (receiver) => {
      this.setState({
        activateSearch: !this.state.activateSearch,
        currentList: [...this.state.currentList, receiver]  //currentList = list of receivers
      })

      createNewRoom(receiver, localStorage.token)
        .then(res => res.json())
        .then(room => console.log(room))
      //
      // this.props.handleUserAdd(e)
    }



    deleteChat = (e) => {
      let thisChild = e.target.parentElement.children[1].innerText
      let newUsers = [...this.state.currentList].filter(user=>user.username !== thisChild)
      this.setState({
        currentList: newUsers
      })
    }


  render(){
    console.log(this.state.currentList);
      let results = this.state.result.map(user=> <SearchResult result= {this.state.result} user={user} handleUserAdd={this.handleUserAdd}/>)
    return (
      <div id="UserContainer">

        <div id="outterSearchDiv">
        {
          this.state.activateSearch
          ?
          <SearchUsers handleUserSearch={()=>this.handleUserSearch(this.state.search)} users={this.props.users} searchValue={this.state.search}handleSearchOnChange={this.handleSearchOnChange}/>
          :
          <h2>Direct Messages</h2>
        }

        <i id="add" className="fas fa-plus-circle" onClick={this.clickHandler}></i>
        </div>
        <div id="listDisplay">
        {
          this.state.activateSearch
          ?
          results
          :
          <UserList userRooms={this.props.userRooms} deleteChat={this.deleteChat} currentList={this.state.currentList} handleSelectUser={this.props.handleSelectUser}/>
        }
        </div>
      </div>
    )
  }
}

export default UserContainer


function fetchAllUsers(token){
  return fetch('http://localhost:3001/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
}


function createNewRoom(receiver, token) {
  return fetch('http://localhost:3001/rooms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      room: receiver
    })
  })
}
