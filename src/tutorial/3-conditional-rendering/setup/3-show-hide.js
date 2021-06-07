import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false);
  
  // Using the (&&) Short circuit to show/hide a component.
  return (
    <>
    <button onClick={ () => setShow(!show) }>Show/Hide</button>
      { show && <Item /> }
    </>
  )
};

// Item component
const Item = () => {

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  // useEffect with resize event listener, and callback, run on intial load only
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, [])

  return (
    <>
      <h1>Window</h1>
      <h3>{ `Size : ${size} Px` }</h3>
    </>
  )
}
export default ShowHide;
