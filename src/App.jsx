import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { RoutesWrapper } from './config/routes'
import { useNavigate } from 'react-router'

function App() {
 
  const navigate = useNavigate()
  
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
      navigate('/login')
    }
  },[])
  return (
    <>
     <RoutesWrapper/>
    </>
  )
}

export default App
