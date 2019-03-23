import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import MessageWindow from '../components/MessageWindow'

class RoomContainer extends Component {

  state ={
    messages:["Hey", "whats up", "my name is Joseph", "i like durians", "more food please", "this shit is so hard", "why wont you stay on the bototm of the page!!", "i need this shit to work", "what day is today", "do i need a god damn umbrella or not", "money", "more money", "lots of money"]
  }
  handleSubmitMessage=(m)=>{
    console.log(m);
    this.setState({
      messages: [...this.state.messages, m]
    })
  }


  render (){
    // console.log("it works", this.state.messages);
    return (

      <div id="RoomContainer">
        <h1>RoomContainer</h1>
        <MessageWindow messages={this.state.messages}/>
        <TextInput handleSubmitMessage={this.handleSubmitMessage}/>
      </div>
    )
  }
}

export default RoomContainer
