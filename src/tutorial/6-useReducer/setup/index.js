import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';

const initialState = {
  people: data,
  showModal: false,
  modalContent: 'Default Content'
}

const Index = () => {

  const [name, setName] = useState('');

  // useReducer declaration (Default)
  const [state, dispatch] = useReducer(reducer, initialState)

  // Submit Form invokes 2 different dispatch functions depending on the name.
  // Dispatch functions has 2 arguments as an object.
  // type is the function name, while payload is the data sent.
  const submitHandler = (e) => {
    e.preventDefault();
    if(name) {
      const newPerson = {id: new Date().getTime().toString(), name}
      dispatch({ type: 'ADD_PERSON', payload: newPerson});
    } else {
      dispatch({ type: 'MISSING_VAL'});
    }
  }

  const removePerson = (id) => {
    dispatch({ type: 'REMOVE_PERSON', payload: id });
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  // Using Shortcircuits, we can render Modal component depending on the value of showModal.
  // Passed in 2 props into Modal, one is the content text of the modal.
  // Another one is a function which is executed 3 seconds after the modal loads which will set showModal to false.
  // This then prevents the modal from rendering and is hidden.
  return (
    <>
      { state.showModal && <Modal modalContent={state.modalContent} closeModal={closeModal} /> }
      <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      {
        state.people.map((person) => {
          const {id, name} = person;
          return (
            <div key={id}>
              <h3>{name}</h3>
              <button onClick={ () => removePerson(id) }>Remove</button>
            </div>
          );
        })
      }
    </>
  )
};

export default Index;
