import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = () => {
  //   let auth = { token: false };
  const token = localStorage.getItem('firebasetoken');
  console.log('token ==>>', token);
  return token ? <Outlet /> : <Navigate to='/' />;
};
export default PrivateRoute;
