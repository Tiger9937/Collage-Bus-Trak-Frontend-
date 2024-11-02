import React, { useState } from 'react';
import { Input, Button } from '../index';
import { useForm } from "react-hook-form";
import Errors from '../../utils/error/DevError';
import { GetRawData } from '../../utils/fetch';
import { Navigate } from 'react-router-dom';
import { DataStorege } from '../../store/ComponentStore';
import { Loading } from '../index';
import { login } from '../../store/Slices/AuthSlise';
import { useDispatch, useSelector } from 'react-redux';
import {useCookies} from 'react-cookie'


// explor more fitcher

// IF NEED OPTIMIZATION::Access Cooki

export default function Login() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [error, setError] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [GetCokkie , setCokkie] = useCookies(['AuthName' , 'Authorization'])
  const dispatch = useDispatch();

  

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const UseName = DataStorege(null, true, true);
      const usename = UseName;
      const email = data.email;
      const password = data.password;

      const RawData = {
        usename,
        email,
        password
      };

      // Attempt to login
      const loginUser = await GetRawData('POST', '/users/login', RawData);
      
      setCokkie('Authorization' , loginUser.data.Access_Token)

      if (loginUser.success) {
        
        const userData = loginUser.data.user;

        dispatch(login({ userData })); 
        setCokkie("AuthName" , userData.usename)
        
        setRedirect(true); 
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      setErrorState(true);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (redirect) { 
    return <Navigate to='/profile' />;
  }

  return (
    <div>
      {loading && <span>Loading.....</span>}
      <form className='m-4 space-y-4' onSubmit={handleSubmit(onSubmit)}>
        
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
        {errors.email && <Errors>{errors.email.message}</Errors>}

        <Input
          placeholder="Enter Your Password"
          className="bg-deep-purple border-white placeholder-white"
          {...register("password", {
            required: "Password is required"
          })}
        />
        {errors.password && <Errors>{errors.password.message}</Errors>}

        <Button
          type='submit'
          className="w-full p-3 hover:bg-slate-50 bg-white text-black rounded-lg shadow-lg mt-4"
        >
          {loading ? <span>Loading.....</span> : <span>Login</span>}
        </Button>

        {loading && <Loading />} {/* Show loading component if loading is true */}
      </form>
      {errorState && <Errors>{error}</Errors>}
    </div>
  );
  
}
