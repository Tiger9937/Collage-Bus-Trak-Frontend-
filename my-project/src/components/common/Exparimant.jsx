// import React from 'react';
// const Dashboard = () => {
// // student rigstation from 
// // improve error component
// // Dark mode light mode 

  
//   return (
//     <div class="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
      
//         <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

          
//             <div class="fixed inset-0 transition-opacity" aria-hidden="true">
//                 <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
           
//                     <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
//                         role="dialog" aria-modal="true" aria-labelledby="modal-headline">
//                           <div className=' flex justify-end'>
//                                     <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                             stroke="currentColor" aria-hidden="true">
//                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                             d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                           </div>
//                           <div className=' flex'>
//                                 <div className=' bg-slate-500 rounded-full   pl-4  h-11 w-11'>
//                                     <span className=' font-bold   text-4xl'>!</span>
//                                 </div>

//                                 <div className=' bg-orange-600'>
//                                         message
//                                 </div>
//                           </div>


                         


                         


//                     </div>

//         </div>

//     </div>

//   );
// };

// export default Dashboard;


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
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          calendarClassName="custom-calendar" // Apply custom calendar styles
          placeholderText="mm / dd / yyyy"
        />
      </div>
    </div>
  );
}

export default CustomDatePicker;
