import React, { Component } from 'react'

class SearchResult extends Component {
  render () {

    return (
      <div id="searchResult">
        <span>
          <span><li>{this.props.user.username}</li></span>
          <i onClick={()=>this.props.handleUserAdd(this.props.user)}className="fas fa-plus"></i>
        </span>
      </div>
    )
  }
}
export default SearchResult
