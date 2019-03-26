import React, { Component } from 'react'

class Error extends Component {
    state ={
      messages:[],
      value: ""
    }

    handleSubmitMessage=(event)=>{
      event.preventDefault()

      this.setState({
        messages: [...this.state.messages, event.target.firstChild.value],
        value: ""
      })
    }

    handleChangeMessage=(e)=>{
      this.setState({
        value: e.target.value
      })
    }



  render(){
    let messages = this.state.messages.map(mess => <li>{mess}</li>)
    console.log(this.state);
    return(
      <div>
      <div id="error404">
      <h1>404</h1>
      <h3>TALK TO THE WALL WHILE WE FIX THIS</h3>
      </div>
      <div id="errorPage">

        <div >
          <div id="errorDisplay">
          {messages}
          </div>
        </div>



      </div>
      <div id="errorInput">
      <form onSubmit={this.handleSubmitMessage} id="textInputForm">
      <input id="textInputInput" autocomplete="off" onChange = {this.handleChangeMessage} value={this.state.value} type="text" placeholder="S l a p   a w a y!"/>
      <button id="submit"></button>
      </form>
      </div>
      </div>
    )
  }
}

export default Error
