import React, { useState } from 'react';

import RegistrationForm from './components/RegistrationForm';
import UsersList from './components/UsersList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  const saveNewUserHandler = (newUser) => {
    setUsers((prevState) => {
      return [...prevState, newUser];
    });
  }

  return (
  <div className='registration'>
    <RegistrationForm onSaveNewUser={saveNewUserHandler}/>
    <UsersList users={users}/>
  </div>
  );
}

export default App;
