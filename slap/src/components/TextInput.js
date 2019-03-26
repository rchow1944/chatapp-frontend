import React, { Component } from 'react'
import { Picker } from 'emoji-mart'
class TextInput extends Component {
  state = {
    message:'',
    toggleEmoji: false
  }


  handleChangeMessage = (message) => {
    // console.log(m.target.value);
    this.setState({
      message: message.target.value
    })
  }

  handleSubmitMessage = (e) => {
    e.preventDefault()
    this.props.handleSubmitMessage(this.state.message, this.props.currentRoom)
    this.setState({
      message: ''
    })
  }

  toggleEmojiPicker =()=>{
    this.setState({
      toggleEmoji: !this.state.toggleEmoji
    })
  }

  addEmoji =(e)=>{
    this.setState({
      message: this.state.message + e.native
    })
  }

  render() {
    console.log(this.state.message);
    return (
      <div id="textInputOuterDiv">

        <form onSubmit={this.handleSubmitMessage} id="textInputForm">
          <input id="textInputInput" autocomplete="off" onChange = {this.handleChangeMessage} value={this.state.message} type="text" placeholder="S l a p   a w a y!"/>
          <button id="submit">Slap!</button>
        </form>
        <div id="emojiBox">
        <input type="button" id="toggleEmoji" onClick={this.toggleEmojiPicker} value=";-)"></input>
        {
          this.state.toggleEmoji
          ?
          <Picker set='emojione' title='Slap an emoji!' emoji='point_up' onSelect={this.addEmoji}/>
          :
          null

        }
        </div>
      </div>
    )
  }
}

export default TextInput
