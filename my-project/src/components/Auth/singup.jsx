import React, { useState } from "react";
import { Input, Button } from "../index";
import { useForm } from "react-hook-form";
import Errors from "../../utils/error/DevError";
import Come from "../../utils/error/error";

import { fetchFunction } from "../../utils/fetch";
import { Navigate } from "react-router-dom";
import { DataStorege } from "./../../store/ComponentStore";
import { Loading } from "../index";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const onSubmit = async (data, event) => {
    console.log("ClickEvent: ", event);
    try {
      event.preventDefault();

      const fullname = data.Full_Name;
      const usename = fullname.split(" ")[0];
      const password = data.password;
      const email = data.email;

      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("fullname", fullname);
      formData.append("usename", usename);

      setLoading(true);
      const user = await fetchFunction("POST", "/users/regidter", formData);
      console.log(user);
      if (user.success) {
        setRedirect(true);
        DataStorege(usename, true, true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorState(true);
      setError(error.message);
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="">
      <Come title={"suman"} about={"isha is them  love i love you isha"}/>
      {loading && <span>Loading.....</span>}
      <form
        className="space-y-4"
        onSubmit={handleSubmit((data, event) => onSubmit(data, event))}
      >
        <Input
          placeholder="Enter Your Name"
          className="bg-deep-purple placeholder-white border-white"
          // "w-full px-4 py-2 text-white placeholder-white bg-purple-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-all"
          {...register("Full_Name", {
            validate: {
              matchPattern: (value) =>
                /^[A-Za-z]+ [A-Za-z]+$/.test(value) ||
                "Full name must be a valid name like this -> John Doe",
            },
          })}
        />

        <Input
          placeholder="Enter Your Email"
          className="bg-deep-purple placeholder-white border-white"
          {...register("email", {
            required: "Email is required",
            validate: {
              matchPattern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />

        <Input
          placeholder="Enter Your Password"
          className="bg-deep-purple placeholder-white border-white"
          {...register("password", {
            required: "Password is required",
          })}
        />
        <div className="align justify-center text-center">
          
          <button
            type="submit"
            className={`w-[50%] md:w-[100%] py-2 rounded-3xl sm:rounded-lg text-black bg-white sm:border-none  shadow-md hover:bg-slate-100 transition-all`}
          >
            
            {loading ? (
              <span>Loading.....</span>
            ) : (
              <span className="">Signup</span>
            )}

          </button>

        </div>
      
      </form>
      {loading && <Loading />}
      {errors.Full_Name && <Errors>{errors.Full_Name.message}</Errors>}
      {errors.email && <Errors>{errors.email.message}</Errors>}
      {errors.password && <Errors>{errors.password.message}</Errors>}
      {errorState && <Errors>{error}</Errors>}
    </div>

  );
}