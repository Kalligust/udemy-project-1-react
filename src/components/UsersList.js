import React from "react";

import User from "./User";
import './UsersList.css';

const UsersList = (props) => {
  return (
    <div className="usersList">
      {props.users.map(u => 
        <User name={u.name}
              age={u.age}
              key={u.id}
      />)}
    </div>
  );
}

export default UsersList;