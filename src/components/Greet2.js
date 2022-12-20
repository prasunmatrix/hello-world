import React from "react";

// function Greet1() {
//   return <h1>Hello Vishwas New</h1>
// }

const Greet2 = ({name,heroName}) => {
  //console.log(props)
  return (
    <div>
      <h1>Hello {name} congratulation for your {heroName} win</h1>
      {/* {props.children} */}
    </div>
  )
}
//const Greet1 =() =><h1>Hello Vishwas New</h1>



export default Greet2