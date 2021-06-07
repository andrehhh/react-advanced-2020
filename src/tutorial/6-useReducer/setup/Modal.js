import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
    return () => {
      // cleanup
    }
  }, [])

  return <div>{modalContent}</div>;
};

export default Modal;
