import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className='bg-red-200'>
      Home Page
      <Link to="/login" className='bg-slate-100 h-3 w-5'>LOGIN</Link>
      <Link to="/singup" className='bg-slate-100 h-3 w-5'>Singup</Link>
    </div>
  )
}
