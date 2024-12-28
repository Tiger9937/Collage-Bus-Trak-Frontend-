import React, { useEffect, useRef, useState } from 'react'

const scorebar = React.forwardRef(function scorebar({ CollageID, Style, classname, items,Img_Name , ...props }, bgref) {
    const elmentref = useRef([])
    const [Viseable, setViseable] = useState([])

    const send_collage_ID = (id) => {
        CollageID(id)
    }

    const CollageInfoImg_Name = (name , img)=>{
        Img_Name(name , img)
    }
    // img
    // title
    useEffect(() => {
        
        const Observer = new IntersectionObserver((entry) => {
            entry.forEach((item) => {

                if (item.isIntersecting) {
                    const index = item.target.dataset.index

                    setViseable((priveval) => {
                        if (!priveval.includes(index)) {
                            return [...priveval, index]
                        }
                        return priveval
                    })
                }
            })

        })

        elmentref.current.forEach((elment) => {
            Observer.observe(elment)
        })

    }, [items])
    
    return (
        <div ref={bgref} style={Style} className={` mt-1 p-2 rounded-xl  ${classname} `}>
            {items.map((item, index) => (
                <div

                    key={index}

                    data-index={index}
                    ref={(el) => elmentref.current[index] = el}
                    style={{
                        opacity: Viseable.includes(String(index)) ? 1 : 0,
                        transition: "opacity 0.5s ease-in",
                    }}
                    className={`scrollable-element bg-purple-800 hover:bg-purple-900 shadow-inner shadow-slate-300 transition-colors  hover:bg-opacity-20 w-full rounded-xl opacity-${Viseable.includes(String(index)) ? "0" : "100"}`}>
                    <div onClick={() => {send_collage_ID(item._id)
                                        CollageInfoImg_Name(item.name , item.Image)}} 
                            className=' flex m-2 justify-start items-center  '>
                        <img src={item.Image} alt="" className='h-12 w-12 p-1 rounded-3xl ' />
                        <span className='text-white ml-2 text-wrap text-sm'>{item.name}</span>
                    </div>

                </div>
            ))
            }
        </div>
    )
})

export default scorebar