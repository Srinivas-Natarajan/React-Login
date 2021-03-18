import React from 'react';
import Form from './components/Form';

import './styles/App.css';

function App() {
  return (
    <div>
      <div className="split left">        {/*Left half of screen*/}
        <div class="centered">
            <img src="/img/book.png" alt="Book"/>
            <h1>School Name</h1>
        </div>
      </div>
      <div className="split right">     {/*Render form in the right half*/}
        <div class="centered-form">
            <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
