import React, { useState } from 'react';
import UserForm from './UserForm';
import UserPopUp from './UserPopUp';

const LeftSidebar = ({ setSelectedUser }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [users, setUsers] = useState([]); // Add state for users
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [popUpIndex, setPopUpIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    employeeID: '',
    email: '',
  });


  const handleAddUserClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleFormSubmit = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
    setFormVisible(false);
    setPopUpVisible(false);
  };

  const handleSaveAndAddAnother = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
    setFormVisible(true);
  };

  const handleDeleteUser = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  const handleMouseEnter = (index) => {
    setPopUpVisible(true);
    setPopUpIndex(index);
  };

  const handleMouseLeave = () => {
    setPopUpVisible(false);
    setPopUpIndex(null);
  };

  const handleProjectsClick = (index) => {
    const selectedUser = users[index];
    setSelectedUser(selectedUser);
  };

  return (
    <div className="left-sidebar">
      <div className="logo-container">
        <img src="src\components\assets\lb_logo.png" alt="Logo" className="logo" />
        <h1 className="title">IRA Project Tracker</h1>
      </div>

      <button className="add-user-btn" onClick={handleAddUserClick}>
        Add New User
      </button>

      {/* List of users */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div className="user-name" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              {user.name}
              {isPopUpVisible && popUpIndex === index && (
                <div className="popup">
                  <button onClick={() => handleProjectsClick(index)}>View Projects</button>
                  <button onClick={() => handleDeleteUser(index)}>Delete</button>
                </div>
              )}
            </div>
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