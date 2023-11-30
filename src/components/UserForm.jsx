import React from 'react';
import "./styles.css";

const UserForm = ({ isVisible, onClose, onSave, onSaveAndAddAnother }) => {
  return (
    <div className={`form-container ${isVisible ? 'visible' : ''}`}>
      <label>Name:</label>
      <input type="text" placeholder="Enter name" />

      <label>Employee ID:</label>
      <input type="text" placeholder="Enter employee ID" />

      <label>Email:</label>
      <input type="text" placeholder="Enter email" />

      <button onClick={onSave}>Save</button>
      <button onClick={onSaveAndAddAnother}>Save & Add Another</button>
      <button className="cancel-btn" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default UserForm;