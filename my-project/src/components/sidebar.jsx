import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeSvg } from './index';

export default function Sidebar() {
    const [ElementPosition, setElementPosition] = useState({});
    const [Selected, setSelected] = useState(false);
    const sidebarRef = useRef(null); // Ref for the sidebar
    const useREF = useRef(null); // Ref for the selected list item

    const handelSeleter = () => {
        if (useREF.current) {
            const element = useREF.current.getBoundingClientRect();
            setElementPosition(element);
            setSelected(true);
        }
    };
    
    useEffect(() => {
        if (Selected) {
            console.log("Updated Bounding Client Rect:", ElementPosition);
        }
    }, [ElementPosition, Selected]);



    return (
        <> 
                    <aside ref={sidebarRef}
                        id="sidebar-multi-level-sidebar"
                        className="bg-deep-purple-OP50 mt-20 fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0"
                        aria-label="Sidebar">
                            
                                    <div id='navIttem' className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                                    <ul className="space-y-2 font-medium" style={{ position: 'relative', zIndex: '10' }}>
                                        <li ref={useREF} onClick={handelSeleter}>
                                            <Link
                                                to='/'
                                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-golden-yellow-OP70 group">
                                                <HomeSvg Select={Selected} />
                                                <span className={`flex-1 ms-5 mt-1 whitespace-nowrap ${Selected ? "text-white" : "text-black"}`}>Home</span>
                                            </Link>
                                        </li>

                                        <li >
                                            <Link
                                                to='/'
                                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-golden-yellow-OP70 group">
                                                <img className='w-10 h-10' src="public/assets/icons/BusBus.png" alt="" />
                                                <span style={{ marginTop: '2px' }} className="flex-1 ms-3 m-0 whitespace-nowrap">BUS</span>
                                            </Link>
                                        </li>

                                        <li >
                                            <Link
                                                to='/'
                                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-golden-yellow-OP70 group">
                                                <img className='w-10 h-10' src="public/assets/icons/Male Userprofile.png" alt="" />
                                                <span style={{ marginTop: '-6px', marginLeft: '10px' }} className="flex-1 ms-2 m-0 whitespace-nowrap">Profile</span>
                                            </Link>
                                        </li>

                                        <li >
                                            <Link
                                                to='/'
                                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-golden-yellow-OP70 group">
                                                <img className='w-10 h-10' src="public/assets/icons/Mapsmap.png" alt="" />
                                                <span style={{ marginTop: '-6px', marginLeft: '10px' }} className="flex-1 ms-2 m-0 whitespace-nowrap">MAP</span>
                                            </Link>
                                        </li>

                                    </ul>
                                    
                                    </div>
                                    <div 
                                                style={{
                                                    position: 'absolute',
                                                    zIndex: '0',  
                                                    // height: `${ElementPosition.height}px`,  
                                                    // width: `${ElementPosition.width}px`, 
                                                    // left: `${ElementPosition.left}px`,    
                                                    // top: `${ElementPosition.top}px`

                                                    height: `${ElementPosition.height}px`,  
                                                    width: `${ElementPosition.width}px`, 
                                                    left: `${ElementPosition.left}px`,    
                                                    top: `${ElementPosition.top -78}px`
                                                }}
                                                className='bg-Light-purple drop-shadow-lg rounded-lg'>
                                     </div>
                            
                    </aside>
                    
                
        </>
    );
}
