import React from 'react'
import { Route, Routes } from 'react-router'
import { RootLayout } from '../../components'
import { Cart, Login, Products, SingleProduct, User } from '../../pages'

export const RoutesWrapper = () => {
  const token = localStorage.getItem('token')

  if (!token) {
    return(
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    )

  }
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Products />} />
        <Route path='cart' element={<Cart />} />
        <Route path='user' element={<User/>} />
        <Route path='/:productId' element={<SingleProduct/>} />
      </Route>
    </Routes>
  )
}
