import React, {Component} from 'react'

class Messages extends Component {
  render(){
    return(
      <li className="messages">{this.props.message}</li>
    )
  }
}

export default Messages
