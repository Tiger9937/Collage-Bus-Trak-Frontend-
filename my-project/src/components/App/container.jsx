import React from 'react'

export default function container({ children }) {
  return (
    <div class=" grid gap-4">
    <div class="  ml-5 min-h-[5500px] ">
        {children}
    </div>
</div> 
  )
}
