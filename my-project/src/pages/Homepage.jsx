import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar , Tab , Container , Button } from '../components';
import { useCookies } from 'react-cookie'

export default function Homepage() {
  
  const [isSidebar, setSidebar] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

 

  const handleSideBarClick = () => {
    setSidebar(!isSidebar);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className='sm:bg-red-200 bg-white min-h-screen' style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* SideBar */}
      <div
        style={{
          transform: isSidebar ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.6s ease',
        }}
        className=' fixed z-50'
      >
        {isSidebar && (
          <div
            onClick={() => handleSideBarClick()}
            style={{
              height: '100vh',
              width: '100vw',
            }}
            className='bg-light-Dark '
          >
            <Sidebar />
          </div>
        )}
      </div>





      {/* Top Navigation  for big display */}
      <div 
        className={`w-full sm:fixed scrollbar-hide items-center justify-between bg-white overflow-x-scroll block 
        sm:flex `}
      >
        <div className='sm:flex flex-col items-center ml-10 hidden'>
          <img
            onClick={handleSideBarClick}
            className='h-10 w-10 mb-2'
            src="public/assets/icons/Menu.png" alt="Menu Icon" />
        </div>

        <div className='flex flex-col items-center mx-4'>
          <img
            className='w-20 hidden sm:inline'
            src="public/assets/icons/Logo.png" alt="Logo" />
        </div>

        <div className='sm:flex flex-col sm:items-center mr-4 sm:mr-10 sm:h-14 h-[101px] sm:w-20 pt-2 w-full grid gap-4 justify-end'>
          <Link to='/login' className='ml-6 absolute md:hidden'>
            <img src="public/assets/icons/Double_Right.png" alt="" />
          </Link>
          {isAuthenticated ? <img
            className='h-16 w-16 flex mt-10 items-end mr-4 sm:mt-0 border-solid'
            src="https://res.cloudinary.com/dwbjaa3ng/image/upload/v1726760705/AvterIMG3_owxedr.png" alt="Avatar"
          />  : <div>
              <Button>1</Button>
              <Button>2</Button>
          </div>

          }
         
           
        </div>

        <div className='sm:w-20 h-full pt-2 w-full grid sm:hidden'>
          <p className='text-3xl font-Inter ml-10 text-black font-bold'>
            Hello,
            <span className='block font-Itim text-4xl text-deep-purple'>Linx luxury</span>
          </p>
        </div>
      </div>

        <Tab/>    
        <Container/>
    

    </div>
  );
}
