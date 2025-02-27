import React, { useRef, useState } from "react";
import { GetDataWithFile } from "../../../../utils/fetch";
import { AiOutlinePlus } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

export default function FacultyRigster() {
  const [showForm, setShowForm] = useState(false);
  const fileref = useRef();
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  );
  const fileInputRef = useRef();

  const [teachers, setTeachers] = useState([
    {
      name: "Manis Sir",
      age: 40,
      joinDate: "25/12/2018",
      experience: "8 years",
      qualification: "MCA",
      phone: "123456789",
      department: "BCA",
    },
    {
      name: "Progati Madam",
      age: 29,
      joinDate: "20/10/2022",
      experience: "3 years",
      qualification: "PHD",
      phone: "123456789",
      department: "BBA",
    },
  ]);

  const [newTeacher, setNewTeacher] = useState({
    name: "",
    age: "",
    joinDate: "",
    experience: "",
    qualification: "",
    phone: "",
    department: "",
  });
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher({ ...newTeacher, [name]: value });
  };

  const addTeacher = () => {
    if (newTeacher.name && newTeacher.age && newTeacher.joinDate) {
      setTeachers([...teachers, newTeacher]);
      setNewTeacher({
        name: "",
        age: "",
        joinDate: "",
        experience: "",
        qualification: "",
        phone: "",
        department: "",
      });
      setShowForm(false);
    } else {
      alert("Please fill all required fields!");
    }
  };

  const removeTeacher = (index) => {
    const updatedTeachers = teachers.filter((_, i) => i !== index);
    setTeachers(updatedTeachers);
  };

  const senddata = async () => {
    const FacultData = {
      college: "674e7b0d705e663dac6218dc",
      FacultyName: "ajuffdjhfhbvbsdjbjhvsd",
      DOB: "1987-10-12",
      age: "23",
      Gender: "male",
      // profile_image:""
      bio: "Experienced professor in computer applications.",
      socialLinks: ["inst", "fb", "wp"],
      designation: "Professor",
      department: "BCA",
      email: "sonthing@gmail.come",
      phone: 9937152281,
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
      joiningDate: "2024-12-10",
      yearofstay: 5,
    };
    const image = fileref.current?.files[0];

    const Data = new FormData();
    Data.append("collageFaculty", JSON.stringify(FacultData));
    Data.append("profile_image", image);

    const FaculitInfo = await GetDataWithFile(
      "POST",
      "/faculty/FacultyRigster",
      Data
    );

    console.log(FaculitInfo);
  };

  return (

    <>
      <div className="flex flex-col items-center gap-3 p-4">
        {/* Input Fields */}

        <div className="flex w-full max-w-4xl gap-8   ">
          <div className="flex flex-col w-full ">
            <label className="text-md font-medium text-gray-700">
              Total Students:
            </label>
            <input
              type="text"
              className="w-full h-[45px] p-2 mt-1 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-md font-medium text-gray-700">
              Total Teachers:
            </label>
            <input
              type="text"
              className="w-full p-2 mt-1 h-[45px] text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>
        <div className="w-full max-w-4xl justify-center ">
          <label className="text-md font-medium text-gray-700">
            College Website Link:
          </label>
          <input
            type="text"
            className="w-full p-2 mt-1 text-sm h-[45px] bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Add Teacher Button */}
        <button
          onClick={toggleForm}
          className="flex items-center m-auto gap-2 px-5 py-2 mt-6 mb-4 text-md font-medium text-black bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none"
        >
          <AiOutlinePlus size={30} />
          Add Teacher
        </button>
        {/* Form Section */}
        <div
          className={`w-full max-w-4xl   rounded-lg transition-all duration-500 ease-in-out overflow-hidden ${
            showForm ? "max-h-800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" grid grid-cols-1 sm:grid-cols-12 gap-1 w-full min-h-[97px] rounded p-1">
            {/* Image Section */}
            <div className="flex sm:col-span-2 sm:block m-auto  h-96 rounded-lg  flex-col items-center justify-center">
              <div
                className="w-32 h-32 border-2 border-purple-400  rounded-full flex items-center justify-center cursor-pointer"
                onClick={triggerFileInput}
              >
                <img
                  src={profileImage}
                  alt="Profile Placeholder"
                  className="w-22 h-22 rounded-full"
                />
              </div>
              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>

            {/* Form Section */}
            <div className="sm:col-span-10 col-span-9  rounded-lg p-2">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Teacher Name"
                  name="name"
                  value={newTeacher.name}
                  onChange={handleInputChange}
                  className="w-full h-[45px] p-2 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  placeholder="Age"
                  name="age"
                  value={newTeacher.age}
                  onChange={handleInputChange}
                  className="w-full h-[45px] p-2 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400"
                />
                <select className="w-full h-[45px] p-2 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Department"
                  name="department"
                  value={newTeacher.department}
                  onChange={handleInputChange}
                  className="w-full h-[45px] p-2 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  placeholder="Phone No"
                  name="phone"
                  value={newTeacher.phone}
                  onChange={handleInputChange}
                  className="w-full h-[45px] p-2 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  placeholder="Qualification"
                  name="qualification"
                  value={newTeacher.qualification}
                  onChange={handleInputChange}
                  className="w-full h-[45px] p-2 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Working Experience"
                  name="experience"
                  value={newTeacher.experience}
                  onChange={handleInputChange}
                  className="w-full h-[45px] p-2 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400"
                />
                <select className="w-full h-[45px] p-2 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400">
                  <option>Designation</option>
                  <option>Professor</option>
                  <option>Assistant Professor</option>
                  <option>Lecturer</option>
                </select>
                <input
                  type="date"
                  placeholder="Joining Date"
                  name="joinDate"
                  value={newTeacher.joinDate}
                  onChange={handleInputChange}
                  className="w-full h-[45px] p-2 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Bio Section */}
              <textarea
                placeholder="BIO"
                className="w-full h-24 p-2 text-sm bg-purple-600 rounded-md focus:outline-none text-black focus:bg-white focus:ring-2 focus:ring-purple-400 mb-4"
              ></textarea>
              <div className="items-center flex justify-end">
                <button
                  onClick={addTeacher}
                  className="px-6 py-2 bg-yellow-400 rounded-md text-black font-medium hover:bg-yellow-500"
                >
                  Done
                </button>
              </div>
            </div>
            {/* Action Button */}
          </div>
        </div>

        {/* Teacher List */}
        <div className="w-full max-w-4xl mt-4">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 mb-2 bg-purple-600  rounded-md shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple-400 flex items-center justify-center border-2 border-white">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{teacher.name} <span className="text-green-400 text-2xl">.</span > <span className="text-[8px]">Thcher of bca</span></p>
                  <p className="text-sm text-white">
                    {teacher.age} YEAR OLD | Join At: {teacher.joinDate} |{" "}
                    {teacher.experience} of Experience | Qualification:{" "}
                    {teacher.qualification} | Phone No: {teacher.phone}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeTeacher(index)}
                className="text-red-600 hover:text-red-800 "
              >
                <FaTimes size={30} />
              </button>
            </div>
          ))}
        </div>
        {/* Register Button */}
        
      </div>
      <div className="grid grid-cols-2 mb-12 sm:grid-cols-12 max-w-4xl justify-center items-center m-auto">
          <button className="px-5 py-1  text-xl col-span-2 bg-gray-500  rounded-lg text-black font-medium flex m-auto  hover:bg-yellow-500 mt-6">
             Back
          </button>

          <button className="px-6 py-2 col-span-8 bg-yellow-400 rounded-lg text-black font-medium flex m-auto ml-30 text-lg hover:bg-yellow-500 mt-4">
          Register
          </button>
        </div>
    </>

  );
}
