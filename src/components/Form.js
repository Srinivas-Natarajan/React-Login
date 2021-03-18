import React, { useState } from 'react';
import '../styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

/*
import 'firebase/auth';
import firebase from 'firebase';

firebase.initializeApp(firebase config);

function onAuthStateChange() {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("The user is logged in");
    } else {
      console.log("The user is not logged in");
    }
  });
}
*/

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
