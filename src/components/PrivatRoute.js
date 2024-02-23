import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivatRoute = ({admin, children}) => {
  return (
    admin === true ? children :<Navigate to="/"/>
  )
}

export default PrivatRoute