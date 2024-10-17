import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeSvg, BusSvg, Map, Profile } from './index';

export default function Sidebar() {
    const [elementPosition, setElementPosition] = useState({});
    const [selectedIndex, setSelectedIndex] = useState(1);

    const menuItems = [
        { index: 1, name: 'Home', icon: <HomeSvg />, path: '/' },
        { index: 2, name: 'BUS', icon: <BusSvg />, path: '/Bus' },
        { index: 3, name: 'Profile', icon: <Profile />, path: '/Profile' },
        { index: 4, name: 'MAP', icon: <Map />, path: '/Map' }
    ];

    const handleSelector = (index) => {
        const item = document.getElementById(`menu-item-${index}`);
        if (item) {
            const position = item.getBoundingClientRect();
            setElementPosition({
                height: position.height,
                width: position.width,
                left: position.left,
                top: position.top
            });
            setSelectedIndex(index); // Update selected index when an item is clicked
        }
    };

    // Default to the first menu item on component mount
    useEffect(() => {
        const item = document.getElementById(`menu-item-1`);
        if (item) {
            const position = item.getBoundingClientRect();
            setElementPosition({
                height: position.height,
                width: position.width,
                left: position.left,
                top: position.top
            });
        }
    }, []); // Run only on mount

    return (
        <>
            <aside 
                id="sidebar-multi-level-sidebar"
                className="bg-slate-50 fixed left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0"
                aria-label="Sidebar">
                
                <div id='navItem' className="h-full px-3 py-4 overflow-y-auto">
                    <ul>
                        {menuItems.map((item) => (
                            <li
                                key={item.index}
                                style={{ transition: 'all 0.3s ease', zIndex: 100 }}
                                id={`menu-item-${item.index}`} // Give each item a unique ID
                                onClick={() => handleSelector(item.index)}  // Handle click
                                className={`flex items-center hover:bg-golden-Yellow-OP70 p-2 rounded-lg cursor-pointer ${selectedIndex === item.index ? 'bg-Light-purple' : ''}`} // Highlight selected item
                            >
                                <Link to={item.path} className="flex items-center w-full">
                                    {item.icon}
                                    <span className="ml-2">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {selectedIndex && (
                    <div 
                        style={{
                            position: 'absolute',
                            zIndex: -1,
                            height: `${elementPosition.height}px`,
                            width: `${elementPosition.width}px`,
                            left: `${elementPosition.left}px`,
                            top: `${elementPosition.top - 78}px`,
                            transition: 'all 0.3s ease'
                        }}
                        className='bg-Light-purple drop-shadow-lg rounded-lg'>
                    </div>
                )}
            </aside>
        </>
    );
}
