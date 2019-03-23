import React, { Component } from 'react'
import UserList from '../components/UserList'
import SearchUsers from '../components/SearchUsers'
import SearchResult from '../components/SearchResult'


class UserContainer extends Component {

  state={
    activateSearch: false,
    search:'',
    result: [...this.props.users],
    error: "No one to Slap!",
    currentList: []
  }


  clickHandler = () => {
    this.setState({
      activateSearch: !this.state.activateSearch
    })
  }

  handleSearchOnChange=(search)=>{
    console.log(search.target.value);
    this.setState({
      search: search.target.value
    })
    let newUsers = [...this.props.users]
    let foundUser = newUsers.filter(user => user.name.toLowerCase().includes(search.target.value.toLowerCase()))
    if (foundUser.length > 0 && foundUser!== undefined) {
      console.log(foundUser.map(user=> user.name))
      this.setState({
        result: foundUser
      })
    } else if (search.target.value === ''){
      console.log(newUsers.map(user=> user.name))
      this.setState({
        result: newUsers
      })
    } else {
      console.log(this.state.error);
    }
  }
  //
  // addUser =(e)=>{
  //   this.setState({
  //     currentList: [...this.state.currentList, e.name]
  //   })
  // }


    handleUserAdd = (e) => {
      this.setState({
        activateSearch: !this.state.activateSearch,
        currentList: [...this.state.currentList, e]
      })
    }
    deleteChat = (e) => {
      let thisChild = e.target.parentElement.children[1].innerText
      let newUsers = [...this.state.currentList].filter(user=>user.name !== thisChild)
      this.setState({
        currentList: newUsers
      })
    }


  render(){
    console.log(this.state.currentList);
      let results = this.state.result.map(user=> <SearchResult result= {this.state.result} user={user} handleUserAdd={this.handleUserAdd}/>)
    return (
      <div id="UserContainer">
      <span>
      {
        this.state.activateSearch
        ?
        <SearchUsers handleUserSearch={()=>this.props.handleUserSearch(this.state.search)} users={this.props.users} handleSearchOnChange={this.handleSearchOnChange}/>
        :
        <h2>Direct Messages</h2>
      }
        <i id="add" className="fas fa-plus-circle" onClick={this.clickHandler}></i>
      </span>
        <br/>
        <br/>
        <div id="outterSearchDiv">
        {
          this.state.activateSearch
          ?
          results
          :
          <UserList users={this.props.users} deleteChat={this.deleteChat} currentList={this.state.currentList}/>
        }
        </div>
      </div>
    )
  }
}

export default UserContainer
