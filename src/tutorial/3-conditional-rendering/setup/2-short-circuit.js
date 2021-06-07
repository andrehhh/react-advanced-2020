import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [isError, setIsError] = useState(false)

  // Short Circuits (|| and &&), and Ternary Operations ( ? : )
  // as a shortcut to IF statements (in-line IF statements)
  return (
    <>
      <button onClick={ () => setIsError(!isError) }>Toggle Error</button>
      <h1>{ isError || 'Error'}</h1>
      <h3>{ isError && 'Oops, Error'}</h3>
      <h6>{ isError ? 'There is an Error' : 'No Error Found' }</h6>
    </>
  );
};

export default ShortCircuit;
