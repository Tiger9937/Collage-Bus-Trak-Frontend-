import React, { useEffect, useRef, useState } from 'react'
 import {GetDataWithFile , GetparamsData} from '../../../../utils/Privet.fetch'

export default function projectuploadform() {
   const imgfile = useRef()
    const [isloading,setisloading] = useState(false)

    const UploadProject = async()=>{
        let newform = new FormData()
        const information = {
            title: 'save natcher',
            owner: "6755eb5167a34c866d061c69",
            category: 'environmental conservation',
            status: 'Ongoing',
            technologiesUsed: ['JavaScript', 'Node.js', 'React'],
            startDate: '2023-01-01',
            readme: 'This project aims to protect and conserve nature through awareness and technology.',
            endDate: null,
            teamMembers: ['6755eb5167a34c866d061c69', '6755eb5167a34c866d061c69', '67206167cedd0af1c8bac81f'],
            totalmember: 10,
            goal: 'To plant 10,000 trees by 2024 and raise awareness.',
            type: "natcher",
            outcome: 'Increased green cover and community engagement.',
            budget: '$50,000',
            socialLinksid: '67700265f21fdbab54d4704c'
        };
        newform.append("thumbnail",imgfile.current?.files[0])
        newform.append("information",JSON.stringify(information))

        setisloading(true)
        console.log(newform)
        let Data = await GetDataWithFile("POST","/Project/addProject",newform,'none')
        if (Data) {
            console.log(Data)
        }
        setisloading(false)
    }

    const ProjectDelete = async()=>{
      setisloading(true)
      const Data = await GetparamsData('GET','/Project/removedProject','6798e25f5fb8d5a3791b18a6')
      setisloading(false)
      console.log(Data)
    }

    const UpdateProject = async () => {
      let newform = new FormData();
  
    const information = {
        projectID:'6798ee81a1e1f80e9863ab36',
        title: 'save natcher With tech',
        owner: "6755eb5167a34c866d061c69",
        category: 'environmental conservation',
        status: 'Ongoing',
        technologiesUsed: ['JavaScript', 'Node.js', 'React'],
        startDate: '2023-01-01',
        readme: 'This project aims to protect and conserve nature through awareness and technology.',
        endDate: null,
        teamMembers: ['6755eb5167a34c866d061c69', '6755eb5167a34c866d061c69', '67206167cedd0af1c8bac81f'],
        totalmember: 10,
        goal: 'To plant 10,000 trees by 2024 and raise awareness.',
        type: "natcher",
        outcome: 'Increased green cover and community engagement.',
        budget: '$50,000',
        socialLinksid: '67700265f21fdbab54d4704c'
    };
      
  
      let Data = await GetDataWithFile("PATCH", "/Project/updateProject", JSON.stringify(information) , "application/json");
      console.log(Data);

  };
  

    let GETSocialData = async()=>{
        let data={
            Student_OR_College_Id:"6755eb5167a34c866d061c69",
            SocialLinks:["https://unsplash.com/photos/a-book-laying-on-top-of-a-white-bed-gNm24a1CfwU"],
            Appimage:["https://unsplash.com/photos/a-person-laying-on-a-bed-with-a-book-and-a-cup-of-coffee-0_EHZBktRY4"]
        }
        const socialData = await GetDataWithFile("POST","/midia/CreateMidia",data)
        console.log(socialData)
    }
    
  return (
    <div>
      <button onClick={UploadProject} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Upload</button>
      <input ref={imgfile} type="file" />
      <button onClick={GETSocialData} type="button" class="text-white bg-gradient-to-r from-orange-400 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">get social Data</button>
      <button onClick={ProjectDelete} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Delete Project</button>
      <button onClick={UpdateProject} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">UpdateProject</button>
      {isloading && <p>Loading....</p>}

    </div>
  )
}
