import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  // UseRef is used to target HTML elements and can read/write is properties and its values.
  // Does not trigger re-render.
  const textRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    textRef.current.value = 'oops'; // We can forcefully change the value
    console.log(textRef.current.value); // We can access the value
    console.log(textRef.current.id); // We can access the property and its value.
  }

  // Here in useEffect initial page load, we use a function directly onto the element.
  // This immediately set focus property equals to true.
  // This lets us enter some text in the input text right away after the page loads
  // Without the need of a cursor to click on the input to enter some text.
  useEffect(() => {
    textRef.current.focus(); 
    return () => {
      // cleanup
    }
  }, [])

  return (
    <>
      <form onSubmit={ submitHandler }>
        <input type="text" id="text" ref={ textRef } />
        <button type="submit">Submit</button>
      </form>
      
    </>
  );
};

export default UseRefBasics;
