import React, { Component } from 'react'
import UpdateComponent from './withCounter'

export class HoverCounter extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  
  render() {
    const { count }=this.state      
    return <h2 onMouseOver={this.incrementCount}>{this.props.name} Hover {count} times</h2>  
  }
}

export default UpdateComponent(HoverCounter)
