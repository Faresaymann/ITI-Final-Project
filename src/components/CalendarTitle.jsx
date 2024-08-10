import React from "react";
import { Link } from "react-router-dom";
const CalendarTitle = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div
      onClick={reloadPage}
      className="cursor-pointer flex justify-between items-end mb-9 mt-5 mx-5 px-1 text-white"
    >
      <div className="flex items-end">
        <i className="fas fa-calendar-alt text-6xl mr-2"></i> {/* Icon */}
        <h1 className="text-4xl font-bold">Calendar</h1>
      </div>
      <div >
        <Link to="/register" className="text-gray-400 text-2xl font-bold underline">
          <h1 className="text-3xl font-bold">Sign Out</h1>
        </Link>
      </div>
    </div>
  );
};

export default CalendarTitle;
