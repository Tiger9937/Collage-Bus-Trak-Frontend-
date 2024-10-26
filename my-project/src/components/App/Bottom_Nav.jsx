import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Bottom_Nav() {
  const [selected, setselected] = useState(0);

  const DownnavArray = [
    { id: 1, iconPath: 'public/svg/Home.svg', name: 'Home' , navigatePath:'/'},
    { id: 2, iconPath: 'public/svg/Bus.svg', name: 'Bus' , navigatePath:'/bus' },
    { id: 3, iconPath: 'public/svg/Maps.svg', name: 'Map' , navigatePath:'/map'},
    { id: 4, iconPath: 'public/svg/User.svg', name: 'User' ,navigatePath:'/profile' , },
  ];

  const DownNav = (id) => {
    const item = document.getElementById(`nav-${id}`);
    if (item) {
      setselected(id);
    }
  };
  
useEffect(()=>{
  setselected(DownnavArray[0].id)
},[])


  return (
    <>
      <div className="grid gap-4  sm:hidden fixed bottom-0 left-0 right-0   z-50">
        <div className="rounded shadow-xl grid grid-cols-4">
          {DownnavArray.map((item) => (
            <Link

              key={item.id}
              to={item.navigatePath}
              id={`nav-${item.id}`}
              onClick={() => DownNav(item.id)}
              className={`rounded-full p-1 w-16 mt-2 ml-4 h-16 ${selected === item.id ? 'bg-DIP-yellow' : ''} transition-colors duration-300`}
            >
              <img
                className={`transition-all duration-600 ${selected === item.id ? 'h-14 w-14' : 'opacity-30 h-12 m-1 w-12'}`}
                src={item.iconPath}
                alt=""
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
