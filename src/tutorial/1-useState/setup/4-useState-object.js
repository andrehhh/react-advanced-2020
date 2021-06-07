import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  const { name, age, message }  = person; // Array Destructure

  // Function on button click, change message
  const changeMessage = () => {

    // Copies all data to new object, and change message. (Lame method)
    // const newPerson = {name: name, age: age, message: message, message: 'Hello World'};

    // Simplified version, copies all data of an object with (...)
    const newPerson = {...person, message: 'Hello World'};
    setPerson(newPerson);
  }

  return (
    <>
      <h3>{ name }</h3>
      <h6>{ age }</h6>
      <p>{ message }</p>

      {/* onClick no callback function because we are not passing an argument */}
      <button onClick={ changeMessage }>Change Message</button>
    </>
    
  )
};

export default UseStateObject;
