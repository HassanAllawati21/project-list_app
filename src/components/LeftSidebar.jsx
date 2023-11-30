import React, { useState } from 'react';
import UserForm from './UserForm';

const LeftSidebar = ({ setSelectedUser }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [users, setUsers] = useState([]); // Add state for users

  const handleAddUserClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleFormSubmit = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
    setFormVisible(false);
  };

  const handleSaveAndAddAnother = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
    setFormVisible(true);
  };

  const handleDeleteUser = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  return (
    <div className="left-sidebar">
      <button className="add-user-btn" onClick={handleAddUserClick}>
        Add New User
      </button>

      {/* List of users */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} {/* Display the name property of the user object */}
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Form Container */}
      <UserForm
        isVisible={isFormVisible}
        onClose={handleCloseForm}
        onSave={handleFormSubmit}
        onSaveAndAddAnother={handleSaveAndAddAnother}
      />
    </div>
  );
};

export default LeftSidebar;