import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/inter';
import { Sidebar } from '../components';

export default function Homepage() {
  const tabREF = useRef(null);
  const [Left, setLeft] = useState(360); // Default position for the first tab
  const [Width, setWidth] = useState(104); // Default width for the first tab
  const [ActiveTab, setActive] = useState("All Things");
  const [isSidebar, setSidebar] = useState(false);
  const [SideBarCloseClickScreen , setSideBarCloseClickScreen] = useState(false);

  const tabs = [
    "All Things",
    "Projects",
    "Project Ideas",
    "Research Paper",
    "Nots",
    "Bus"
  ];

  const handleTabClick = (tabName) => {
    setActive(tabName);
    setTimeout(() => {
      if (tabREF.current) {
        const size = tabREF.current.getBoundingClientRect();
        setLeft(size.left);  // Set the left position of the active tab
        setWidth(size.width); // Set the width of the active tab
      }
    }, 0);
  };

  const handleSideBarClick = () => {
    setSidebar(!isSidebar);
    setSideBarCloseClickScreen(!isSidebar);
  };

  return (
    <div className='bg-red-200 min-h-screen' style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Top Navigation */}
      <div 
        style={{
          position: 'sticky', 
          top: '0',
          zIndex: '1000' // Ensures the navbar stays on top
        }}
        className="flex h-full w-full items-center justify-between bg-white"
      >
        <div className='flex flex-col items-center ml-10'>
          <img
            onClick={handleSideBarClick}  // Toggle sidebar on click
            className='h-10 w-10 mb-2'
            src="public/assets/icons/Menu.png" alt="Menu Icon" />
        </div>

        <div className='flex flex-col items-center mx-4'>
          <img
            className='h-20 w-20'
            src="public/assets/icons/Logo.png" alt="Logo" />
        </div>

        <div className='flex flex-col items-center mr-10 h-20 w-20 pt-2'>
          <img
            className='h-16 w-16'
            src="https://res.cloudinary.com/dwbjaa3ng/image/upload/v1726760705/AvterIMG3_owxedr.png" alt="Avatar" />
        </div>
      </div>


      {/* Tabs */}
      <div className="flex justify-center p-2.5 mx-auto font-mono bg-slate-100 relative">
        {/* Active tab indicator */}
        <Link
          style={{
            left: `${Left}px`,    // Left position of the active tab
            width: `${Width}px`,  // Width of the active tab
            transition: 'left 0.6s ease, width 0.6s ease'
          }}
          className='bg-purple-700 drop-shadow-lg rounded-lg h-8 absolute top-4'
        ></Link>

        {/* Tab Items */}
        {tabs.map((tabName) => (
          <div
            ref={ActiveTab === tabName ? tabREF : null}
            key={tabName}
            className={`tab active mr-5 p-2 text-lg z-10 ${ActiveTab === tabName ? 'text-white text-sm p-3' : 'text-black'}`}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </div>
        ))}
      </div>



      {/* SideBar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 999, // Ensure the sidebar stays on top of the overlay
        }}
      >
        {SideBarCloseClickScreen && (
  <div
    style={{
      height: 'calc(100vh - 64px)',
      top: '64px',
      position: 'fixed',
      background: 'rgba(0, 0, 0, 0.27)',
      zIndex: 998,
      transform: isSidebar ? 'translateX(0)' : 'translateX(-100%)', // Match sidebar animation
      transition: 'opacity 0.6s ease, transform 0.6s ease', // Add transform transition
      opacity: isSidebar ? 1 : 0, // Adjust opacity based on sidebar state
      pointerEvents: isSidebar ? 'auto' : 'none', // Disable clicks when the sidebar is closed
    }}
    onClick={SideBarClose}
    className='w-full ml-64'
  ></div>
)}


        <div
          style={{
            height: 'calc(100vh - 64px)',
            transform: isSidebar ? 'translateX(0)' : 'translateX(-100%)', // Slide in/out animation for the sidebar
            transition: 'transform 0.6s ease', // Smooth transition for sliding effect
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '256px', // Adjust the width of your sidebar
            zIndex: 999,
            background: 'white', // Sidebar background color
          }}
        >
          {isSidebar && <Sidebar />} {/* Sidebar content */}
        </div>
      </div>
    </div>

  );
}
