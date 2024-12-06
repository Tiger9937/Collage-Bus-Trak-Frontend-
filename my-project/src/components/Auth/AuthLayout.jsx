import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useCookies} from 'react-cookie'


const AuthLayout = ({ children, authentication }) => {
  const [GetCokkie] = useCookies()

  // If authentication is required and the user is not logged in, redirect to login
  //TODO::Give the messaege to the user that the user is not logged in after login access the paticular page

  if (authentication && !GetCokkie.Authorization) {
    return <Navigate to="/login" />;
  }

  // If authentication is not required, render the children
  return <div>{children}</div>;
};

export default AuthLayout;
