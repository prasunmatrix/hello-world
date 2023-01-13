import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      // <div>
      //   Component F  
      // </div>
      <UserConsumer>
        {
          (username)=>{
            return <div>Hello <strong>{username}</strong></div>
          }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF
