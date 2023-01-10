import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {
  
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     count: 0
  //   }
  // }

  // incrementCount = () => {
  //   this.setState(prevState => {
  //     return { count: prevState.count + 1 }
  //   })
  // }
  
  render() {
    //const { count }=this.state
    const {count,incrementCount}=this.props      
    return <h2 onMouseOver={incrementCount}>{this.props.name} Hover {count} times</h2>  
  }
}

export default withCounter(HoverCounter)
