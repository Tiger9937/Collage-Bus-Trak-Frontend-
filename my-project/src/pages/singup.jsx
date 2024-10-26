import React from 'react';
import { Singup } from '../components/index';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center w-full  bg-yellow-400 sm:bg-gray-100 ">
            <div className="bg-yellow-400 rounded-lg min-h-screen shadow-lg p-8 sm:p-8 flex flex-col sm:flex-row sm:bg-yellow-400 sm:min-h-44" style={{ width: '1163px', height: '573px' , sm: { height: '573px' }}}>
              {/* Left Section - Illustration and Title */}
              <div className="flex-1 flex flex-col justify-center items-center">
                
                <img
                  className='absolute sm:h-[400px] sm:-mt-20'
                  src="public\assets\images\buswationIMAGE.png"
                  alt="Illustration"
                />
                
                <img 
                className='w-80 h-80'
                src="public\assets\images\Ellipse 21.png" 
                
                alt="" />
                <h1 
                className="text-3xl sm:absolute sm:font-bold sm:mt-80 sm:bottom-70  
                ">Create Your Account</h1>
              </div>

              <Link 
        style={{
          height: '40px',
          width: '80px',
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textDecoration: 'none'
        }}
        
        to={'/'}
      >
        <button
          style={{
            backgroundColor: 'transparent',
            borderRadius: '6px',
            fontSize: '18px',
            cursor: 'pointer',
            padding: '8px 16px',
            
            transition: 'background-color 0.3s ease, color 0.3s ease',
            textAlign: 'center'
          }}
          className=' hover:bg-slate-600'
        >
          Skip
        </button>
              </Link>

              {/* Right Section - Input Fields */}
              <div className="flex-1 flex flex-col justify-center p-8 -mt-24 sm:-mt-0 ">
                <Singup />
                {/* Social Buttons */}
                <div className="flex justify-center space-x-4 mt-11">
                  <button 
                  className="p-2 bg-white rounded-full shadow-md">
                    <img src="public\assets\icons\Social Icons (1).png" alt="Google" className="w-6 h-6" />
                  </button>

                  <button className="p-2 bg-white rounded-full shadow-md">
                    <img src="public\assets\icons\Social Icons (2).png" alt="Facebook" className="w-6 h-6" />
                  </button>

                  <button className="p-2 bg-white rounded-full shadow-md">
                    <img src="public\assets\icons\Social Icons.png" alt="GitHub" className="w-6 h-6" />
                  </button>
      
                </div>
              </div>


            <span 
            className=' absolute '>
            Member ?  
            <span>
                Log in
            </span>
            </span>
            
            </div>
    </div>
      
    </div>
  );
}
