import React, { Component } from 'react'
import Messages from './Messages'

class MessageWindow extends Component {




  render(){
    // console.log("hey", this.props);
    //
    // let allMessagesWithThisUser
    // if(this.props){
    //   console.log("hey", this.props);
    // }
    let allMessagesWithThisUser
    let messages

    if(Object.keys(this.props.currentRoom).length>0 && this.props.messages.length>0){
      allMessagesWithThisUser = this.props.messages.concat(this.props.currentRoom.receiver.messages)
      messages = allMessagesWithThisUser.map(message => <Messages message={message}/>).sort((a,b)=> {
        if(a.props.message.created_at < b.props.message.created_at){
          return -1
        }
        if(a.props.message.created_at > b.props.message.created_at) {
          return 1
        }
        return 0
      })
      // messages.map(message => Date.parse(message.created_at))
      // messages.sort((a,b)=> a.props.message.created_at < b.props.message.created_at)

      // debugger

      // console.log(allMessagesWithThisUser);
      // console.log(messages);
    }
    // debugger

    // let userName = this.props.handleCurrentConversation./(message => <Messages key={message} message={message}/>)


    // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
    return (
      <div id="MessageWindow">
      {console.log("messagewindow", this.props)}
        <ol>
          {messages}
        </ol>
      </div>
    )
  }
}

export default MessageWindow
