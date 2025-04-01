import React, { useEffect, useRef, useState } from 'react';
import { Scorebar } from '../../index';
import { GetDataWithFile } from '../../../utils/fetch';
import { Input, Button } from "../../index";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

export default function collegeRigsterForm() {
    // TODO::make outside clicker
    // TODO::down up event handle
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const SelectrBUTTON = useRef(null);
    const [profileImage_send, setProfileImage_send] = useState(null);
    const [coverImage_send, setCoverImage_send] = useState(null);

    const [IsLoding, setIsLoading] = useState(false);
    const [GetCokkie, setCokkie] = useCookies(["AuthName", "Authorization"]);
    const [is_notselect_Visible,setis_notselect_Visible] = useState(false)
    const [University_Search, setUniversity_Search] = useState("");
    const [Course_Search, setCourse_Search] = useState("");
    const [University_Visible, setUniversity_Visible] = useState(false);
    const [Course_Visible, setCourse_Visible] = useState(false);
    const [University_Filtered, setUniversity_Filtered] = useState([]);
    const [Course_Filtered, setCourse_Filtered] = useState([]);
    const [University_Data, setUniversity_Data] = useState([]);
    const [Course_Data, setCourse_Data] = useState([]);
    const [selected_University, setSelected_University] = useState();
    const [selectedCourses, setSelectedCourses] = useState([]); // Initialize as an array
    const [ownby , setownby] = useState(null)

    const UniversityData = [
        "Utkal University", "Berhampur University", "Sambalpur University",
        "Fakir Mohan University", "North Orissa University", "Ravenshaw University",
        "Kalahandi University", "Hallikote University"
    ];
    
    const CourseData = [
        "B.Tech", "M.Tech", "MBA", "BBA", "BCA", "MA", "BBA", "BCom", "MCom",
        "BTech", "MTech", "BPharm", "MPharm", "BEd",
        "MEd", "BDS", "MBBS", "LLB", "LLM",
        "BArch", "MArch", "DPharm", "PhD", "MPhil",
        "BFA", "MFA", "BDes", "MDes", "BHM",
        "MHM", "BSc Nursing", "MSc Nursing", "BHMS", "BAMS",
        "BPT", "MPT", "BEng", "MEng", "BBM",
        "PGDM", "Diploma", "Certificate", "BVoc", "MVoc",
        "BPEd", "MPEd", "DMLT", "BFT", "MFT",
    ];

    useEffect(() => {
        setUniversity_Data(UniversityData);
        setUniversity_Filtered(UniversityData);
    }, []);

    useEffect(() => {
        setCourse_Data(CourseData);
        setCourse_Filtered(CourseData);
    }, []);

    

    const handleUniversitySearchChange = (e) => {
        const value = e.target.value;
        setUniversity_Search(value);
        setUniversity_Filtered(University_Data.filter(university =>
            university.toLowerCase().includes(value.toLowerCase())
        ));
        if (University_Filtered.length > 0) {
          setis_notselect_Visible(true)
        }
    };

    const selecyUniversity = (university) => {
        setUniversity_Search(university);
        setSelected_University(university);
        setUniversity_Visible(false);
        setis_notselect_Visible(false);
        setUniversity_Filtered([]);
    };

    const handleCourseSearchChange = (e) => {
        const value = e.target.value;
        setCourse_Search(value);
        setCourse_Filtered(Course_Data.filter(course =>
            course.toLowerCase().includes(value.toLowerCase())
        ));
    };
    

    const handleSelectChange = (event) => {
      const value = event.target.value;
      setownby(value);
      setValue("ownBy", value); 
    };
    const selecyCourse = (course) => {
        if (!selectedCourses.includes(course)) {
            setSelectedCourses([...selectedCourses, course]); // Add course to the array
        }
        setCourse_Search(""); // Clear the search input
        setCourse_Visible(false);
        setCourse_Filtered([]);
    };

    const removeCourse = (course) => {
        setSelectedCourses(selectedCourses.filter((c) => c !== course));
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleProfileImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {

        setProfileImage_send(file)
        setProfileImage(URL.createObjectURL(file));
      }
  };
  
  const handleCoverImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
          setCoverImage(URL.createObjectURL(file));
          setCoverImage_send(file)
      }
  };
  
  const onsend = async (data) => {
      setIsLoading(true);
      
      
      const info = {
          name: data?.name,
          establishedYear: data?.establishedYear,
          phone: data?.phone,
          email: data?.email,
          ownername: data?.OwnerName,
          description: data?.description,
          affiliatedUniversityName: selected_University,
          TotalFaculty: 50,
          totalStudents: 500,
          website:"www.123.com",
          coursesOffered: selectedCourses || [], 
          BusName: ["bus1", "bus2", "bus3"],
          ownby: ownby,
          collageAddress: {
              countrie: data?.selectCountry,
              state: data?.selectState,
              District: data?.selectdistrict,
              at: data?.at,
              po: data?.po,
              Village: data?.Village_Area,
              city: data?.City,
              pincode: data?.Pin_code,
              Nearer_Landmark: data?.Nearer_Landmark,
          },
      };

      console.log()

      const Dataform = new FormData();
  
      
      if (profileImage_send) Dataform.append("profile_image", profileImage_send);
      if (coverImage_send) Dataform.append("cover_image", coverImage_send);
  
      Dataform.append("information", JSON.stringify(info));
  
      
    
      
          const getData = await GetDataWithFile("POST", "/collage/collageRigster", Dataform);
          console.log("Response from server:", getData);
      
  
      setIsLoading(false);
  };
  

    return (
        <>
        <form onSubmit={handleSubmit(onsend)} className="max-w-full mx-auto bg-gray-50 sm:p-10 p-5 rounded-lg shadow-md">
  {/* Cover and Profile Image Section */}
  <div className="relative w-full max-w-full bg-Nut-PUR rounded-2xl shadow-lg">
    {coverImage ? (
      <img src={coverImage} alt="Cover" className="w-full h-40 object-cover rounded-t-xl" />
    ) : (
      <label className="w-full h-40 flex items-center justify-center text-7xl text-white font-bold cursor-pointer">
        <div className="flex justify-center">
          <img src="public/svg/Plus_Math.svg" className="h-16 w-16" alt="" />
        </div>
        <p className="ml-2 text-4xl">Upload Cover Image</p>
        <input type="file"
              accept="image/*"
              {...register("file")}
              onChange={handleCoverImageUpload}
              className="hidden"  />
      </label>
    )}
    {/* Profile Image */}
    <div className="absolute left-4 bottom-[-50px] w-32 h-32 rounded-full overflow-hidden z-10">
      {profileImage ? (
        <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
      ) : (
        <label className="w-full h-full flex items-center justify-center text-6xl bg-Natural-yellow text-gray-600 font-bold rounded-full cursor-pointer">
          <div className="flex justify-center">
            <img src="public/svg/Plus_Math.svg" className="h-16 w-16" alt="" />
          </div>
          <input  type="file"
                accept="image/*"
                onChange={handleProfileImageUpload}
                className="hidden" />
        </label>
      )}
    </div>
  </div>
  <div className="sm:absolute absolute-none text-lg font-bold flex items-start justify-start ml-2 mt-16 mb-10 sm:mb-0">Add Profile Image</div>

  {/* Info Section */}
  <div className="grid grid-cols-1 pl-20 pr-20 sm:grid-cols-3 gap-4 sm:mt-6 mt-12 max-w-full sm:max-w-6xl justify-center mx-auto px-4">
    <div>
      <Input {...register("name", { required: "Name is required" })} LacleClass="font-Assistant text-BLACK font-bold text-md" label="College Name:" className="bg-Nut-PUR focus:text-black border-white peer text-white placeholder-slate-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />
    </div>
    <div>
      <Input {...register("email", { required: "Email is required" })} LacleClass="font-Assistant text-BLACK font-bold text-md" label="Email:" className="bg-Nut-PUR border-white peer placeholder-slate-200 focus:text-black text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />
    </div>
    <div>
      <Input {...register("phone", { required: "Phone is required" })} LacleClass="font-Assistant text-BLACK font-bold text-md" label="Phone:" className="bg-Nut-PUR border-white peer placeholder-slate-200 focus:text-black text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />
    </div>
    <div>

      <label className="font-Assistant text-BLACK font-bold text-md">Own by:</label>
      <select
  name="ownBy"
  {...register("ownBy")}
  value={ownby} // Use the state variable, not the setter function
  onChange={handleSelectChange}
  className="focus:text-gray-300 w-full mt-1 text-white bg-Nut-PUR p-2 text-center font-bold text-md font-Assistant rounded-md"
>
  <option value="">Select</option>
  <option value="Government">Government</option>
  <option value="Private">Private</option>
</select>

    </div>
    <div>
      <Input {...register("OwnerName", { required: "Owner Name is required" })} LacleClass="font-Assistant text-BLACK font-bold text-md" label="Owner Name" className="bg-Nut-PUR border-white peer placeholder-slate-200 focus:text-black text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />
    </div>
    <div>
      <Input {...register("establishedYear", { required: "Established Year is required" })} LacleClass="font-Assistant text-BLACK font-bold text-md" label="Established Year:" className="bg-Nut-PUR border-white peer placeholder-slate-200 focus:text-black text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />
    </div>
  </div>

  {/* Description Section */}
  <div className="max-w-6xl pl-20 pr-20 justify-center items-center mx-auto mt-3">
    <label className="block text-lg font-medium text-gray-800 ml-1">Description:</label>
    <textarea {...register("description", { required: "Description is required" })} name="description" placeholder="Description" className="border p-2 h-28 rounded mt-1 w-full justify-center bg-Light-Dir-purple focus:text-black focus:bg-white border-white peer text-white placeholder-slate-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
  </div>

  {/* University and Courses Section */}
<div className="max-w-6xl justify-center pl-20 pr-20 items-center mx-auto z-50">
  <div className="flex space-x-4 mb-3 z-50">
    {/* University Selection */}
    <div className="bg-DIP-yellow p-5 h-28 rounded-lg shadow-md w-1/2 mx-auto">
      <label className="block text-sm font-medium text-gray-800 mb-2 text-center">Affiliated University:</label>
      <div className="relative">
        {/* Button */}
        {!University_Visible ? (
          <button ref={SelectrBUTTON} className="flex text-xl items-center gap-2 w-full justify-between bg-Nut-PUR text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-600 transition-all" onClick={() => setUniversity_Visible(true)}>
            {selected_University ? selected_University : "Select University"}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        ) : (

          <input type="text" value={University_Search} onChange={handleUniversitySearchChange} placeholder="Search university name..." className="flex-grow w-full border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />

        )}
        {/* Search results with scrollable container */}
        {University_Search && (Course_Filtered.length > 0 || is_notselect_Visible) && (
  <ul className="mt-2 max-h-40 overflow-y-auto absolute w-full glass bg-white z-10 border border-gray-300 rounded-md">
    {University_Filtered.length > 0 ? (
      University_Filtered.map((University) => (
        <li key={University} className="text-gray-900 gap-2 p-1 hover:pl-2 hover:bg-hover-purpal rounded-md hover:text-white" onClick={() => selecyUniversity(University)}>
          {University}
        </li>
      ))
    ) : (
      is_notselect_Visible && <li className="px-3 py-2 text-gray-500">No university found</li>
    )}
  </ul>
)}
      </div>
    </div>

    {/* Course Selection */}
    <div className="bg-DIP-yellow p-5 rounded-lg shadow-md w-1/2 mx-auto">
      <label className="block text-sm font-medium text-gray-800 mb-2 text-center">Add Your Offered Courses:</label>
      <div className="relative">
        {/* Button */}
        {!Course_Visible ? (
          <button className="flex items-center text-xl gap-2 w-full justify-between bg-Nut-PUR text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-600 transition-all" onClick={() => setCourse_Visible(true)}>
            {"Search Course"}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        ) : (
          <input type="text" value={Course_Search} onChange={handleCourseSearchChange} placeholder="Search course name..." className="flex-grow w-full border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        )}
        {/* Search results with scrollable container */}
        {Course_Search && (Course_Filtered.length > 0 || is_notselect_Visible) && (
          <ul className="mt-2 max-h-40 overflow-y-auto absolute w-full glass bg-white z-10 border border-gray-300 rounded-md">
            {Course_Filtered.length > 0 ? (
              Course_Filtered.map((Course) => (
                  <li key={Course} className="text-gray-900 gap-2 p-1 hover:pl-2 hover:bg-hover-purpal rounded-md hover:text-white" onClick={() => selecyCourse(Course)}>
                    {Course}
               </li>
      ))
    ) : (
      is_notselect_Visible && <li className="px-3 py-2 text-gray-500">No university found</li>
    )}
  </ul>
)}
      </div>
    </div>
  </div>
  {/* Selected Courses */}




  <div className="flex flex-wrap gap-2 mb-2">
    {selectedCourses.map((course) => (
      <div 
  key={course} 
  className="bg-nut_purpal hover:bg-extra_dark_purple py-2 px-6 rounded-full flex items-center gap-3 shadow-md transition-all duration-300 ease-in-out"
>
  <span className="text-white font-semibold text-lg">{course}</span>
  
  <button 
    onClick={() => removeCourse(course)} 
    className="flex items-center justify-center bg-red-500 hover:bg-red-600 p-2 rounded-full transition-transform duration-200 hover:scale-110"
  >
    <img 
      src="/svg/DEL.svg" 
      className="w-5 h-5" 
      alt="Delete"
    />
  </button>
</div>

    ))}
  </div>




</div>


  {/* Address Section */}
  <span className="flex justify-center mb-2 -z-50">
    <div className="text-md flex justify-center font-bold w-auto text-BLACK bg-DIP-yellow font-Assistant rounded-3xl mb-4">
      <span className="pl-3 text-lg -mt-[1px] mr-2 py-1">Current Address</span>
      <img src="public/svg/Home Address.svg" alt="" />
    </div>
  </span>

  <div className="max-w-6xl pl-20 pr-20 justify-center items-center mx-auto space-y-4">
    <div className="flex gap-4">

      <div className="relative w-full sm:w-1/2 flex flex-col">
        <select {...register("selectCountry")} className="focus:text-black w-full text-white bg-Nut-PUR p-2 text-center font-bold text-lg font-Assistant rounded-xl appearance-none">
          <option className="text-base rounded-xl">India</option>
          <option className="text-base rounded-xl">Albania</option>
          <option className="text-base rounded-xl">Algeria</option>
          <option className="text-base rounded-xl">Jordan</option>
          <option className="text-base rounded-xl">Odisha</option>
        </select>
        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">▼</span>
      </div>

      <div className="relative w-full sm:w-1/2">
        <select {...register("selectState")} className="focus:text-black w-full bg-Nut-PUR p-2 text-center font-bold text-lg font-Assistant rounded-xl text-white appearance-none">
          <option className="text-base rounded-xl">Select State</option>
          <option className="text-base rounded-xl">Odisha</option>
          <option className="text-base rounded-xl">Maharashtra</option>
          <option className="text-base rounded-xl">Karnataka</option>
          <option className="text-base rounded-xl">Gujarat</option>
        </select>
        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">▼</span>
      </div>
      <div className="relative w-full sm:w-1/2 flex flex-col">
        <select {...register("selectdistrict")} className="focus:text-black w-full text-white bg-Nut-PUR p-2 text-center font-bold text-lg font-Assistant rounded-xl appearance-none">
        <option className="text-base rounded-xl">select district</option>
          <option className="text-base rounded-xl">khordha</option>
          <option className="text-base rounded-xl">ganjam</option>
          <option className="text-base rounded-xl">bihar</option>
          <option className="text-base rounded-xl">ajystan</option>
        </select>
        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">▼</span>
      </div>

    </div>

    {/* Address Fields */}
    <div className='flex gap-4'>
      <Input {...register("at")} placeholder="AT" className="focus:text-black bg-Nut-PUR border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />
      <Input {...register("po")} placeholder="PO" className="focus:text-black bg-Nut-PUR border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />
    </div>
      <Input {...register("Village_Area")} type="text" placeholder="Village / Area" className="bg-Nut-PUR focus:text-black border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />
    <div className="flex gap-4">
      <Input {...register("City")} type="text" placeholder="City" className="bg-Nut-PUR focus:text-black border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />
      <Input {...register("Pin_code")} type="text" placeholder="Pin code" className="bg-Nut-PUR focus:text-black border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />
    </div>
      <Input {...register("Nearer_Landmark")} type="text" placeholder="Nearer Landmark" className="bg-Nut-PUR focus:text-black border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded" />

  </div>
    {
      IsLoding && <div>Loading....</div> 
    }
  {/* Submit Button */}
  <div className="mt-4 flex justify-center">
    <button type="submit" className="px-4 py-2 bg-Nut-PUR text-white font-bold rounded-xl shadow-md hover:bg-purple-600 focus:ring-2 focus:ring-purple-500">
      Submit
    </button>
  </div>
        </form>

        {/* search user */}
        <div class="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type='email' placeholder='Search Something...' class="w-full outline-none bg-white pl-4 text-sm" />
        <button type='button'
          class="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5">Search</button>
      </div>
          
        </>
    );
}
