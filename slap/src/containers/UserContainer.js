import React, { Component } from 'react'
import UserList from '../components/UserList'


class UserContainer extends Component {


  render(){
    return (
      <div id="UserContainer">
        <table>
          <tr>
            <th>Direct Messages</th>
            <td><button>Add</button></td>
          </tr>
          <tr>
            <td>(Status)</td>
            <td>Name</td>
          </tr>
          <UserList />
        </table>
      </div>
    )
  }
}

export default UserContainer
