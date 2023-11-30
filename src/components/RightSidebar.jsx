import React from 'react';

const RightSidebar = ({ selectedUser, projects }) => {
  // Assuming projects is an array of project objects with a dueDate property

  // Function to get the month and year of a project's due date
  const getMonthYear = (dueDate) => {
    const date = new Date(dueDate);
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  // Function to get the day of the month for a project's due date
  const getDay = (dueDate) => {
    const date = new Date(dueDate);
    return date.getDate();
  };

  // Function to check if a day has projects due
  const hasProjectsDue = (day) => {
    return projects.some((project) => getDay(project.dueDate) === day);
  };

  return (
    <div className="right-sidebar">
      {/* Calendar Header */}
      <div className="calendar-header">
        <button>{"<"}</button>
        <h3>{getMonthYear(new Date())}</h3>
        <button>{">"}</button>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {/* Days of the week */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
          <div
            key={day}
            className={`calendar-day ${hasProjectsDue(day) ? 'highlighted' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;