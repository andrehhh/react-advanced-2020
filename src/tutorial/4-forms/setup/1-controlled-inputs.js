import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  // formSubmit function triggers on Form Submit.
  // It uses the argument 'e' to invoke preventDefault().
  // preventDefault() is used in order to prevent the site to reload when the form is submitted.
  // Reloading the site will reset all states and all changes will be lost.
  // That is why we need that function in the form submit function.

  // We can use Date.getTime.toString to 'fake' the ID.
  // Below we used a new way to use setState function, that is to use the function setup.
  const formSubmit = (e) => {
    e.preventDefault();
    if(name && email) {
      const newUser = { id: new Date().getTime().toString(), name, email };

      // setState function setup
      setUsers((users) => {
        return [...users, newUser];
      });

      // setState default setup
      // setUsers([...users, newUser]);

      setName('');
      setEmail('');
      console.log('New user added!');
    } else {
      console.log('Missing Value');
    }

  }

  // Form inputs connects directly to the state variable. The inputvalue itself is the state value.
  // Labels htmlFor connects themselves with the input's ID.
  // onChange on form inputs is a callback with argument 'e' that is used to get the input value
  // The input value is then used to update the state value.
  // This updates the state value and reflect the changes in our screen.
  return (
    <>
      <form onSubmit={ formSubmit }>
      <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={ name } 
          onChange={ (e) => setName(e.target.value) }/>
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={ email } 
          onChange={ (e) => setEmail(e.target.value) }/>
        <br />
        <button type="submit">Add Person</button>
      </form>

      <ul>
        {
          users.map((user) => {
            const { id, name, email } = user;
            return(
              <li key={ id }>
                <h3>{ name }</h3>
                <h4>{ email }</h4>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export default ControlledInputs;
