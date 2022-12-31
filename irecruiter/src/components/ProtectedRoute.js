import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
    const { user } = UserAuth()

    ////IF no user redirect to login page
    if (!user) {
        return <Navigate to="/login"/>
    }
  return (
    children
  )
}

export default ProtectedRoute