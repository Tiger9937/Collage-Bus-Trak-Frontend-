import React from 'react';
import { Login } from '../components/index';
import { Link } from 'react-router-dom';


export default function Signup() {
  return (
    <div className="flex justify-center min-h-screen items-center w-full bg-yellow-400 sm:bg-gray-100">
      <div
        className="bg-yellow-400 rounded-lg min-h-screen  p-4 sm:p-8 flex flex-col sm:bg-yellow-400 sm:min-h-44"
        style={{ width: "1163px", height: "573px", sm: { height: "573px" } }}
      >
        


        <div className="grid grid-rows-1 sm:grid-cols-2 gap-4 m-4 h-full ">
          {/* Left side */}
          <div
            className="rounded bg-yellow-400  flex items-center justify-center min-h-[50%] sm:min-h-0"
            style={{ width: "100%", height: "100%", sm: { height: "590px" } }}
          >
            <div className="flex-1 flex flex-col justify-center items-center mb-6">
              <img
                className="absolute sm:h-[400px] sm:-mt-20"
                src="public\assets\images\buswationIMAGE.png"
                alt="Illustration"
              />

              <img
                className="w-80 h-80"
                src="public\assets\images\Ellipse 21.png"
                alt=""
              />
              <h1
                className="text-2xl sm:absolute sm:font-bold sm:mt-80 sm:bottom-70  
                "
              >
                Access Your Acount
              </h1>
            </div>
          </div>
          {/* Right side */}
          <div
            className="rounded bg-yellow-400  flex items-center justify-center min-h-[50%] sm:min-h-0 "
            style={{ width: "100%", height: "100%", sm: { height: "590px" } }}
          >
            <div className="flex-1 flex flex-col justify-center p-1 sm:mt-0">
              <Login />
              <div className="flex justify-center space-x-4 mt-5 gap-4 ">
                <button className="p-2 bg-white rounded-full shadow-md">
                  <img
                    src="public\assets\icons\Social Icons (1).png"
                    alt="Google"
                    className="w-6 h-6"
                  />
                </button>

                <button className="p-2 bg-white rounded-full shadow-md">
                  <img
                    src="public\assets\icons\Social Icons (2).png"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </button>

                <button className="p-2 bg-white rounded-full shadow-md">
                  <img
                    src="public\assets\icons\Social Icons.png"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </button>
              </div>
              <div className="flex justify-center ">
                <p>
                  Not a Menber ?{" "}
                  <span className="font-semibold text-xl">
                    <Link to={"/singup"}> SignUp </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
