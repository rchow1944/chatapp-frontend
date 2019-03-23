import React, { Component } from 'react'

class SearchUsers extends Component {

  render(){
    return(
      <div id="search">
        <form className="searchUserForm" onSubmit={this.props.handleUserSearch}>
          <input id="searchUserInput" placeholder=" Find someone to slap!" type="text" onChange={this.props.handleSearchOnChange} ></input>
        </form>
      </div>
    )
  }
}

export default SearchUsers
