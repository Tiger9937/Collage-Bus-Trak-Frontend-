import React , { useState }from 'react';

export default function Loading() {
  const [time , settime] = useState(1)
return (
<>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "385px",
        right: "0px",
        left: "100px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="80" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow ${time}s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>
    
      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "390px",
        right: "0px",
        left: "180px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
                <rect className="wind-rect" x="9.375" y="85" width="18.75" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow ${time}s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>

      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "400px",
        right: "0px",
        left: "230px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
                <rect className="wind-rect" x="9.375" y="85" width="18.75" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow ${time}s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>

      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "395px",
        right: "0px",
        left: "270px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
                <rect className="wind-rect" x="9.375" y="85" width="18.75" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow ${time}s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>

      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "375px",
        right: "0px",
        left: "180px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
                <rect className="wind-rect" x="9.375" y="85" width="18.75" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow ${time}s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>

      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "375px",
        right: "0px",
        left: "100px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow ${time}s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>

      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "375px",
        right: "0px",
        left: "280px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
                <rect className="wind-rect" x="9.375" y="85" width="18.75" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow 0.5s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>

      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "380px",
        right: "0px",
        left: "150px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
                <rect className="wind-rect" x="9.375" y="85" width="18.75" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow 0.5s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>

      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "380px",
        right: "0px",
        left: "250px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
                <rect className="wind-rect" x="9.375" y="85" width="18.75" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow 0.5s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>

      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "390px",
        right: "0px",
        left: "300px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
                <rect className="wind-rect" x="9.375" y="85" width="18.75" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow 0.5s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>

      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "400px",
        right: "0px",
        left: "120px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
                <rect className="wind-rect" x="9.375" y="85" width="18.75" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow ${time}s linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg>

      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 100" // Adjusted viewBox for wider animation space
      xmlSpace="preserve"
      className="w-full h-12" // Full width of the button
      style={{
        position: "absolute",
        top: "406px",
        right: "0px",
        left: "150px"
      }}
    >
      
      <g>
                <rect className="wind-rect" x="37.5" y="85" width="103.125" height="2.375" />
                <rect className="wind-rect" x="9.375" y="85" width="18.75" height="2.375" />
      </g>


      {/* Inline styles */}
      <style jsx>{`
        @keyframes windFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .wind-rect {
          fill: #333333;
          animation: windFlow ${time} linear infinite; // Animation duration and type
        }

        gd {
          transform: translateX(-100%); // Move initially out of the viewport
          animation: windFlow 4s linear infinite; // Apply the animation to the group
        }
      `}</style>
    </svg> 

</>
);
}