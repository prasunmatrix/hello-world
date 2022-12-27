import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
  let className1=props.primary? 'primary': ''
  return (
    <div>
      <h1 className={`${className1} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
