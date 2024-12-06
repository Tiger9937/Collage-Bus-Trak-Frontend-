 import React, { useEffect, useRef, useState } from 'react'
 import {Input ,Button} from '../../index'
 import { useForm } from 'react-hook-form';
 import {NodeElement_TO_Array} from '../../../utils/node_Converter'
 import {GetRawData} from '../../../utils/fetch'
    // BUG::when user click the address same than this well not pass data in home address
    

  // import {MultiREF} from '../../../utils/ref'
  // TODO:: When user prase enter than going to next fild if all fild is fill than go the gigster button


 export default function mainform({CollageID}) {
    const [addressSame, setAddressSame] = useState(false);
    const [DataClone , setDateClon] = useState({})
    const [Home_DataClone , setHome_DateClon] = useState({})
    const [previusVal , setpreviusVal] = useState([{Name:"",targetValue:""}])
    const inputRef = useRef(null)

    const{register , handleSubmit,
      formState: { errors },
      watch,
    }=useForm();
    
    
        
    const onSubmit = (data) => {
      
      console.log(data)

      function calculateAge(birthDateString) {
        let birthDate = new Date(birthDateString); 
        let today = new Date(); // Current date
      
        let age = today.getFullYear() - birthDate.getFullYear();
      
        // Adjust if the birthday hasn't occurred yet this year
        let monthDifference = today.getMonth() - birthDate.getMonth();
        let dayDifference = today.getDate() - birthDate.getDate();
      
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
          age--;
        }
      
        return age;
      }
      const AGE = calculateAge(data?.DOB)
      console.log("AGE->",AGE)
      
      const Student_Registration_Required_Data = {
          "mobileNumber": data?.Mobile_Number,
          "Collage":CollageID,
          "course": data?.course,
          "RollNumber": data?.RollNumber,
          "enrolmentDate":data?.Enrollment_Date,
          "DOB" : data?.DOB,
          "age" : AGE,
          "Gender":data?.Gender,
    "Address": {
        "countrie": "USA",
        "state": "California",
        "District": "Los Angeles",
        "at": "1234",
        "po": "90001",
        "Village": "Westwood",
        "city": "Los Angeles",
        "pincode": "90001",
        "Nearer_Landmark": "Near Sunset Boulevard"
    },
    "Living_address": {
        "countrie": "USA",
        "state": "California",
        "District": "Los Angeles",
        "at": "5678",
        "po": "90002",
        "Village": "Hollywood",
        "city": "Los Angeles",
        "pincode": "90002",
        "Nearer_Landmark": "Near Hollywood Sign"
    }
      }


        
      console.log(data)
       // const rigster = GetRawData('POST', "/collage/collageRigster" , Student_Registration_Required_Data)

    }

    // asing the privius value when the user is un teke the chake box

    useEffect(()=>{
          if (addressSame) {
            setDateClon({...watch()})
            setHome_DateClon({...watch()})
          }
          if(!addressSame){
            inputRef.current.value = null
            setDateClon(undefined)
            setHome_DateClon(undefined)
          }
          if (!addressSame && previusVal!=[]) {
            const Htmlelement = NodeElement_TO_Array(inputRef)
            
            

            for(let i=0 ; i < Htmlelement.length ;i++){
              
              if (Htmlelement[i].name == previusVal[i+1]?.Name ) {
                Htmlelement[i].value =  previusVal[i+1]?.targetValue
              }

            }
          }
         
    },[addressSame , setDateClon , setHome_DateClon , watch])
  
    const assignPrevvalue  = (event) =>{
        const TragetName = event.target?.name
        const TargetValue  = event.target?.value
        
      setpreviusVal((preval)=>UpdatePriveVal(preval))
      function UpdatePriveVal(preval) {

        let setval 
        let TrgetdObj = [...preval].find((name)=> name.Name === TragetName) || undefined

         if(TrgetdObj){
          TrgetdObj.targetValue = TargetValue
          setval = [...preval]
         }
         else{
          setval = [...preval,{Name:TragetName,targetValue:TargetValue}]
         }
         return setval
      }
      
      setDateClon(event.data)
      setHome_DateClon(event.data)
      setAddressSame(false)

    } 
    
   return (
       <>
       <form onSubmit={handleSubmit(onSubmit)}>


        {/* stdent info */}
        <div className=' flex justify-center gap-3 '>
            <div className='mb-5'>
                  <div className=' flex gap-4 max-w-4xl'>
                    <Input
                            {...register("Mobile_Number", {
                              required: "Mobile Number is required",
                              validate: {
                                matchPattern: (value) =>
                                  /^\+?[1-9]\d{1,14}$/.test(value) || "Invalid mobile number"
                              }
                            })}
                              LacleClass = "font-Assistant text-BLACK font-bold text-md"
                              label = "Moble Number :"
                              className="bg-Nut-PUR focus:text-black  border-white peer text-white placeholder-slate-200  focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                        />
                      <Input
                              {...register("course")}
                              LacleClass = "font-Assistant text-BLACK font-bold text-md"
                              label = "course  :"
                              className="bg-Nut-PUR  border-white peer placeholder-slate-200 focus:text-black text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                        />
                        <div className=" relative w-full ">
                              <label className='font-Assistant text-BLACK font-bold text-md'> Gender  :</label>
                              <select {...register("Gender")} className=" focus:text-gray-300 w-full text-white bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl  appearance-none">
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
                              className="bg-Nut-PUR  border-white peer placeholder-slate-200 focus:text-black text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                        /> */}
                </div>
            
                  <div className=' flex gap-4 max-w-4xl'>
                        <Input
                                
                                {...register("RollNumber", {
                                  required: "Enrollment Date is required",
                                })}
                                LacleClass = "font-Assistant text-BLACK font-bold text-md"
                                label = "RollNumber  :"
                                className="bg-Nut-PUR  p-10 border-white peer text-white placeholder-slate-200 focus:text-black  focus:outline-none focus:ring-2 focus:ring-black focus:border-black  border rounded"
                          />
                        <Input
                                
                                {...register("Enrollment_Date", {
                                  required: "Enrollment Date is required",
                                })}

                                type="date"
                                LacleClass = "font-Assistant text-BLACK font-bold text-md"
                                label = "Enrollment Date  :"
                                className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-white focus:text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                          />
                        <Input
                                {...register("DOB", {
                                  required: "Date Of Birth  is required",
                                })}
                                type="date"
                                LacleClass = "font-Assistant text-BLACK font-bold text-md"
                                label = "D-O-B  :"
                                className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-white focus:text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                          />

                  </div>

                
                  
            </div>
        </div>
        


        {/* Address */}
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
                <select  {...register("selectCountry")} value={DataClone?.selectCountry} className=" focus:text-black w-full text-white bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl  appearance-none">
                        <option className='text-base rounded-xl' >India</option>
                        <option className='text-base  rounded-xl'>Albania</option>
                        <option className='text-base  rounded-xl'>Algeria</option>
                        <option className='text-base rounded-xl'>Jordan</option>
                        <option className='text-base  rounded-xl'>Odisha</option>
                </select>
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">▼</span>
            </div>

                <div className="relative w-full md:w-1/2">

                <select {...register("selectState")} value={DataClone?.selectState} className=" focus:text-black w-full bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl text-white appearance-none">
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
               id=":r1:"
              {...register("atpo")}
              value={DataClone?.atpo}
                placeholder="AT/PO"
                className= " focus:text-black bg-Nut-PUR  border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
          />
    


            <Input id=":r2:" {...register("Village_Area")} value={DataClone?.Village_Area} type="text" placeholder="Village / Area" className="bg-Nut-PUR focus:text-black  border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
            <div className="flex gap-4">
              <Input  {...register("City")} value={DataClone?.City} type="text" placeholder="City" className="bg-Nut-PUR focus:text-black border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
              <Input {...register("Pin_code")} value={DataClone?.Pin_code} type="text" placeholder="Pin code" className="bg-Nut-PUR focus:text-black border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
            </div>
            <Input {...register("Nearest_Landmark")} value={DataClone?.Nearest_Landmark} type="text" placeholder="Nearest Landmark" className="bg-Nut-PUR focus:text-black border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
          </div>
          
        </div>
        
      
        {/* Home Address Section */}
        <form ref={inputRef} onBlur={assignPrevvalue}>
        <span className=' flex justify-center'>
                <div className="text-lg flex justify-center font-bold w-44 text-BLACK bg-DIP-yellow font-Assistant rounded-3xl mb-4">
                    <span className='pl-4 text-lg -mt-[1px] mr-4 '>Home Address </span>
                    <img src="public\svg\Home Address.svg" alt="" />    
                </div>
          </span>
          <div className="space-y-4">
            <div className="flex gap-4">


            <div className="relative w-full md:w-1/2">
                <select  onChange={assignPrevvalue} {...register("Home_selectCountry") }  value={Home_DataClone?.selectCountry} className="w-full bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl text-white appearance-none">
                        <option className='text-base rounded-xl' >India</option>
                        <option className='text-base  rounded-xl'>Albania</option>
                        <option className='text-base  rounded-xl'>Algeria</option>
                        <option className='text-base rounded-xl'>Jordan</option>
                        <option className='text-base  rounded-xl'>Odisha</option>
                </select>
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">▼</span>
            </div>

                <div className="relative w-full md:w-1/2">

                <select onChange={assignPrevvalue} {...register("Home_selectState")}  value={Home_DataClone?.selectState} className="w-full bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl text-white appearance-none">
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
                onChange={assignPrevvalue}
                {...register("Home_atpo")}
                value = {Home_DataClone?.atpo}
                placeholder="AT/PO"
                className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
          />
    


            <Input  
            onChange={assignPrevvalue}
            {...register("Home_Village_Area")} value = {Home_DataClone?.Village_Area}   type="text" placeholder="Village / Area" className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
            <div className="flex gap-4">
              <Input   
              onChange={assignPrevvalue}
              {...register("Home_City")} value = {Home_DataClone?.City } type="text" placeholder="City" className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
              <Input onChange={assignPrevvalue} {...register("Home_Pin_code")} value = {Home_DataClone?.Pin_code} type="text" placeholder="Pin code" className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
            </div>
            <Input  
              onChange={assignPrevvalue}
              {...register("Home_Nearest_Landmark")} value = {Home_DataClone?.Nearest_Landmark} type="text" placeholder="Nearest Landmark" className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"/>
          </div>

        </form>
    
     

      

      </div>

         {/* same AddressChaker */}

    <div className='h-full w-32'>
          <label className="flex items-center text-gray-600 cursor-pointer mt-2">
                          <input
                            // {...register("chekBox")}
                            type="checkbox"
                            checked={addressSame}
                            onClick={() => setAddressSame(!addressSame)}
                            className="mr-2"
                            />
                          Address Same
          </label>
    </div>



    {/* Rigster */}

      <div className='w-full mt-7 '>
          <div className="flex justify-center -mt-5">
            
                  
          

              <div className=''>
                    <button type='submit' className="w-52 text-lg font-bold h-[3rem] -mt-10 p-3 hover:bg-Hover-yellow bg-golden-yellow text-BLACK rounded-lg shadow-lg " >
                        Register
                    </button>
              </div>
              
        
        </div>
      </div>
      </form>
        </>
   )

 }
 