import React from 'react';
import { Singup } from '../components/index';

export default function Signup() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-yellow-400 rounded-lg shadow-lg p-8 flex" style={{ width: '1163px', height: '573px' }}>
        {/* Left Section - Illustration and Title */}
        <div className="flex-1 flex flex-col justify-center items-center">
          
          <img
          style={{
            height: "400px",
            "margin-top": "-80px",
          }}
            className='absolute'
            src="public\assets\images\buswationIMAGE.png"
            alt="Illustration"
          />
          <img src="public\assets\images\Ellipse 21.png" 
          
          alt="" />
          <h1 
          
            style={{
              margin: "0px",
              position: "absolute",
              bottom: "17.5rem"
            }}
          className="text-2xl font-bold mt-4">Create Your Account</h1>
        </div>

        {/* Right Section - Input Fields */}
        <div className="flex-1 flex flex-col justify-center p-8">
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

      </div>
    </div>
      
    </div>
  );
}
