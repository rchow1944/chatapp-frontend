import React, {Component} from 'react'

class Messages extends Component {
  state ={
    clicked: true
  }

  handleHeart =()=> {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  render(){
    // const timestamp = Date.now(); // This would be the timestamp you want to format
    // let parsedTimestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
    return(
      <div className="messages" onClick={this.handleHeart}>
        {this.props.message}
        {
          this.state.clicked
          ?
          <i className="far fa-heart"/>
          :
          <img src="http://icons.iconarchive.com/icons/google/noto-emoji-people-family-love/256/12138-red-heart-icon.png" className="redHeart"/>
        }
      </div>
    )
  }
}

export default Messages
