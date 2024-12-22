 import React, { useEffect, useRef, useState } from 'react'
 import {GetDataWithFile} from '../../../utils/fetch'

 export default function CollageRigstre() {
    const inputImg = useRef()
    
    const [getimage,setimage] = useState()


    useEffect(()=>{
        const InrutImageEvent = inputImg.current
        InrutImageEvent.addEventListener("input",(event)=>{
            const image = event.target.files[0]
            console.log(image)
            setimage(image)
        })
    },[])


    
    // const onsend = async () => {
    //     console.log(inputImg.current.value);
    
    //     const info = {
    //         name: "hello",
    //         establishedYear: "2001",
    //         phone: "9937152281",
    //         email: "jas@gmail.com",
    //         website: "wab.com",
    //         description: "about",
    //         affiliatedUniversityName: "IIT",
    //         coursesOffered: ["btec", "bbs", "bse", "bcum", "BBA"],
    //         BusName: ["bus1", "bus2", "bus3"],
    //         collageAddress: {
    //             countrie: "USA",
    //             state: "California",
    //             District: "Los Angeles",
    //             at: "1234",
    //             po: "90001",
    //             Village: "Westwood",
    //             city: "Los Angeles",
    //             pincode: "90001",
    //             Nearer_Landmark: "Near Sunset Boulevard",
    //         },
    //     };




    //     console.log(info.name);
    
    //     const formData = new FormData();
    //     // Serialize the `info` object to JSON and append it
    //     formData.append("infoData", info.name );
    
    //     console.log("FormData:", formData);
    //     // Append the file (getimage should be the file you want to upload)
    //     const getimage = inputImg.current.files[0]; // Assuming inputImg is a ref to the file input
    //     // if (getimage) {
    //     //     formData.append("image", getimage);
    //     // } else {
    //     //     console.error("No image selected.");
    //     // }
    
    
    //     // Send the request
    //     try {
    //         const data = await fetchFunction("POST", "/collage/collageRigster", formData);
    //         console.log("Response:", data);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };
        
    
    const onsend = async () => {
        // Verify file input
        const getimage = inputImg.current?.files[0];
        if (!getimage) {
            console.error("No file selected");
            return;
        }
    
        // Create FormData and append file + additional info
        const Dataform = new FormData();
        Dataform.append("profile_image", getimage);
    
        const info = {
            name: "suman gf isha my gf pro lsdjfdskjnndvj",
            establishedYear: 2001,
            phone: "9937152281",
            email: "jas@gmail.com",
            website: "wab.com",
            description: "about",
            affiliatedUniversityName: "IIT",
            TotalFaculty:5,
            totalStudents:150,
            coursesOffered: ["btec", "bbs", "bse", "bcum", "BBA"],
            BusName: ["bus1", "bus2", "bus3"],
            ownby:"private",
            ownername:"xyz",
            collageAddress: {
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
        };
    
        Dataform.append("information", JSON.stringify(info));
        console.log("FormData:", Dataform);
    
        // Send FormData using GetDataWithFile
        const getData = await GetDataWithFile("POST", "/collage/collageRigster", Dataform);
        console.log("Response from server:", getData);
    };
    
    

    
    

    
   return (
    <>
     <input type='file' ref={inputImg} onChange={inputImg}>
        
     </input>
     <button onClick={onsend}>send</button>
    </>
   )
 }
 