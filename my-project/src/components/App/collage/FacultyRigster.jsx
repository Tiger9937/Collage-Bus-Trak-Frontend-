import React, { useRef } from 'react'
import {GetDataWithFile} from '../../../utils/fetch'

export default function FacultyRigster() {
    const fileref = useRef()

    const senddata = async ()=>{
        const FacultData = {
            college:"674e7b0d705e663dac6218dc",
            FacultyName:"ajuffdjhfhbvbsdjbjhvsd",
            DOB:"1987-10-12",
            age:"23",
            Gender:"male",
            // profile_image:""
            bio:"Experienced professor in computer applications.",
            socialLinks:["inst","fb","wp"],
            designation:"Professor",
            department:"BCA",
            email:"sonthing@gmail.come",
            phone:9937152281,
            Facultaddress: {
                countrie: "USA",
                state: "California",
                District: "Los Angeles",
                at: "1234",
                po: "90001",
                Village: "Westwood",
                city: "Los Angeles",
                pincode: "90001",
                Nearer_Landmark: "Near Sunset Boulevard",
            },
            joiningDate:"2024-12-10",
            yearofstay:5
        }
        const image = fileref.current?.files[0]

        const Data = new FormData()
        Data.append("collageFaculty",JSON.stringify(FacultData))
        Data.append("profile_image",image)

        const FaculitInfo = await GetDataWithFile("POST" , "/faculty/FacultyRigster" , Data )

        console.log(FaculitInfo)
    }


  return (
    <>
      <input ref={fileref} type="file" />
      <button onClick={senddata} className='  bg-black text-yellow-100 '>send</button>
    </>
  )
}
