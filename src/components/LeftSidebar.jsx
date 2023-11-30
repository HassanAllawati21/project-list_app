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

  const handleFormSubmit = () => {
    // Handle form submission logic here
    // You can save the user data or perform other actions

    // For simplicity, let's just close the form
    setFormVisible(false);

    // Example: Add the new user to the list
    const newUserName = formData.name;
    setUsers(prevUsers => [...prevUsers, newUserName]);
  };

  const handleSaveAndAddAnother = () => {
    // Handle saving current user and showing a new empty form
    // For simplicity, let's just close the form
    setFormVisible(false);
  };

  return (
    <div className="left-sidebar">
      <button className="add-user-btn" onClick={handleAddUserClick}>
        Add New User
      </button>

      {/* List of users */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
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