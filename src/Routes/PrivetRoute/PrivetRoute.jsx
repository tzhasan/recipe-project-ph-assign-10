import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ChefContext } from '../../Auth-Provider/ContextProvider';
import Loading from '../../SharedComponents/Loading';
import { AuthContext } from '../../Auth-Provider/AuthProvider';

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  console.log(user,loading);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;