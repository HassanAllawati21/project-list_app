import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import MiddleContent from './components/MiddleContent';
import RightSidebar from './components/RightSidebar';
import "./styles.css"

const App = () => {
  const [selectedUser, setSelectedUser] = useState('');

  // Define the projects array
  const projects = [
    // Sample project data
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      dueDate: '2023-12-01',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      dueDate: '2023-12-15',
    },
    // Add more projects as needed
  ];

  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <LeftSidebar setSelectedUser={setSelectedUser} />

      {/* Middle Content */}
      <MiddleContent selectedUser={selectedUser} />

      {/* Right Sidebar */}
      <RightSidebar selectedUser={selectedUser} projects={projects} />
    </div>
  );
};

export default App;