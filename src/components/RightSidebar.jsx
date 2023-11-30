import React, { useState } from 'react';

const RightSidebar = ({ selectedUser, projects }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const buildCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);

    const calendar = [];

    // Add blank spaces for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(null);
    }

    // Add days with project due dates
    for (let day = 1; day <= daysInMonth; day++) {
      const isDueDate = projects.some((project) => {
        const dueDate = new Date(project.dueDate);
        return dueDate.getDate() === day;
      });

      calendar.push({ day, isDueDate });
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthOptions = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="right-sidebar">
      {/* Month Navigation */}
      <div>
        <button onClick={handlePrevMonth}>&lt;</button>
        {monthOptions[currentDate.getMonth()]}
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      {/* Calendar */}
      <div className="calendar">
        <div className="days-of-week">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>

        {buildCalendar().map((day, index) => (
          <div key={index} className={`calendar-day ${day && day.isDueDate ? 'due-date' : ''}`}>
            {day && day.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;