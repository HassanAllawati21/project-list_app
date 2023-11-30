import React from 'react';

const UserPopUp = ({ isVisible, onProjectsClick, onDeleteClick }) => {
  return (
    <div className={`popup ${isVisible ? 'visible' : ''}`}>
      <button onClick={onProjectsClick}>View Projects</button>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
};

export default UserPopUp;