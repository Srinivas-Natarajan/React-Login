import React, {useState} from 'react';
import Form from './components/Form';

import './styles/App.css';

function App() {

  return (
    <div>
      <div className="split left">
        <div class="centered">
            <img src="/img/book.png" alt="Book"/>
            <h1>School Name</h1>
        </div>
      </div>
      <div className="split right">
        <div class="centered-form">
            <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
