import React from "react";

//const withCounter = WrappedComponent => {
  const withCounter = (WrappedComponent,incrementNumber) => {  
  class withCounter extends React.Component {
    
    constructor(props) {
      super(props)
  
      this.state = {
        count: 0
      }
    }
  
    incrementCount = () => {
      this.setState(prevState => {
        //return { count: prevState.count + 1 }
        return { count: prevState.count + incrementNumber }
      })
    }

    render() {
      return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} name="PRASUN" />
    }
  }
  return withCounter
}

//export default UpdateComponent
export default withCounter