import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/about'>About</Link>
      <br />
      <Link to='/people'>People</Link>
    </>
  )
};

export default Navbar;
