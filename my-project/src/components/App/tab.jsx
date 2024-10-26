import React, { useEffect, useRef, useState } from 'react';

export default function Tab() {
  const [Left, setLeft] = useState(0);
  const [Width, setWidth] = useState(0);
  const [ActiveTab, setActive] = useState("All Things");
  const scrollContainerRef = useRef(null);

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
      const item = document.getElementById(`Tabs-${tabName}`);
      const scrollLeft = scrollContainerRef.current ? scrollContainerRef.current.scrollLeft : 0;

      if (item) {
        const size = item.getBoundingClientRect();
        setLeft(size.left + scrollLeft); // Adjust left position with scroll
        setWidth(size.width);
      }
    }, 0);
  };

  useEffect(() => {
    const item = document.getElementById(`Tabs-${ActiveTab}`);
    const scrollLeft = scrollContainerRef.current ? scrollContainerRef.current.scrollLeft : 0;

    if (item) {
      const position = item.getBoundingClientRect();
      setLeft(position.left + scrollLeft); // Adjust left position with scroll
      setWidth(position.width);
    }
  }, [ActiveTab]);

  return (
    <>
      <div className="sm:hidden mt-5 grid gap-4 sm:grid-cols-2 relative">
        {/* Scrollable Tabs */}
        <div
          className="rounded whitespace-nowrap overflow-x-auto scrollbar-hide relative"
          ref={scrollContainerRef}
          style={{ maxWidth: '100%' }}
        >





          {/* Tab Indicator */}
          <div
            style={{
              left: `${Left}px`,
              width: `${Width}px`,
              top: '5px',
              transition: 'left 0.6s ease, width 0.6s ease',
            }}
            className="absolute bg-purple-700 shadow-strong border-white border-2 rounded-2xl h-8"
          ></div>
          








          {/* Tab Items */}
          <div className="flex flex-row relative z-10">
            {tabs.map((tabName) => (
              <div
                id={`Tabs-${tabName}`}
                key={tabName}
                className={`tab ml-5 p-2 cursor-pointer ${ActiveTab === tabName ? 'text-white text-sm p-3' : 'text-black'}`}
                onClick={() => handleTabClick(tabName)}
                style={{ flexShrink: 0 }} // Ensure tabs do not shrink
              >
                {tabName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
