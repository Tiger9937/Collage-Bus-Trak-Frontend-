import React, { useState } from 'react'
import { Input, Button } from '../index'
import { useForm } from "react-hook-form"
import Errors from '../../utils/error/DevError'
import { GetRawData } from '../../utils/fetch'
import { Navigate } from 'react-router-dom'
import {DataStorege} from '../../store/ComponentStore'
import { Loading } from '../index';

export default function Login() {
  const { register, handleSubmit, formState: { errors }} = useForm()
  const [error, setError] = useState('')
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false);

  const onSubmit = async (data) => {
    try {
      const UseName = DataStorege(null,true,true)
      const usename = UseName
      const email = data.email
      const password = data.password
      
      const RawData = {
          "usename": `${usename}`,
          "email":`${email}`,
          "password":`${password}`
      }

      const loginUser = await GetRawData('POST', '/users/login', RawData)
      
      if (loginUser.success) {
        setRedirect(true)
      }
      setLoading(false)
    } catch (error) {
      setErrorState(true)
      setError(error.message)
    }
  }

  if (redirect) {
    return <Navigate to='/' />
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
           {loading ? <span>Loading.....</span> :  <span>Login</span>}
        </Button>
        {
        loading && <Loading/>
      }
      </form>
      {errorState && <Errors>{error}</Errors>}
    </div>
  )
}
