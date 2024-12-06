import React, { useEffect, useRef, useState } from 'react'

const scorebar = React.forwardRef( function scorebar({ CollageID,Style, classname , items, ...props},bgref ){
    const elmentref = useRef([])
    const [Viseable , setViseable] = useState([])

    const send_collage_ID = (id)=>{
        CollageID(id)
    }

    useEffect(()=>{
        console.log(items)
        const  Observer = new IntersectionObserver((entry)=>{
            entry.forEach((item)=>{

                if (item.isIntersecting) {  
                    const index = item.target.dataset.index 

                    setViseable((priveval)=>{
                        if (!priveval.includes(index)) {
                            return [...priveval , index]
                        }
                        return priveval
                    })
                }
            })

        })
        
        elmentref.current.forEach((elment)=>{
            Observer.observe(elment)
        })  
        
    },[items])
    
    return (
        <div ref={bgref} style={Style} className={`bg-slate-500 ${classname} `}>
            {items.map((item,index)=>(
                <div

                key={index}
                
                data-index={index}
                ref={(el)=>elmentref.current[index]=el}
                style={{
                    opacity: Viseable.includes(String(index)) ? 1 : 0,
                    transition: "opacity 0.5s ease-in",
                }}
                className={`bg-black hover:bg-Hover-yellow w-full   rounded-3xl opacity-${ Viseable.includes(String(index)) ? "0" :"100"}`}>
                    <div onClick={()=>send_collage_ID(item._id)} className=' flex m-1 '>
                        <img src={item.Image} alt="" className='h-8 w-8'/>
                        <span className='text-white'>{item.name}</span>
                    </div>
                 
               </div>
            ))

            }
            
        </div>
    )
})

export default scorebar