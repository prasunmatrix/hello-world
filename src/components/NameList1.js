import React from 'react'
import Person from './Person';

function NameList1() {
  const names = ['Bruce', 'Clark', 'Diana','Bruce'];
  const persons=[
    {
      id:1,
      name:'Bruce',
      age:30,
      skill: 'React'
    },
    {
      id:2,
      name:'Clark',
      age:25,
      skill: 'Angular'
    },
    {
      id:3,
      name:'Diana',
      age:28,
      skill: 'Vue'
    }
  ]
  const nameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
  // const personList = persons.map(person => (
  // <h2>I am {person.name}. I am {person.age} years old.I know {person.skill}</h2>
  // ))
  //const personList = persons.map(person => <Person key={person.name} person={person}></Person>)
  // return <div>{ nameList }</div>\
  return <div>{ nameList }</div>  
}

export default NameList1
