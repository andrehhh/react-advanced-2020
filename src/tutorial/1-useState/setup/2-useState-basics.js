import React, { useState } from 'react';

// Basic Approach with changing title value on state
const UseStateBasics = () => {

  const [title, setTitle] = useState('Hello World')

  const changeTitle = () => {
    if(title == 'Hello World') {
      setTitle('Random Title');
    } else {
      setTitle('Hello World');
    }
  }

  return (
    <>
      <h2>{ title }</h2>
      <button onClick={ changeTitle }>Change Title</button>
    </>
  )
};

// Another Approach with conditional rendering and ternary operator
// const UseStateBasics = () => {

//   const [titleChooser, setTitleChooser] = useState(false)

//   const changeTitle = () => {
//     setTitleChooser(!titleChooser);
//   }

//   return (
//     <>
//       <h2>{titleChooser ? 'Random Title' : 'Hello World'}</h2>
//       <button onClick={ changeTitle }>Change Title</button>
//     </>
//   )
// };

export default UseStateBasics;
