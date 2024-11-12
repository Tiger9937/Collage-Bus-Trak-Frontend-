import React, { useEffect, useState } from 'react';
import {Input ,Button} from '../../index'
import { useForm } from 'react-hook-form';
const StudentRegistration = () => {
  const [addressSame, setAddressSame] = useState(false);
  const [DataClone , setDateClon] = useState({})
  const [focusTextColor , setfocusTextColor] = useState()


  const{register , handleSubmit,
    formState: { errors },
    watch
  }=useForm();



  const onSubmit = (data) => {
      setDateClon({...data})
  }

  useEffect(()=>{

        if (addressSame) {
          setDateClon({...watch()})
        }else{
          setDateClon({})
        }

  },[addressSame, watch , setDateClon])

  
  

  return (

<form onSubmit={handleSubmit(onSubmit)}>
    <div className="max-w-7xl mx-auto p-1">
      {/* Title */}
      <div className="text-center mb-8">
        <img src="http://res.cloudinary.com/dwbjaa3ng/image/upload/v1726760704/AvterIMG5_oq0r8q.png" alt="Profile" className="w-20 h-20 rounded-full mx-auto" />
        <h1 className="text-4xl font-bold text-Light-purple font-Itim"> <span className='text-black'>Hello,</span> Linx Luxury</h1>
        <p className="text-gray-500 mt-1 -mb-3 text-xl">Register yourself as Student</p>
      </div>

      <div className="flex justify-center mb-5">
        <button className="bg-Light-purple text-white hover:bg-hover-purpal justify-center font-Assistant font-bold text-2xl py-2 px-4 rounded-xl flex items-center w-96">
          College
          <span className="ml-2 text-4xl font-bold shadow-xl">+</span>
        </button>
      </div>    
        {/* info about Student */}
        <div className=' flex justify-center gap-3 '>
            <div className='mb-5'>
                  <div className=' flex gap-4 max-w-4xl'>
                    <Input

                              LacleClass = "font-Assistant text-BLACK font-bold text-md"
                              label = "Moble Number :"
                              className="bg-Nut-PUR focus:text-black  border-white peer text-white placeholder-white  focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                        />
                      <Input
                              LacleClass = "font-Assistant text-BLACK font-bold text-md"
                              label = "course  :"
                              className="bg-Nut-PUR  border-white peer placeholder-white focus:text-black text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                        />
                        <div className=" relative w-full ">
                              <label className='font-Assistant text-BLACK font-bold text-md'> Gender  :</label>
                              <select className=" focus:text-black w-full text-white bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl  appearance-none">
                                    <option className='text-base rounded-xl' >select</option>
                                    <option className='text-base rounded-xl' >Male 👦🏻</option>
                                    <option className='text-base rounded-xl' >Female 👧🏻</option>
                                    <option className='text-base rounded-xl' >Other ⚧️</option>
                              </select>
                              <span className="absolute top-1/2 text-gray-300 right-3 transform -translate-y-1/2 mt-3 pointer-events-none">▼</span>
                        </div>
                        
                      {/* <Input  
                              LacleClass = "font-Assistant text-BLACK font-bold text-md"
                              label = "Gender  :"
                              className="bg-Nut-PUR  border-white peer placeholder-white focus:text-black text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                        /> */}
                </div>
            
                  <div className=' flex gap-4 max-w-4xl'>
                        <Input
                                LacleClass = "font-Assistant text-BLACK font-bold text-md"
                                label = "RollNumber  :"
                                className="bg-Nut-PUR  border-white peer text-white placeholder-white focus:text-black  focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                          />
                        <Input
                                type="date"
                                LacleClass = "font-Assistant text-BLACK font-bold text-md"
                                label = "Enrollment Date  :"
                                className="bg-Nut-PUR  border-white peer placeholder-white text-white focus:text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                          />
                        <Input
                                type="date"
                                LacleClass = "font-Assistant text-BLACK font-bold text-md"
                                label = "D-O-B  :"
                                className="bg-Nut-PUR  border-white peer placeholder-white text-white focus:text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                          />
                        


                  </div>

                
                  
            </div>
        </div>
        

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

       


        {/* Current Address Section */}
        <div>
        <span className=' flex justify-center'>
                <div className="text-lg flex justify-center font-bold w-44 text-BLACK bg-DIP-yellow font-Assistant rounded-3xl mb-4">
                    <span className='pl-3 text-lg -mt-[1px] mr-2 '>Current Address </span>
                    <img src="public\svg\Home Address.svg" alt="" />    
                </div>
          </span>

          <div className="space-y-4">
            <div className="flex gap-4">

            <div className="relative w-full md:w-1/2">
                <select  {...register("selectCountry")} className=" focus:text-black w-full text-white bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl  appearance-none">
                        <option className='text-base rounded-xl' >India</option>
                        <option className='text-base  rounded-xl'>Albania</option>
                        <option className='text-base  rounded-xl'>Algeria</option>
                        <option className='text-base rounded-xl'>Jordan</option>
                        <option className='text-base  rounded-xl'>Odisha</option>
                </select>
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">▼</span>
            </div>

                <div className="relative w-full md:w-1/2">

                <select {...register("selectState")} className=" focus:text-black w-full bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl text-white appearance-none">
                        <option className='text-base rounded-xl' >India</option>
                        <option className='text-base rounded-xl' >India</option>
                        <option className='text-base rounded-xl'>Albania</option>
                        <option className='text-base  rounded-xl'>Algeria</option>
                        <option className='text-base rounded-xl'>Jordan</option>
                        <option className='text-base  rounded-xl'>Odisha</option>
                </select>
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">▼</span>

                </div>

            </div>

            <Input
              {...register("atpo")}
                placeholder="AT/PO"
                className= " focus:text-black bg-Nut-PUR  border-white peer placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
          />
    


            <Input {...register("Village_Area")} type="text" placeholder="Village / Area" className="bg-Nut-PUR focus:text-black  border-white peer placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
            <div className="flex gap-4">
              <Input {...register("City")} type="text" placeholder="City" className="bg-Nut-PUR focus:text-black border-white peer placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
              <Input {...register("Pin_code")} type="text" placeholder="Pin code" className="bg-Nut-PUR focus:text-black border-white peer placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
            </div>
            <Input {...register("Nearest_Landmark")} type="text" placeholder="Nearest Landmark" className="bg-Nut-PUR focus:text-black border-white peer placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
          </div>
          
        </div>
        
      
        {/* Home Address Section */}
        <div>
        <span className=' flex justify-center'>
                <div className="text-lg flex justify-center font-bold w-44 text-BLACK bg-DIP-yellow font-Assistant rounded-3xl mb-4">
                    <span className='pl-4 text-lg -mt-[1px] mr-4 '>Home Address </span>
                    <img src="public\svg\Home Address.svg" alt="" />    
                </div>
          </span>
          <div className="space-y-4">
            <div className="flex gap-4">

            <div className="relative w-full md:w-1/2">
                <select {...register("Home_selectCountry")}  value={DataClone?.selectCountry || ""} className="w-full bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl text-white appearance-none">
                        <option className='text-base rounded-xl' >India</option>
                        <option className='text-base  rounded-xl'>Albania</option>
                        <option className='text-base  rounded-xl'>Algeria</option>
                        <option className='text-base rounded-xl'>Jordan</option>
                        <option className='text-base  rounded-xl'>Odisha</option>
                </select>
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">▼</span>
            </div>

                <div className="relative w-full md:w-1/2">

                <select {...register("Home_selectState")}  value={DataClone?.selectState || ""} className="w-full bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl text-white appearance-none">
                        <option className='text-base rounded-xl' >India</option>
                        <option className='text-base rounded-xl' >India</option>
                        <option className='text-base rounded-xl'>Albania</option>
                        <option className='text-base  rounded-xl'>Algeria</option>
                        <option className='text-base rounded-xl'>Jordan</option>
                        <option className='text-base  rounded-xl'>Odisha</option>
                </select>
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">▼</span>

                </div>

            </div>

            <Input
                {...register("Home_atpo")}
                value = {DataClone?.atpo || ""}
                placeholder="AT/PO"
                className="bg-Nut-PUR  border-white peer placeholder-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
          />
    


            <Input {...register("Home_Village_Area")} value = {DataClone?.Village_Area || ""}  type="text" placeholder="Village / Area" className="bg-Nut-PUR  border-white peer placeholder-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
            <div className="flex gap-4">
              <Input {...register("Home_City")} value = {DataClone?.City || ""} type="text" placeholder="City" className="bg-Nut-PUR  border-white peer placeholder-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
              <Input {...register("Home_Pin_code")} value = {DataClone?.Pin_code || ""} type="text" placeholder="Pin code" className="bg-Nut-PUR  border-white peer placeholder-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
            </div>
            <Input {...register("Home_Nearest_Landmark")} value = {DataClone?.Nearest_Landmark || ""} type="text" placeholder="Nearest Landmark" className="bg-Nut-PUR  border-white peer placeholder-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
          </div>

        </div>
    
     

      

      </div>

      <label className="flex items-center text-gray-600 cursor-pointer mt-2">
                      <input
                        {...register("chekBox")}
                        type="checkbox"
                        checked={addressSame}
                        onClick={() => setAddressSame(!addressSame)}
                        className="mr-2"
                      />
                      Address Same
      </label>

      <div className='w-full mt-7 '>
          <div className="flex justify-center -mt-5">
            
                  
          

              <div className=''>
                    <button type='submit' className="w-52 text-lg font-bold h-[3rem] -mt-10 p-3 hover:bg-Hover-yellow bg-golden-yellow text-BLACK rounded-lg shadow-lg " >
                        Register
                    </button>
              </div>
              
        
        </div>
      </div>

    </div>
</form>

  );
};

export default StudentRegistration;
















// student Rigster applay logic and froms complit the other fild
  // error component improvment
  // improve home singup login button
  // light mord Dark mode
  // apply resposibness

  // logic applay
        // usestates 