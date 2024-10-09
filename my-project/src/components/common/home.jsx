import React, { useState } from 'react'

export default function home({Select}) {
  return (
    <svg 
    style={{
      color: Select ? 'white' : 'rgb(156 163 175)', // Ensure fallback color when select is false
    }}
    className={`w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 
                        group-hover:text-gray-900 dark:group-hover:text-white ${Select == true ? 'text-white' : 'text-gray-900'}`}
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  )
}
