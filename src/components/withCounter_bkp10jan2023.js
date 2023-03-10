import React from "react";

const UpdateComponent = OriginalComponent => {
  class newComponent extends React.Component {
    
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
      return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} name="PRASUN" />
    }
  }
  return newComponent
}

export default UpdateComponent