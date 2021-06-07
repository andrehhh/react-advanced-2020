import React from 'react';

const ErrorExample = () => {
  let title = "Example";

  // Changing the title directly from the variable changes the value of title.
  // But the page does not re-render so the change does not reflect to the page.
  // Here in console.log we can see that the value really changed.
  const clickHandler = () => {
    title = "hello people";
    console.log(title);
  }

  return (
    <>
      <h2>{title}</h2>
      <button onClick={clickHandler}>Change Title</button>
    </>
  );
};

export default ErrorExample;
