 import React, { useEffect, useRef, useState } from 'react'
 import {fetchFunction} from '../../../utils/fetch'

 export default function CollageRigstre() {
    const inputImg = useRef()
    
    const [getimage,setimage] = useState()

    useEffect(()=>{
        const InrutImageEvent = inputImg.current
        InrutImageEvent.addEventListener("input",(event)=>{
            setimage(event.target.files[0])
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
        console.log(inputImg.current.value);
    
        const info = {
            name: "hello",
            establishedYear: "2001",
            phone: "9937152281",
            email: "jas@gmail.com",
            website: "wab.com",
            description: "about",
            affiliatedUniversityName: "IIT",
            coursesOffered: ["btec", "bbs", "bse", "bcum", "BBA"],
            BusName: ["bus1", "bus2", "bus3"],
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
        console.log(info);
    
        const formData = new FormData();
    
        // Serialize the `info` object to JSON and append it
        formData.append("infoData", JSON.stringify(info));
    
        // Append the file (getimage should be the file you want to upload)
        const getimage = inputImg.current.files[0]; // Assuming inputImg is a ref to the file input
        if (getimage) {
            formData.append("image", getimage);
        } else {
            console.error("No image selected.");
        }
    
        console.log("FormData:", formData);
    
        // Send the request
        try {
            const data = await fetchFunction("POST", "/collage/collageRigster", formData);
            console.log("Response:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    

    
   return (
    <>
     <input type='file' ref={inputImg} onChange={inputImg}>
        
     </input>
     <button onClick={onsend}>send</button>
    </>
   )
 }
 