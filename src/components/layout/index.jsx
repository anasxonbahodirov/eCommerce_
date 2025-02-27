import React from 'react'
import { Navbar } from '../navbar'
import { Outlet } from 'react-router'

export const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
    
  )
}
