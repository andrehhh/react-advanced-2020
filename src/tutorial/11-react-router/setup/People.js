import React, { useState } from 'react';
import { data } from '../../../data';
import { Link } from 'react-router-dom';
const People = () => {
  return (
    <div>
      <h1>People Page</h1>
      {data.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <Link to={`/person/${person.id}`}>more info</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
