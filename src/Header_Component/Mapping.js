import React from 'react'
import Person from './Person'

function Mapping() {
    const names = ['bruce','Clark','Diana']
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
    //   const personList = persons.map(person => <person key={person.id} person={person} />)
    //   const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    const personList = persons.map(person => <Person person = {person}/>)   
    return(
        <div id="Table"  style={{border: "2px solid orange"}}>
          <table>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
            <tr>
              <td>a</td>
              <td></td>
            </tr>

          </table>
        </div>
      );
}

export default Mapping


// 1st Default w/o loop ==========================
// const names = ['bruce','Clark','Diana']
//     return (
//         <div>
//             <h2>{names[0]}</h2>
//             <h2>{names[1]}</h2>
//             <h2>{names[2]}</h2>
//         </div>
//     )

// 2nd using map ==========================
// const names = ['bruce','Clark','Diana']
//     return (
//         <div>
//             {
//                 names.map(name => <h2>{name}</h2>)
//             }
//         </div>
//     )

// 3rd way ==========================
// const names = ['bruce','Clark','Diana']
// const nameList = names.map(name => <h2>{name}</h2>)
// return (
//     <div>
//         {nameList}
//     </div>
// )
// return <div>{nameList}</div>

// 4th way ==========================
// const persons = [
//     {
//       id: 1,
//       name: 'Bruce',
//       age: 30,
//       skill: 'React'
//     },
//     {
//       id: 2,
//       name: 'Clark',
//       age: 25,
//       skill: 'Angular'
//     },
//     {
//       id: 3,
//       name: 'Diana',
//       age: 28,
//       skill: 'Vue'
//     }
//   ]

// const personList = persons.map(person => (
//     <h2> I am {person.name}. I am {person.age} years old. I know {person.skill}
//      </h2>
// ))
//   return <div>{personList}</div>


// const personList = persons.map(person => <h2> I am {person.name} and my age is {person.age} with skill {person.skill} </h2> )