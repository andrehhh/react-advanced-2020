import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [pixel, setPixel] = useState(window.innerWidth);


  // checkSize function, checks current width and set state.
  const checkSize = () => {
    setPixel(window.innerWidth);
  }

  // useEffect runs after the page renders.
  // We added a resize event listener which calls the 'checkSize' function if the window is resized.
  // Since we use a setState inside the 'checkSize' function,
  // We are adding the event listener every time we resize the window.
  // The window resize triggers the setState function, which re-renders, and calls the useEffect again.
  
  // We use the cleanup function in order to remove the event listener before re-rendering.
  // The cleanup function is run before the page re-renders.
  // By removing the current event listener, re-rendering the page will still keep only 1 event listener.

  // We can also solve this problem with the '[]'.
  // This makes the useEffect to run only after intial page load, and will not run on re-render.

  useEffect(() => {
    
    window.addEventListener('resize', checkSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkSize); // Remove event listener
    }
  }, [])

  return (
    <>
      <h1>Window</h1>
      <h2>{ `${pixel} PX` }</h2>
    </>
  );
};

export default UseEffectCleanup;
