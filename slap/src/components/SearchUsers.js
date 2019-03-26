import React, { Component } from 'react'

class SearchUsers extends Component {

  render(){
    return(
      <div id="search">
        <form className="searchUserForm" onSubmit={this.props.handleUserSearch}>
          <input id="searchUserInput" autocomplete="off" placeholder=" Slap someone!" type="text" value={this.props.searchValue}onChange={this.props.handleSearchOnChange} ></input>
        </form>
      </div>
    )
  }
}

export default SearchUsers
