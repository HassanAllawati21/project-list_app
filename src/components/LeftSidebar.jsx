import React, { useState } from 'react';

const LeftSidebar = ({ setSelectedUser }) => {
  const [registeredNames, setRegisteredNames] = useState([]); 
  const [newName, setNewName] = useState('');

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAddName = () => {
    if (newName.trim() !== '') {
      setRegisteredNames([...registeredNames, newName.trim()]);
      setNewName('');
    }
  };

  const handleDeleteName = (name) => {
    const updatedNames = registeredNames.filter((n) => n !== name);
    setRegisteredNames(updatedNames);
  };

  return (
    <div className="left-sidebar">
      {/* ... existing content ... */}
      
      {/* Add New Name Form */}
      <form>
        <label>Add New Name:</label>
        <input type="text" value={newName} onChange={handleInputChange} />
        <button type="button" onClick={handleAddName}>+</button>
      </form>

      {/* Display Registered Names */}
      <ul>
        {registeredNames.map((name, index) => (
          <li key={index} onClick={() => setSelectedUser(name)}>
            {name}
            <button type="button" onClick={() => handleDeleteName(name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;