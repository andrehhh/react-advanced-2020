import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({})
  const [people, setPeople] = useState([]);


  // Submits form as an state object instead of seperate variable objects
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, age } = person; // Array Destructure
    if (firstName && email && age) {

      const newPerson = {...person, id: new Date().getTime().toString()}
      // setState function setup
      setPeople((people) => {
        return [...people, newPerson];
      });

      // Clears the input values
      setPerson({});
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={(e) => setPerson({...person, firstName: e.target.value})}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={(e) => setPerson({...person, email: e.target.value})}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={(e) => setPerson({...person, age: e.target.value})}
            />
          </div>
          <button type='submit'>add person</button>
        </form>

        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
