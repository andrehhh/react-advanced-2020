import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1); // Setting state re-renders the page.
  }

  // useEffect triggers after the page re-renders.
  // The page re-renders when first load, or when setState function is used.
  // useEffect does not trigger re-render.
  useEffect(() => {
    if(count > 0) {
      document.title = `New Message (${count})`;
    }
    return () => {
      // Cleanup
    }
  })

  return (
    <>
      <h1>{ count }</h1>
      <button onClick={ increaseCount }>Click Me</button>
    </>
  )
};

export default UseEffectBasics;
