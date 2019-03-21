import React, { Component } from 'react'

class User extends Component {
  state = {
    active: false
  }


  render () {
    return (
      <div>
      <tr>
        <td>
          <h3>(status)</h3>
        </td>
        <td>
          <h3>Individual Users</h3>
        </td>
      </tr>
      </div>
    )
  }
}

export default User
