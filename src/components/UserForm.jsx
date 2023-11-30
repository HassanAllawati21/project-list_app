import React, { useState } from 'react';

const UserForm = ({ isVisible, onClose, onSave, onSaveAndAddAnother }) => {
  const [formData, setFormData] = useState({
    name: '',
    employeeID: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  const handleSaveAndAddAnother = () => {
    onSaveAndAddAnother(formData);
  };

  return (
    <div className={`form-container ${isVisible ? 'visible' : ''}`}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <label>Employee ID:</label>
      <input
        type="text"
        name="employeeID"
        placeholder="Enter employee ID"
        value={formData.employeeID}
        onChange={handleInputChange}
      />

      <label>Email:</label>
      <input
        type="text"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <button onClick={handleSave}>Save</button>
      <button onClick={handleSaveAndAddAnother}>Save & Add Another</button>
      <button className="cancel-btn" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default UserForm;