import React, { Component } from 'react'

class SearchConversation extends Component {


  render () {
    return (
      <form className="searchConvo">
        <input type="text" autocomplete="off" onChange={this.props.handleSearchConvo} value={this.props.value} placeholder="Find history..."/>
      </form>
    )
  }
}
export default SearchConversation
