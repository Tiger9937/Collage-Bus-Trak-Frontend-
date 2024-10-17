import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/inter';
import '@expo-google-fonts/itim';
import { Sidebar } from '../components';

export default function Homepage() {
  const tabREF = useRef(null);
  const [Left, setLeft] = useState(0); // Default position for the first tab
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

  useEffect(() => {
    const item = document.getElementById(`Tabs-${ActiveTab}`);
    if (item) {
      const position = item.getBoundingClientRect();
      setLeft(position.left);
      setWidth(position.width);
    }
  }, [ActiveTab]);

  const handleTabClick = (tabName) => {
    setActive(tabName);
    setTimeout(() => {
      if (tabREF.current) {
        const size = tabREF.current.getBoundingClientRect();
        setLeft(size.left); // Set the left position of the active tab
        setWidth(size.width); // Set the width of the active tab
      }
    }, 0);
  };

  const handleSideBarClick = () => {
    setSidebar(!isSidebar);
    setSideBarCloseClickScreen(!isSidebar);    
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setSidebar(false);
      setSideBarCloseClickScreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className='sm:bg-red-200  bg-white  min-h-screen' style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Top Navigation  for big display*/}
      <div 
        style={{
          position: 'sticky', 
          top: '0',
          zIndex: '1000' // Ensures the navbar stays on top
        }}
        className="h-[208px] sm:h-full w-full items-center justify-between bg-white overflow-x-scroll block 
        sm:flex"
      >
        <div className='sm:flex flex-col items-center ml-10 hidden'>
          <img
            onClick={handleSideBarClick}  // Toggle sidebar on click
            className='h-10 w-10 mb-2'
            src="public/assets/icons/Menu.png" alt="Menu Icon" />
        </div>

        <div className='flex flex-col items-center mx-4'>
          <img
            className='w-20 hidden sm:inline'
            src="public/assets/icons/Logo.png" alt="Logo" />
        </div>

        <div className='sm:flex flex-col sm:items-center mr-4 sm:mr-10 sm:h-14 h-[101px] sm:w-20 pt-2 w-full grid gap-4 justify-end'>
          
              <Link to='/login' className='ml-6  absolute md:hidden'>
                <img src="public/assets/icons/Double_Right.png" alt="" />
              </Link>

          
              <img
                className='h-16 w-16 flex mt-10 items-end mr-4 sm:mt-0 border-solid '
                src="https://res.cloudinary.com/dwbjaa3ng/image/upload/v1726760705/AvterIMG3_owxedr.png" alt="Avatar"
              />
        </div>


        <div className='sm:w-20 h-full  pt-2 w-full grid sm:hidden'>
        <p className='text-3xl font-Inter ml-10 text-black font-bold' >
            Hello,
            <span className='block font-Itim text-4xl text-deep-purple ' >Linx luxury</span>
        </p>

          
        </div>

      </div>



      {/* SideBar */}
      <div
        style={{
          transform: isSidebar ? 'translateX(0)' : 'translateX(-100%)', // Slide in from the left
          transition: 'transform 0.6s ease', // Smooth transition
          position: 'sticky',
          top: '-64px',
          zIndex: 999, // Ensure the sidebar stays on top of the overlay
        }}
      >
        {isSidebar && (
          <div
            onClick={() => handleSideBarClick()}
            style={{
              height: '100vh', 
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              zIndex: 999,
            }}
            className='bg-light-Dark'
          >
            <Sidebar />
          </div>
        )}
      </div>



      {/* Tabs */}
      <div className="hidden sm:flex whitespace-nowrap overflow-x-auto  justify-center p-2.5  bg-amber-300 mx-auto font-mono relative">
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
            id={`Tabs-${tabName}`}
            ref={ActiveTab === tabName ? tabREF : null}
            key={tabName}
            className={`tab active mr-5 p-2  z-10 ${ActiveTab === tabName ? 'text-white text-sm p-3' : 'text-black'}`}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </div>
        ))}
      </div>

      <div class="sm:hidden grid gap-4 sm:grid-cols-2 relative">
  <div class=" rounded   whitespace-nowrap overflow-x-auto ">
  <Link
          style={{
            left: `${Left}px`,    // Left position of the active tab
            width: `${Width+2}px`,  // Width of the active tab
            top: '5px',
            transition: 'left 0.6s ease, width 0.6s ease'
          }}
          className='bg-purple-700 shadow-strong border-white border-2 rounded-2xl h-8 absolute top-4'
        ></Link>
    <div class="flex flex-row"> {/* Added flex-row to arrange items left to right */}
      {tabs.map((tabName) => (
        <div
          id={`Tabs-${tabName}`}
          ref={ActiveTab === tabName ? tabREF : null}
          key={tabName}
          className={`tab active -mr-4 ml-10 p-2 z-10 ${ActiveTab === tabName ? 'text-white text-sm p-3' : 'text-black'}`}
          onClick={() => handleTabClick(tabName)}
        >
          {tabName}
        </div>
      ))}
    </div>
  </div>
      </div>

      {/* buttom Navigation small display*/}
      <div class=" grid gap-4  sm:hidden">
        <div class="min-h-[50px] rounded  "></div>
        <div class="min-h-[70px] rounded bg-sky-400 shadow-xl grid grid-cols-4">
              <div className='rounded-full  w-20 m-1 mt-2 ml-4 h-20 bg-black'>
                  <img src={`public/assets/icons/${Selection ? 'Home_Light.png':'Home.png'}`} alt="" />
              </div>
              
                <div className='rounded-full  w-20 m-1 mt-2 ml-4 h-20 bg-black'>
                  <img src={`public/assets/icons/${Selection ? ' ':''}`} alt="" />
                </div>

                <div className='rounded-full  w-20 m-1 mt-2 ml-4 h-20 bg-black'>
                  <img src={`public/assets/icons/${Selection ? ' ':' '}`} alt="" />
                </div>
            
                  <div className='rounded-full  w-20 m-1 mt-2 ml-4 h-20 bg-black'>
                    <img src={`public/assets/icons/${Selection ? ' ':' '}`} alt="" />
                  </div>
        </div>
</div>


    </div>  
  );
}
