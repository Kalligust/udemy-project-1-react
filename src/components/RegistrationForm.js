import React, { useState } from "react";

import Card from "./UI/Card";
import './RegistrationForm.css';

const RegistrationForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };

    props.onSaveNewUser(newUser);
    setEnteredAge('');
    setEnteredName('');
  }

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div className="new-user__controls">
          <div className="new-user__control">
            <label>UserName</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />  
          </div>
          <div className="new-user__control">
            <label>Age</label>
            <input
              type="text"
              value={enteredAge}
              onChange={ageChangeHandler}
            />  
          </div>
        </div>
        <div className='new-user__actions'>
          <button type='submit'>Add User</button>
      </div>
      </form>
    </div>
  )
}

export default RegistrationForm;