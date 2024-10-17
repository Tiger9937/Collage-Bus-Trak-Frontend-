import React, { useRef } from 'react';

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);
  const scrollAmount = 10000000; // Amount to scroll on button click

    // function that helping to scroling
    // disidet to how much amount to wont to scroll 
    // useRef to make provide ref


  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const items =[
    "All Things",
      "All Things",
      "Projects",
      "Project Ideas",
      "Research Paper",
      "Nots",
      "Bus",
  ];

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-scroll flex space-x-4 p-4 scroll-smooth"
      >
        {items.map((item, index) => (
          <div
          style={{ maxWidth: '100%' }}
            key={index}
            className="bg-yellow-400 w-80 h-12 flex items-center justify-center rounded-lg shadow-lg"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default HorizontalScroll;
