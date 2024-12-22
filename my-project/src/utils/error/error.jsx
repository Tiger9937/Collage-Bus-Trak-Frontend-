import React, { useEffect, useRef, useState } from "react";

function Error(props) {
  const [isError, setIsError] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const notification = useRef(null)
  const handleClose = () => {
    setIsError(false);
  };

  useEffect(() => {
     const Not = notification.current
    setTimeout(() => {
        Not.style.display = "none";
    }, 4500);
  }, []);
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      {isError && (


            

              <div ref={notification} style={{top:`${0}px`}} className="flex notification absolute flex-col items-center w-full max-w-sm p-3 bg-red-400 border border-red-300 rounded-lg shadow-lg scale-75 sm:scale-100">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
                      <svg
                        className="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-xl sm:font-medium text-white font-bold">
                        Alert Dialog
                      </h3>
                      <p className="text-sm text-white">
                        JavaScript has three ipsum{" "}
                        {!isExpanded && (
                          <span
                            className="underline text-red-900 font-semibold cursor-pointer"
                            onClick={handleToggle}
                          >
                            read more...
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <button
                    className="h-8 w-8 text-white focus:outline-none"
                    onClick={handleClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {isExpanded && (
                  <div className="mt-2 text-white text-sm max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                    <p className="text-sm">
                      JavaScript has three Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Corporis officia repudiandae distinctio.
                    </p>
                    <div
                      className="text-center mt-2 text-white cursor-pointer"
                      onClick={handleToggle}
                    >
                      <svg
                        className="h-5 w-5 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
            
        
      )}
    </>
  );
}

export default Error;
