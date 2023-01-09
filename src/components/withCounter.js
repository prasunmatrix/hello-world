import React from "react";

const UpdateComponent = OriginalComponent => {
  class newComponent extends React.Component {
    render() {
      return <OriginalComponent name='RAJAN' />
    }
  }
  return newComponent
}

export default UpdateComponent