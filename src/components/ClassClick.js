import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClassClick extends Component {
  static propTypes = {

  }
  
  clickHandaler(){
    console.log('click me button');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandaler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
