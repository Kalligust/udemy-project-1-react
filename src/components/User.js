import React from "react";

import './User.css';

const User = (props) => {
  return(
    <div className="user">
      <input 
        type="text"
        value={`${props.name}(${props.age} years old)`}>
      </input>
    </div>
  );
}

export default User;