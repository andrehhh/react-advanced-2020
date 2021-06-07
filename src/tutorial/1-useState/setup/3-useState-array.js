import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [persons, setPersons] = useState(data);

  // removePerson function on button click, takes in ID.
  const removePerson = (id) => {
    console.log('Removed with ID:', id);
    const newPerson = persons.filter((person) => person.id !== id); // Removed item in the array with filter.
    setPersons(newPerson); // Using setPersons() to set the filtered person.
  }

  // removeList sets the person array empty so it removes the list.
  const removeList = () => {
    setPersons([]);
  }

  return (
    <>
      <ul>
        {
          // Mapping
          persons.map((person) => {
            const { id, name } = person; // Array Destructure

            return (
              <li key={ id }> {/* Each item need to have a key */}
                <h2>{ name }</h2>

                {/* onClick callback function because we are passing an argument  ( () => ) */}
                <button onClick={ () => removePerson(id) }>Remove</button>
              </li>
            )
          })
        }
      </ul>

      {/* onClick no callback function because we are not passing an argument. */}
      <button onClick={ removeList }>Clear Items</button>
    </>
  );
};

export default UseStateArray;
