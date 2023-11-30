import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import MiddleContent from './components/MiddleContent';
import RightSidebar from './components/RightSidebar';
import "./styles.css"

const App = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [projects, setProjects] = useState([]); // State for projects

  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <LeftSidebar setSelectedUser={setSelectedUser} setProjects={setProjects} />

      {/* Middle Content */}
      <MiddleContent selectedUser={selectedUser} />

      {/* Right Sidebar */}
      <RightSidebar selectedUser={selectedUser} projects={projects} />
    </div>
  );
};

export default App;