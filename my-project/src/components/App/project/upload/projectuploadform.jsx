import React, { useEffect, useRef, useState } from "react";
import { GetDataWithFile, GetparamsData ,GETQurey } from "../../../../utils/Privet.fetch";
import {makeSocialid} from '../../../../utils/socialMidiamaker'
import {iconsearch} from '../../../../utils/iconfinder'

export default function ProjectUploadForm() {
  const imgfile = useRef();
  const [isloading, setisloading] = useState(false);

  const [searchtech, setsearchtech] = useState("");
  const [selectedtechnologies, setselectedtechnologies] = useState([])
  const [alltech, setalltech] = useState([]);

  const [socialLink , setsociallink] = useState('')
  const [AllSocialLink , setAllSocialLink] = useState([])

  const [searchUser , setsearchUser] = useState('')
  const [selectedUser , setselectedUser] = useState([])
  const [allUser , setallUser] = useState([])

  const UploadProject = async () => {
    let newform = new FormData();

    const information = {
      title: "save natcher",
      owner: "6755eb5167a34c866d061c69",
      category: "environmental conservation",
      status: "Ongoing",
      technologiesUsed: selectedtechnologies,
      startDate: "2023-01-01",
      readme:
        "This project aims to protect and conserve nature through awareness and technology.",
      endDate: null,
      teamMembers: selectedUser,
      totalmember: 10,
      goal: "To plant 10,000 trees by 2024 and raise awareness.",
      type: "natcher",
      outcome: "Increased green cover and community engagement.",
      budget: "$50,000",
      socialLinksid: AllSocialLink,
    };
    
    newform.append("thumbnail", imgfile.current?.files[0]);
    newform.append("information", JSON.stringify(information));

    setisloading(true);

    let Data = await GetDataWithFile(
      "POST",
      "/Project/addProject",
      newform,
      "none"
    );

    console.log(Data);
    setisloading(false);

  };

  const ProjectDelete = async () => {
    setisloading(true);
    const Data = await GetparamsData(
      "GET",
      "/Project/removedProject",
      "6798e25f5fb8d5a3791b18a6"
    );
    console.log(Data);
    setisloading(false);
  };

  const UpdateProject = async () => {
    let newform = new FormData();
    const information = {
      projectID: "6798ee81a1e1f80e9863ab36",
      title: "save natcher With tech",
      owner: "6755eb5167a34c866d061c69",
      category: "environmental conservation",
      status: "Ongoing",
      technologiesUsed: ["JavaScript", "Node.js", "React"],
      startDate: "2023-01-01",
      readme:
        "This project aims to protect and conserve nature through awareness and technology.",
      endDate: null,
      teamMembers: [
        "6755eb5167a34c866d061c69",
        "6755eb5167a34c866d061c69",
        "67206167cedd0af1c8bac81f",
      ],
      totalmember: 10,
      goal: "To plant 10,000 trees by 2024 and raise awareness.",
      type: "natcher",
      outcome: "Increased green cover and community engagement.",
      budget: "$50,000",
      socialLinksid: "67700265f21fdbab54d4704c",
    };

    newform.append("information", JSON.stringify(information));

    let Data = await GetDataWithFile("PATCH","/Project/updateProject",newform,"application/json");

    console.log(Data);
  };

  const GETSocialData = async (socialLink) => {
    setsociallink('')
    let SocialID = await makeSocialid(socialLink)
    
    setAllSocialLink([...AllSocialLink, SocialID.data._id]);
  };

  const GETTechData = async () => {
    const icon = await iconsearch(searchtech)
    setalltech(icon); 
  };
  
  let make_tech_stack = async (name,domain,imgurl)=>{
    const techid = await GetDataWithFile("POST","/TechRouter/Createtech",JSON.stringify({imgurl:imgurl,domain:domain,name:name}),"application/json" )
    console.log(techid.data)
    setselectedtechnologies(prevTechs => [...prevTechs, techid.data]);
  }
  
  const SearchUSER = async ()=>{
    
    setisloading(true)
    const users = await GETQurey("GET","/users/search/c/","searchWord",`${searchUser}`)
    if(users){
      setisloading(false)
      setallUser(users.data)
    }

  }

  return (
    <>
    <div>
      <button
        onClick={UploadProject}
        className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-5 py-2.5 m-2"
      >
        Upload
      </button>
      <input ref={imgfile} type="file" />

      <div
        
        className="text-white bg-orange-400 hover:bg-orange-500 rounded-lg text-sm px-5 py-2.5 m-2"
      >
        <div className="w-full max-w-sm min-w-[200px]">
  <div className="relative">
    <input
      value={socialLink}
      onChange={(e) => setsociallink(e.target.value)}
      className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
    />
    <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
    Project repository or social media link 
    </label>
        <button onClick={()=>GETSocialData(socialLink)} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">save Link</button>
  </div>
        </div>
      </div>

      <button
        onClick={ProjectDelete}
        className="text-white bg-purple-600 hover:bg-purple-700 rounded-lg text-sm px-5 py-2.5 m-2"
      >
        Delete Project
      </button>

      <button
        onClick={UpdateProject}
        className="text-white bg-green-400 hover:bg-green-500 rounded-lg text-sm px-5 py-2.5 m-2"
      >
        Update Project
      </button>

      {/* Search Bar */}
      <form className="max-w-md mx-auto mt-4">
        <div className="relative">
          <input
            type="text"
            value={searchtech}
            onChange={(e) => setsearchtech(e.target.value)}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50"
            placeholder="Search Technology"
          />
          <button
            type="button"
            onClick={GETTechData}
            className="text-white absolute right-2 bottom-2 bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      {/* Search Result */}
      <div className="h-full w-full bg-purple-900 text-white border-2 border-amber-400 p-4">
  {alltech.map((tech, index) => (
    <div 
      key={index} 
      onClick={() => make_tech_stack(tech.name, tech.domain, tech.logo_url)} 
      className="bg-black p-2 mb-2 rounded hover:bg-slate-400 cursor-pointer"
    >
      <img src={tech.logo_url} alt="Technology" className="mb-2" />
      <span>{tech.name}</span>
    </div>
  ))}
</div>

{selectedtechnologies.map((tech, index) => (
    <div key={index} className="font-bold text-red-500">
    {tech}
  </div>
  ))}


{AllSocialLink.map((ID,index)=>(
    <div key={index} className="font-bold text-cyan-600">
    {ID}
  </div>
))
}



      {isloading && <p>Loading...</p>}
    </div>
    {/* search user */}

    
    <div class="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type='email' onChange={(e)=> setsearchUser(e.target.value)} value={searchUser} placeholder='Search user OR student name...' class="w-full outline-none bg-white pl-4 text-sm" />
        <button type='button'
          onClick={SearchUSER}
          class="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5">Search</button>
      </div>

 
  <ul class="divide-y  divide-gray-700 h-72 overflow-y-auto ">
  {allUser.map(({_id,email,fullname})=>(
      <li onClick={()=>setselectedUser([...selectedUser,_id] , console.log("seleced user ID",_id))} key={_id} class="pb-3 pt-3 sm:pb-4 bg-gray-900 justify-center  flex rounded-lg w-120 m-auto">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="shrink-0">
            <img class="w-8 h-8 rounded-full" src="https://plus.unsplash.com/premium_photo-1737051561861-880bf342698b?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Neil image"/>
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-white truncate ">
               {fullname}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               {email}
            </p>
         </div>
         
      </div>
   </li>
  ))

  }


</ul>

   

   

    </>
  );
}
