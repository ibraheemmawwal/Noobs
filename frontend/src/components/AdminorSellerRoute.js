import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminorSellerRoute = ({ children }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return userInfo && (userInfo.isAdmin || userInfo.isSeller) ? (
    children
  ) : (
    <Navigate to="/signin" />
  );
};

export default AdminorSellerRoute;
