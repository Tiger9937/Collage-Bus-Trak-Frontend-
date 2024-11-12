import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    placeholder ,
    attributes,
    dising,
    LacleClass,
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className={`inline-block mb-1 pl-1 ${LacleClass}`}
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 rounded-xl py-2 sm:rounded-lg text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            placeholder={placeholder}
            />
        </div>
    )
})

export default Input