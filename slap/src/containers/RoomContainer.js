import React, { Component } from 'react'
import SearchConversation from '../components/SearchConversation'
import TextInput from '../components/TextInput'
import MessageWindow from '../components/MessageWindow'
class RoomContainer extends Component {

  state = {
    value: ''
  }



  handleSearchValue=({target:{value}})=> this.setState({value})

  render (){
    // console.log("it works", this.state.messages);
    console.log(this.props.messages)
    const newMessages = this.props.messages.length > 0 ?
      this.props.messages.filter(mess => mess.content.toLowerCase().includes(this.state.value.toLowerCase()))
      : []

    return (

      <div id="RoomContainer">
        <div className="searchDiv">
          <h1>{this.props.handleCurrentRoom.username}</h1>
          <SearchConversation handleSearchConvo={this.handleSearchValue} value={this.state.value}/>
        </div>
        <MessageWindow messages={this.props.messages} handleCurrentRoom={this.props.handleCurrentRoom}/>
        <TextInput handleSubmitMessage={this.props.handleSubmitMessage}/>
      </div>
    )
  }
}

export default RoomContainer
