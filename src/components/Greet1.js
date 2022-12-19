import React from "react";

// function Greet1() {
//   return <h1>Hello Vishwas New</h1>
// }

const Greet1 = props => {
  //console.log(props)
  return (
    <div>
      <h1>Hello {props.name} a.k.a {props.heroName}</h1>
      {props.children}
    </div>
  )
}
//const Greet1 =() =><h1>Hello Vishwas New</h1>



export default Greet1 