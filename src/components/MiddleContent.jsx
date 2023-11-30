import React, { useState } from 'react';

const MiddleContent = ({ selectedUser }) => {
  const [projects, setProjects] = useState([
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
  ]);

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({
      title: '',
      description: '',
      dueDate: '',
    });
  };

  return (
    <div className="middle-content">
      <h2>{`${selectedUser}'s Projects`}</h2>
      
      {/* Add New Project Form */}
      <form>
        <label>Title:</label>
        <input type="text" name="title" value={newProject.title} onChange={handleInputChange} />

        <label>Description:</label>
        <textarea name="description" value={newProject.description} onChange={handleInputChange}></textarea>

        <label>Due Date:</label>
        <input type="date" name="dueDate" value={newProject.dueDate} onChange={handleInputChange} />

        <button type="button" onClick={handleAddProject}>Add New Project</button>
      </form>

      {/* Display Existing Projects */}
      {projects.map((project, index) => (
        <div key={index} className="project-box">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Due Date: {project.dueDate}</p>
        </div>
      ))}
    </div>
  );
};

export default MiddleContent;