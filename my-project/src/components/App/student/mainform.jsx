import React, { useEffect, useRef, useState } from "react";
import { Input, Button } from "../../index";
import { useForm } from "react-hook-form";
import { NodeElement_TO_Array } from "../../../utils/node_Converter";
import { GetRawData } from "../../../utils/fetch";
import { useCookies } from "react-cookie";

// BUG::when user click the address same than this well not pass data in home address

//    import {MultiREF} from '../../../utils/ref'
//    TODO:: When user prase enter than going to next fild if all fild is fill than go the gigster button
//    TDDO:: applay loding animation inall over the page with alate
//    TODO:: Fix the BUG That Apiar in React form
//    TODO:: Writing the logic in backend for collage rigstion

export default function mainform({ CollageID }) {
  const [addressSame, setAddressSame] = useState(false);
  const [DataClone, setDateClon] = useState({});
  const [Home_DataClone, setHome_DateClon] = useState({});
  const [previusVal, setpreviusVal] = useState([{ Name: "", target: "" }]);
  const [IsLoding, setIsLoading] = useState(false);
  const original_inputRef = useRef(null);
  const clone_inputRef = useRef(null);
  const [GetCokkie, setCokkie] = useCookies(["AuthName", "Authorization"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(!IsLoding);

    console.log(IsLoding);

    console.log(data);

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

    const AGE = calculateAge(data?.DOB);
    console.log("AGE->", AGE);

    const Student_Registration_Required_Data = {
      mobileNumber: data?.Mobile_Number,
      Collage: CollageID,
      course: data?.course,
      RollNumber: data?.RollNumber,
      enrolmentDate: data?.Enrollment_Date,
      DOB: data?.DOB,
      age: AGE,
      Gender: data?.Gender,
      Address: {
        countrie: data?.selectCountry,
        state: data?.selectState,
        // TODO:: Separate this atpost
        District: data?.atpo,
        at: data?.atpo,
        po: data?.atpo,
        // TODO:: Handle if village filsd is not comming
        Village: data?.Village_Area,
        city: data?.City,
        pincode: data?.Pin_code,
        Nearer_Landmark: data?.Nearest_Landmark,
      },
      Living_address: {
        countrie: data?.Home_selectCountry,
        state: data?.Home_selectState,
        // TODO:: Separate this atpost
        District: data?.Home_atpo,
        at: data?.Home_atpo,
        po: data?.Home_atpo,
        // TODO:: Handle if village filsd is not comming
        Village: data?.Home_Village_Area,
        city: data?.Home_City,
        pincode: data?.Home_Pin_code,
        Nearer_Landmark: data?.Home_Nearest_Landmark,
      },
    };

    console.log(data);
    const rigster = await GetRawData(
      "POST",
      "/student/studentRigster",
      Student_Registration_Required_Data,
      GetCokkie.Authorization
    );
    console.log(rigster);
    setIsLoading(false);

    // TODO:: pass that data in Student Profile
  };

  const isAddressSame = () => {
    const original = {};

    original_inputRef.current.querySelectorAll("input").forEach((inputs) => {
      original[inputs.getAttribute("_id")] = inputs.value;
    });

    original_inputRef.current.querySelectorAll("select").forEach((inputs) => {
      original[inputs.getAttribute("_id")] = inputs.value;
    });

    console.log(original);

    clone_inputRef.current.querySelectorAll("input").forEach((inputs) => {
      Object.entries(original).forEach(([key, value]) => {
        if (inputs.getAttribute("_id") == key) {
          inputs.value = value;
          setValue(inputs.name, value);
        }
      });
    });

    clone_inputRef.current.querySelectorAll("select").forEach((inputs) => {
      Object.entries(original).forEach(([key, value]) => {
        if (inputs.getAttribute("_id") == key) {
          inputs.value = value;
          setValue(inputs.name, value);
        }
      });
    });
  };
  // asing the privius  when the user is un teke the chake box

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* stdent info */}
        <div className=" flex justify-center gap-3">
          <div className=" h-full p-4 ">
            <div className=" flex gap-3 max-w-4xl flex-wrap sm:flex-nowrap">
              <Input
                {...register("Mobile_Number", {
                  required: "Mobile Number is required",
                  val_idate: {
                    matchPattern: () =>
                      /^\+?[1-9]\d{1,14}$/.test() || "Inval_id mobile number",
                  },
                })}
                LacleClass="font-Assistant text-BLACK font-bold text-md"
                label="Moble Number :"
                className="bg-Nut-PUR focus:text-black  border-white peer text-white placeholder-slate-200  focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
              />
              <Input
                {...register("course")}
                LacleClass="font-Assistant text-BLACK font-bold text-md"
                label="Course  :"
                className="bg-Nut-PUR  border-white peer placeholder-slate-200 focus:text-black text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
              />
               <Input
                {...register("RollNumber", {
                  required: "Enrollment Date is required",
                })}
                LacleClass="font-Assistant text-BLACK font-bold text-md"
                label="RollNumber  :"
                className="bg-Nut-PUR focus:text-black  border-white peer text-white placeholder-slate-200  focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
              />

              {/* <Input  
                              LacleClass = "font-Assistant text-BLACK font-bold text-md"
                              label = "Gender  :"
                              className="bg-Nut-PUR  border-white peer placeholder-slate-200 focus:text-black text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                        /> */}
            </div>

            <div className=" flex gap-4 max-w-4xl flex-wrap sm:flex-nowrap">
             
              <div className=" relative w-full">
                <label className="font-Assistant text-BLACK font-bold text-md ">
                  {" "}
                  Gender :
                </label>
                <select
                  {...register("Gender")}
                  className=" focus:text-gray-300 w-full mt-1 text-white bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl  appearance-none"
                >
                  <option className="text-base rounded-xl">select</option>
                  <option className="text-base rounded-xl">Male 👦🏻</option>
                  <option className="text-base rounded-xl">Female 👧🏻</option>
                  <option className="text-base rounded-xl">Other ⚧️</option>
                </select>
                <span className="absolute top-1/2 text-gray-300 right-3 transform -translate-y-1/2 mt-3 pointer-events-none">
                  ▼
                </span>
              </div>
              <Input
                {...register("Enrollment_Date", {
                  required: "Enrollment Date is required",
                })}
                type="date"
                LacleClass="font-Assistant text-BLACK font-bold text-md"
                label="Enrollment Date  :"
                className="bg-Nut-PUR focus:text-black  border-white peer text-white placeholder-slate-200  focus:outline-none focus:ring-2 focus:ring-black focus:border-black  border rounded"
              />
              <Input
                {...register("DOB", {
                  required: "Date Of Birth  is required",
                })}
                type="date"
                LacleClass="font-Assistant text-BLACK font-bold text-md"
                label="D-O-B  :"
                className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-white focus:text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black  border rounded"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="  gap-8 p-3 flex flex-wrap justify-center w-full">
          {/* Current Address Section */}
          <div ref={original_inputRef} className="w-full sm:w-[45%]">
            <span className=" flex justify-center mb-2  ">
              <div className="text-lg flex justify-center font-bold w-44 text-BLACK bg-DIP-yellow font-Assistant rounded-3xl mb-4">
                <span className="pl-3 text-lg -mt-[1px] mr-2 ">
                  Current Address{" "}
                </span>
                <img src="public\svg\Home Address.svg" alt="" />
              </div>
            </span>

            <div className="space-y-4 ">
              <div className="flex gap-4 ">
                <div className="relative w-full sm:w-1/2 flex flex-col">
                  <select
                    _id="select:-1"
                    {...register("selectCountry")}
                    className=" focus:text-black w-full text-white bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl  appearance-none"
                  >
                    <option className="text-base rounded-xl">India</option>
                    <option className="text-base  rounded-xl">Albania</option>
                    <option className="text-base  rounded-xl">Algeria</option>
                    <option className="text-base rounded-xl">Jordan</option>
                    <option className="text-base  rounded-xl">Odisha</option>
                  </select>
                  <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">
                    ▼
                  </span>
                </div>

                <div className="relative w-full sm:w-1/2">
                  <select
                    _id="select:-2"
                    {...register("selectState")}
                    className=" focus:text-black w-full bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl text-white appearance-none"
                  >
                    <option className="text-base rounded-xl">India</option>
                    <option className="text-base rounded-xl">India</option>
                    <option className="text-base rounded-xl">Albania</option>
                    <option className="text-base  rounded-xl">Algeria</option>
                    <option className="text-base rounded-xl">Jordan</option>
                    <option className="text-base  rounded-xl">Odisha</option>
                  </select>
                  <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>

              <Input
                _id="input:-1"
                {...register("atpo")}
                placeholder="AT/PO"
                className=" focus:text-black bg-Nut-PUR  border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
              />

              <Input
                x="102"
                _id="input:-2"
                {...register("Village_Area")}
                type="text"
                placeholder="Village / Area"
                className="bg-Nut-PUR focus:text-black  border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
              />
              <div className="flex gap-4">
                <Input
                  _id="input:-3"
                  {...register("City")}
                  type="text"
                  placeholder="City"
                  className="bg-Nut-PUR focus:text-black border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                />
                <Input
                  _id="input:-4"
                  {...register("Pin_code")}
                  type="text"
                  placeholder="Pin code"
                  className="bg-Nut-PUR focus:text-black border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                />
              </div>
              <Input
                _id="input:-5"
                {...register("Nearest_Landmark")}
                type="text"
                placeholder="Nearest Landmark"
                className="bg-Nut-PUR focus:text-black border-white peer placeholder-slate-200 text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
              />
                {/* same AddressChaker */}
              <div className="h-full w-32 justify-start ml-2 ">
                <label
                  onClick={isAddressSame}
                  className="flex  text-gray-600 cursor-pointer mt-2 "
                >
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
            </div>
          </div>
          
          {/* Home Address Section */}
          <form ref={clone_inputRef}  className="w-full sm:w-[45%]">
            <span className=" flex justify-center mb-2">
              <div className="text-lg flex justify-center font-bold w-44 text-BLACK bg-DIP-yellow font-Assistant rounded-3xl mb-4">
                <span className="pl-4 text-lg -mt-[1px] mr-2 ">
                  Home Address{" "}
                </span>
                <img src="public\svg\Home Address.svg" alt="" />
              </div>
            </span>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="relative w-full sm:w-1/2">
                  <select
                    _id="select:-1"
                    {...register("Home_selectCountry")}
                    className="w-full bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl text-white appearance-none"
                  >
                    <option className="text-base rounded-xl">India</option>
                    <option className="text-base  rounded-xl">Albania</option>
                    <option className="text-base  rounded-xl">Algeria</option>
                    <option className="text-base rounded-xl">Jordan</option>
                    <option className="text-base  rounded-xl">Odisha</option>
                  </select>
                  <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">
                    ▼
                  </span>
                </div>

                <div className="relative w-full sm:w-1/2">
                  <select
                    _id="select:-2"
                    {...register("Home_selectState")}
                    className="w-full bg-Nut-PUR p-2 text-center font-bold text-xl font-Assistant rounded-xl text-white appearance-none"
                  >
                    <option className="text-base rounded-xl">India</option>
                    <option className="text-base rounded-xl">India</option>
                    <option className="text-base rounded-xl">Albania</option>
                    <option className="text-base  rounded-xl">Algeria</option>
                    <option className="text-base rounded-xl">Jordan</option>
                    <option className="text-base  rounded-xl">Odisha</option>
                  </select>
                  <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>

              <Input
                {...register("Home_atpo")}
                _id="input:-1"
                placeholder="AT/PO"
                className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
              />

              <Input
                _id="input:-2"
                {...register("Home_Village_Area")}
                type="text"
                placeholder="Village / Area"
                className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
              />
              <div className="flex gap-4">
                <Input
                  _id="input:-3"
                  {...register("Home_City")}
                  type="text"
                  placeholder="City"
                  className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                />
                <Input
                  _id="input:-4"
                  {...register("Home_Pin_code")}
                  type="text"
                  placeholder="Pin code"
                  className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
                />
              </div>
              <Input
                _id="input:-5"
                {...register("Home_Nearest_Landmark")}
                type="text"
                placeholder="Nearest Landmark"
                className="bg-Nut-PUR  border-white peer placeholder-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black p-2 border rounded"
              />
              
            </div>  
          </form>
          
        </div>

      

        {/* Rigster */}

        <div className="w-full mt-10 ">
          <div className="flex justify-center -mt-5">
            <div className="">
              <button
                type="submit"
                className="w-52 text-lg font-bold h-[3rem] -mt-10 p-3 hover:bg-Hover-yellow bg-golden-yellow text-BLACK rounded-lg shadow-lg "
              >
                {IsLoding ? "Loading...." : "Register"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}