import React from 'react';
import { UserInfo, UserWork } from '../index'
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const usseractivate = [
    { ActName: "Projects", Logo: "public/svg/Flipboard.svg" },
    { ActName: "Bus", Logo: "public/svg/Bus copy.svg" },
    { ActName: "Research Paper", Logo: "public/svg/Brief.svg" },
    { ActName: "Notes", Logo: "public/svg/Microsoft OneNote.svg" },
    { ActName: "Public Info", Logo: "public/svg/User Male.svg" },
    { ActName: "Project Ideas", Logo: "public/svg/Project Management.svg" },
  ]

  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">

      <div className="space-y-4">
        <div className="bg-cG h-96 rounded-3xl flex flex-col">


          <UserInfo />

          <UserWork />

        </div>

        <div className="  rounded-lg">
          <div className=" grid gap-3 sm:grid-cols-9 ">

            {usseractivate.map(

              (Activate) => (
                <Link className="min-h-[50px] flex rounded-md bg-DIP-yellow hover:text-slate-600  hover:bg-Hover-yellow  shadow-xl sm:col-span-3 ">

                  <div className='h-11 w-11 p-1 m-1 isolate aspect-video  rounded-3xl bg-white  hover:bg-white/50 shadow-lg ring-1 ring-black/5' >

                    <img className='h-8 w-8 m-0.5  ' src={Activate.Logo} alt="" />
                  </div>
                  <span className='m-3 '>{Activate.ActName}</span>

                </Link>
              )


            )

            }
          </div>
        </div>

      </div>


      <div className="bg-yellow-300 h-full rounded-lg">

      </div>

    </div>

  );
};

export default Dashboard;
