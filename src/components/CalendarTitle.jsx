import React from "react";
import { Link } from "react-router-dom";
const CalendarTitle = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div onClick={reloadPage} className="cursor-pointer flex items-end mb-9 mt-5 mx-5 px-1 text-white">
        <i className="fas fa-calendar-alt text-6xl mr-2"></i> {/* Icon */}
      <h1 className="text-4xl font-bold">Calendar</h1>
    </div>
  )
};

export default CalendarTitle;
