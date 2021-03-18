import React from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';
import '../styles/Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
      <form onSubmit={handleSubmit} className='form' noValidate>
          <div className='form-inputs'>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="errors">{errors.email}</p>}
          </div>
          <div className='form-inputs'>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="errors">{errors.password}</p>}
          </div>
          <div class="form-links">
            <div class="links linkA"><a href="https://github.com/Srinivas-Natarajan">Forgot Password?</a></div>
            <div class="links linkB"><a href="https://github.com/Srinivas-Natarajan">Forgot Email?</a></div>
          </div>
          <button className='form-input-btn' type='submit'>
            Sign in
          </button>
      </form>
  );
};

export default FormSignup;
