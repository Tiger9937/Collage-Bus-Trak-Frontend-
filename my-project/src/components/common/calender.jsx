
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">

        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
          Select a Date:
        </label>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          calendarClassName="custom-calendar" // Apply custom calendar styles
          placeholderText="mm / dd / yyyy"
        />


      </div>
    </div>
  );
}

export default CustomDatePicker;