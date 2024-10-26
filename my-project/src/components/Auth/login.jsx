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

export default function Login() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [error, setError] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  // Correct usage of useSelector to access authData
  const authData = useSelector(state => state.auth); // Accessing the first object in the authData array

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

        console.log("Login User Response: ", loginUser);

        if (loginUser.success) {
            // Access user data from the response
            const userData = loginUser.data.user; // Extract the user object

            console.log("Login User Data: ", userData); // Log the user data
            dispatch(login({ userData })); // Dispatch with the user data

            setRedirect(true); // Redirect to the homepage after successful login
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

console.log(authData)

  // Redirect to homepage if login is successful
  if (redirect) { 
    return <Navigate to='/' />;
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
