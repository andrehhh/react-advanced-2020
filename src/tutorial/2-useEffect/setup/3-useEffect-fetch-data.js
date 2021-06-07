import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([]);


  // getUsers function to fetch data from API url
  // Async and await function to wait for data to be fetched first to continue
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  // useEffect, calls getUsers function, runs only on initial page load
  useEffect(() => {
      getUsers();
    return () => {
      // cleanup
    }
  }, [])

  // Mapping list
  const usersList = users.map((user) => {
    const { id, login, avatar_url, html_url } = user; // Array destructure
    return (
      <li key={ id }>
        <h4>{ login }</h4>
        <img src={ avatar_url } />
        <a href={ html_url }>Profile</a>
      </li>
    )
  })

  return (
    <>
      <ul>
        { usersList }
      </ul>
    </>
  );
};

export default UseEffectFetchData;
