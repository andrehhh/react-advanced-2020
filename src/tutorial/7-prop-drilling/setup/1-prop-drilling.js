import React, { useState } from 'react';
import { data } from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

// PropDrilling means moving down a function to 2 or more components below the actual component.
// The actual component will have the state value in which we would like to change.
// In this case we have the 'people' state.
const PropDrilling = () => {
  console.count('PropDrilling'); // Test How many times this component is called

  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    console.log(`remove ${id}`);
    setPeople((people) => {
      return (
        people.filter((person) => person.id !== id)
      )
    });
  }

  return (
    <>
      <People people={people} removePerson={removePerson} />
    </>
  )
};

const People = ({ people, removePerson }) => {
  console.count('People'); // Test How many times this component is called
  return (
    <>
      {
        people.map((person) => {
          return <Person key={person.id} {...person} removePerson={removePerson} />
        })
      }
    </>
  )
}

const Person = ({ id, name, removePerson }) => {
  console.count('Person'); // Test How many times this component is called
  return (
    <>
      <li>{name}</li>
      <button onClick={() => removePerson(id)}>remove</button>
    </>
  )
}

export default PropDrilling;
