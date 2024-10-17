import React, { useState } from 'react';
import { Input, Button } from '../index';
import { useForm } from "react-hook-form";
import Errors from '../../utils/error/DevError';
import { fetchFunction } from '../../utils/fetch';
import { Navigate } from 'react-router-dom';
import { DataStorege } from './../../store/ComponentStore';
import { Loading } from '../index';

export default function Signup() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [error, setError] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  

  const onSubmit = async (data) => {
    try {
      const fullname = data.Full_Name;
      const usename = fullname.split(' ')[0];
      const password = data.password;
      const email = data.email;

      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('fullname', fullname);
      formData.append('usename', usename);
      
      setLoading(true);
      const user = await fetchFunction('POST', '/users/regidter', formData);
      console.log(user)
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
  }

  if (redirect) {
    return <Navigate to='/login' />;
  }

  return (
    <div>
      {loading && <span>Loading.....</span>}
      <form className='-m-2 space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Enter Your Name"
          className="bg-deep-purple placeholder-white border-white
          
          "
          {...register("Full_Name", {
            validate: {
              matchPattern: (value) => /^[A-Za-z]+ [A-Za-z]+$/.test(value) || "Full name must be a valid name like this -> John Doe"
            }
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
          className="bg-deep-purple border-white placeholder-white"
          {...register("password", {
            required: "Password is required"
          })}
        />
  
        <Button
          type='submit'
          className={`sm:w-full w-40 ml-16 sm:ml-0 p-3 hover:bg-slate-50 bg-white text-black rounded-3xl sm:rounded-lg shadow-lg mt-4 ${loading ? 'animate-wind-flow' : ''}`} // Apply animation class conditionally
        >
          {loading ? <span>Loading.....</span> : <span>Singup</span>}
        </Button>
      </form>
      {
        loading && <Loading/>
      }
 
          
      {errors.Full_Name && <Errors>{errors.Full_Name.message}</Errors>}
      {errors.email && <Errors>{errors.email.message}</Errors>}
      {errors.password && <Errors>{errors.password.message}</Errors>}
      {errorState && <Errors>{error}</Errors>}
      
    </div>
  );
}

// style={{
//   position: "absolute",
//   top: "274px",
//   right: "0px",
//   left: "300px"
// }}