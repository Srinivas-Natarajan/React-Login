import React from 'react';
import '../styles/FormSuccess.css';
import FormSignup from './FormSignup';

const FormSuccess = () => {
  return (
    <div className='form-content'>
      <h3 className='form-success'>We have received your request!</h3>
      <img className='form-img-2' src='img/img-3.svg' alt='success' />
    </div>
  );
};

export default FormSuccess;
