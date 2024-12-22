import React from "react";
import { Singup } from "../components/index";
import { Link } from "react-router-dom";

export default function Exparimant() {
  return (

    <div className="flex justify-center min-h-screen items-center w-full bg-yellow-400 sm:bg-gray-100">
      <div
        className="bg-yellow-400 rounded-lg min-h-screen  p-4 sm:p-8 flex flex-col sm:bg-yellow-400 sm:min-h-44"
        style={{ width: "1163px", height: "573px", sm: { height: "573px" } }}
      >
        <Link
            style={{
              height: "34px", // Slightly increased height for better alignment
              width: "80px", // Adjusted width for proportion
              position: "absolute",
              backgroundColor: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50px", // Full rounded corners
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)", // Stronger shadow for better visibility
              textDecoration: "none",
              transition: "box-shadow 0.3s ease, transform 0.3s ease", // Smooth shadow and scaling effect
            }}
            to={"/"}
            className="hover:shadow-xl hover:scale-105" // Larger shadow and slight scaling on hover
          >
            <button
              style={{
                backgroundColor: "transparent",
                borderRadius: "50px", // Fully rounded button
                fontSize: "16px", // Adjusted font size for better fit
                cursor: "pointer",
                padding: "8px 12px", // Adjusted padding for consistency
                transition:
                  "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease", // Smooth hover effect
                textAlign: "center",
              }}
              className="hover:bg-slate-400 hover:text-black" // Hover effect with background and text color change
            >
              Skip
            </button>
          </Link>


        <div className="grid grid-rows-1 sm:grid-cols-2 m-2 h-full ">
          {/* Left side */}
          <div
            className="rounded bg-yellow-400  flex items-center justify-center sm:min-h-0"
            style={{ width: "100%", height: "100%", sm: { height: "590px" } }}
          >
            <div className="flex-1 flex flex-col justify-center items-center ">
              <img
                className="absolute h-[300px] sm:h-[400px] sm:-mt-20 z-10 "
                src="public\assets\images\buswationIMAGE.png"
                alt="Illustration"
              />

              <img
                className="sm:w-80 w-[10000px]  h-80 -z-0 "
                src="public\assets\images\Ellipse 21.png"
                alt=""
              />
              <h1
                className="text-2xl sm:absolute font-Assistant font-bold sm:mt-80 sm:bottom-70"
              >
                Create Your Account
              </h1>
            </div>
          </div>
          {/* Right side */}
          <div
            className="rounded bg-yellow-400  flex items-center justify-center sm:min-h-0 "
            style={{ width: "100%", height: "100%", sm: { height: "590px" } }}
          >
            <div className="flex-1 flex flex-col justify-center p-4 sm:mt-0">
              <Singup />
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
              <div className="flex justify-center mt-3">
                <p>
                  Membar ?{" "}
                  <span className="font-semibold text-xl">
                    <Link className=" text-deep-purple" to={"/login"}> Login </Link>
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
