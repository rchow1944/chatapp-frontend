import React, { Component } from 'react'
import Messages from './Messages'

class MessageWindow extends Component {
  render(){

    let messages = this.props.messages.map(message => <Messages key={message} message={message}/>)

    return (
      <div id="MessageWindow">
        <ol>
          {messages}
        </ol>
      </div>
    )
  }
}

export default MessageWindow
