import React, { useState } from 'react';

const UseStateCounter = () => {

  const [count, setCount] = useState(0);

  // Normal onClick function with argument
  const changeCount = (change) => {
    if(change === '-1') {
      setCount(count - 1);
    } else if (change === '+1') {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  // Delayed state change by accessing previous state with prevState
  const changeCountDelay = (change) => {
    if(change === '-1') {
      setTimeout(() => {
        setCount((prevState) => {
          return prevState - 1;
        });
      }, 2000);
    } else if (change === '+1') {
      setTimeout(() => {
        setCount((prevState) => {
          return prevState + 1;
        });
      }, 2000);
    }
  }

  return (
    <>
      {/* Regular state change functions with arguments, callback function is used ( () => ) */}
      <h2>Regular Counter</h2>
      <h1>{ count }</h1>
      <button onClick={ () => changeCount('-1') }>Decrease</button>
      <button onClick={ () => changeCount('0') }>Reset</button>
      <button onClick={ () => changeCount('+1') }>Increase</button>

      {/* Delayed state change functions */}
      <h2>Advanced Counter</h2>
      <h1>{ count }</h1>
      <button onClick={ () => changeCountDelay('-1') }>Decrease Later</button>
      <button onClick={ () => changeCountDelay('+1') }>Increase Later</button>
    </>
  )
};

export default UseStateCounter;
