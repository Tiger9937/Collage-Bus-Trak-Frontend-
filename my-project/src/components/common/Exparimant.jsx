// import React from 'react';
// const Dashboard = () => {
// // student rigstation from 
// // improve error component
// // Dark mode light mode 

  
//   return (
//     <div class="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
      
//         <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

          
//             <div class="fixed inset-0 transition-opacity" aria-hidden="true">
//                 <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
           
//                     <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
//                         role="dialog" aria-modal="true" aria-labelledby="modal-headline">
//                           <div className=' flex justify-end'>
//                                     <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                             stroke="currentColor" aria-hidden="true">
//                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                             d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                           </div>
//                           <div className=' flex'>
//                                 <div className=' bg-slate-500 rounded-full   pl-4  h-11 w-11'>
//                                     <span className=' font-bold   text-4xl'>!</span>
//                                 </div>

//                                 <div className=' bg-orange-600'>
//                                         message
//                                 </div>
//                           </div>


//                     </div>

//         </div>

//     </div>

//   );
// };

// export default Dashboard;

// {
// import { useForm } from "react-hook-form"
// import {Input} from '../index'
// import { useEffect, useRef, useState } from "react"

// export default function App() {
//   const [iscle , setche] = useState(false)
//   const [clone , setclone] = useState({})
//   const [previusVal , setpreviusVal] = useState("")
//   const inputRef = useRef(null);
  
//   console.log("that is",inputRef.current)
//   useEffect(()=>{

//     const element = document.getElementById(`:r${1}:`)
//     console.log(element.value)

//   },[])

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()



//   useEffect(()=>{
//     setclone({...watch()})
//     if (iscle) {
//     setclone({...watch()})
//    }else{
//     setclone({})
//    }
//    if(!iscle){
//     setclone(undefined)
//     inputRef.current.value = null
//   }
//   if (!iscle && previusVal != "") {
//     inputRef.current.value = previusVal
//   }
//   },[watch , iscle , setclone , iscle , setclone])


//   const onSubmit = (data) =>{
    
//   }


//     const imchange = (event)=>{
      
//       setpreviusVal(event.target.value)
//       setclone(event.data)
//       setche(false)

//     }

//   return (
//     /* "handleSubmit" will validate your Inputs before invoking "onSubmit" */
//     <form className="m-10"  onSubmit={handleSubmit(onSubmit)}>
//       {/* register your Input into the hook by invoking the "register" function */}
//       <div ref={inputRef}>

//                   <Input className="bg-gray-300 flex" defaultValue="test" {...register("example")} />
//                   <Input className="bg-gray-500 " value={clone?.example}    {...register("exampleRequired", { required: true })} onChange={()=>imchange(event)}/>
//                   <Input className="bg-gray-100 "  {...register("exampleuired", { required: true })} onChange={()=>imchange(event)}/>
//                 <Input id={"hello-js"}  {...register("eRequired")} value={clone?.example}  onChange={()=>imchange(event)} />

//       </div>
      

//       {/* <input   /> */}

      
//       {/* errors will return when field validation fails  */} 
//       {errors.exampleRequired && <span>This field is required</span>}


//       <div className='w-full mt-7 '>
//           <div className="flex justify-center -mt-5">
            
                  
          

//               <div className=''>
//                     <button type='submit' className="w-52 text-lg font-bold h-[3rem] -mt-10 p-3 hover:bg-Hover-yellow bg-golden-yellow text-BLACK rounded-lg shadow-lg " >
//                         Register
//                     </button>
//               </div>
              
        
//         </div>
//       </div>

//       <input type="checkbox" checked={iscle}  onChange={()=> setche(!iscle)} />
//     </form>
//   )
// }
// }



{/*
    useEffect(()=>{
    // working is cheak the element bihaviear
    const obserber =new IntersectionObserver((enteres)=>{
      const entry = enteres[0]
      console.log("Element Enter::",entry)
      console.log("Element Enter Traget::",entry.target.className = "bg-black max-w-10 max-h-min-h-10")
      // bg-slate-800 max-w-10 max-h-min-h-10
    })
    console.log(obserber)
   obserber.observe(elemntRef.current)
  },[])

*/}



{/* <div id="1" className="bg-slate-300 max-w-10 min-h-10"></div>
            <div id="1" className="bg-slate-100 min-w-10 min-h-10"></div>
            <div id="1" className="bg-slate-500 min-w-10 min-h-10"></div>
            <div id="1" className="bg-slate-600 min-w-10 min-h-10"></div>
            <div id="1" className="bg-slate-700 min-w-10 min-h-10" ></div>
            <div id="1" className="bg-slate-800 max-w-10 max-h-min-h-10"></div>
            <div id="1" className="bg-slate-800 max-w-10 max-h-min-h-10"></div>

            <div id="1" className="bg-slate-300 max-w-10 min-h-10"></div>
            <div id="1" className="bg-slate-100 min-w-10 min-h-10"></div>
            <div id="1" className="bg-slate-500 min-w-10 min-h-10"></div>
            <div id="1" className="bg-slate-600 min-w-10 min-h-10"></div>
            <div id="1" className="bg-slate-700 min-w-10 min-h-10" ></div>
            <div id="1" className="bg-slate-800 max-w-10 max-h-min-h-10"></div>
            <div id="1" className="bg-slate-800 max-w-10 max-h-min-h-10"></div> */}




            import React from 'react'
            import { Singup } from '../index';

            export default function Exparimant() {
              return (
                <div className="flex justify-center min-h-screen items-center w-full  bg-yellow-400 sm:bg-gray-100 ">
      
                          <div className="bg-yellow-400 rounded-lg min-h-screen shadow-lg  sm:p-8 flex flex-col sm:flex-row sm:bg-yellow-400 sm:min-h-44" style={{ width: '1163px', height: '573px' , sm: { height: '573px' }}}>
                            
                          <div class=" grid gap-4 m-4 sm:grid-cols-12 ">
                                <div class="rounded bg-orange-500 shadow-xl sm:col-span-4 min-w-[200px]" >
                                  hello
                                </div>
                                <div class="rounded bg-sky-400 shadow-xl sm:col-span-4 sm::min-w-[600px] min-w-[200px]">
                                            <div className="flex-1 flex flex-col justify-center p-4 sm:-mt-0 ">
                                              <Singup />
             
                                            </div>
                                </div>
                          </div>
            
                          </div>
           
                  </div>
              )
            }
            