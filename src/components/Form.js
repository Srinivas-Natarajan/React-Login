import React, { useState } from 'react';
import '../styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () =>{
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return(
        <div>
            <div className='form-container'>
                <div className='form-image'>
                    <img className='form-img' src='/img/contact.png' alt='Contacts' />
                </div>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
        </div>
    );
}

export default Form;
