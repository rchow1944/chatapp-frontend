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
    <div className="messageOutmostDiv">
      <div className="messages" onClick={this.handleHeart}>
        <div>
        {this.props.message.content}
        </div>
      </div>
      <div className="moveHeart">
      {
        this.state.clicked
        ?
        <i className="far fa-heart blankheart"/>
        :
        <span className="redheart">
          <i className="fas fa-heart"/>
        </span>
      }
      </div>
    </div>
    )
  }
}

export default Messages
