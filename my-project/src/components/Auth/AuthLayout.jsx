import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthLayout = ({ children, authentication }) => {
  const authData = useSelector((state) => state.auth);

  // If authentication is required and the user is not logged in, redirect to login
  if (authentication && !authData.status) {
    return <Navigate to="/login" />;
  }

  // If authentication is not required, render the children
  return <div>{children}</div>;
};

export default AuthLayout;
