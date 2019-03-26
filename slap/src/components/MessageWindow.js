import React, { Component } from 'react'
import Messages from './Messages'

class MessageWindow extends Component {
  



  render(){

    let messages = this.props.messages.map(message => <Messages key={message.content} message={message}/>)
    // let userName = this.props.handleCurrentConversation./(message => <Messages key={message} message={message}/>)


    // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
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
