import React, { Component } from 'react'

class TextInput extends Component {
  state = {
    message:''
  }


  handleChangeMessage = (message) => {
    // console.log(m.target.value);
    this.setState({
      message: message.target.value
    })
  }

  handleSubmitMessage = (e) => {
    e.preventDefault()
    this.props.handleSubmitMessage(this.state.message)
    // debugger
    e.target.firstElementChild.value = ''
  }



  render() {
    console.log(this.state.message);
    return (
      <form onSubmit={this.handleSubmitMessage} id="textInputForm">
        <input id="textInputInput" onChange = {this.handleChangeMessage} type="text" placeholder="Slap away!"/>
        <button id="submit">Slap!</button>
      </form>
    )
  }
}

export default TextInput
