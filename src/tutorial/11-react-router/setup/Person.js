import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {

  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    setName(data.find((person) => person.id === parseInt(id)).name);
    return () => {
      // cleanup
    }
  }, [])

  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people'>Back to People</Link>
    </div>
  );
};

export default Person;
