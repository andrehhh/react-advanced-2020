import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {

  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // useEffect runs on initial page load, uses fetch .then and .catch, response status and statusText
  useEffect(() => {
    fetch(url)
    .then((response) => {
      if(response.status >= 200 && response.status <= 299) { // Status code 2XX indicates success
        return response.json();
      } else {
        setIsError(true);
        throw new Error(response.statusText);
      }
    })
    .then((user) => {
      const { login } = user; // Array Destructure
      setUser(login);
      setIsLoading(false);
    })
    .catch((error) => console.log(error));

    return () => {
      // cleanup
    }
  }, []);

  if(isError) {
    return (
      <div>
        <h1>Error..</h1>
      </div>
    );
  }

  // Condition Rendering with Ternary Operator
  return (
    <div>
      <h1>{ isLoading ? 'Loading...' : user }</h1>
    </div>
  );

  
};

export default MultipleReturns;
