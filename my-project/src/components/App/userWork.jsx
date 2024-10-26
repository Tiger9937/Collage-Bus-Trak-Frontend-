import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function userWork() {
  const [collageName, SetcollageName] = useState('academy OF technocrat')

  return (
    <div className="basis-[90%] rounded-3xl rounded-b-lg bg-HiLight_purple shadow-black shadow-5 ">
      
      <div className='mt-8'>
     

      <div className='flex justify-center'>
        <button className='flex justify-center h-11 w-96 bg-dimLight rounded-md font-AndadaPro'>
          <Link className='mt-1 '>
            <img src="public\svg\Addicon.svg" alt="" />
          </Link>
          <span className='mt-2 ml-2'>Follow</span>
        </button>
      </div>

     
      <div className='flex justify-center m-5 gap-8'>
        <button className='flex justify-center h-11 w-44 bg-DIP-yellow rounded-md font-AndadaPro'>
          <Link className='mt-2 '>
            <img src="public\svg\Phone.svg" alt="" />
          </Link>
          <span className='mt-2 ml-2 mr-4'>Call</span>
        </button>

        <button className='flex justify-center h-11 w-44 bg-DIP-yellow rounded-md font-AndadaPro'>
          <Link className='mt-1 '>
            <img src="public\svg\Letter.svg" alt="" />
          </Link>
          <span className='mt-2 ml-2'>Message</span>
        </button>
      </div>
      </div>


      <div className='flex mt-6 font-AndadaPro justify-center text-white min-w-full min-h-12 text-4xl'>
        <Link>{collageName[0].toUpperCase() + collageName.substring(1)}</Link>
      </div>

    </div>
  )
}
