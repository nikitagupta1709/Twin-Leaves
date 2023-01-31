import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from '../Pages/Details/Details'
import { Product } from '../Pages/Product/Product'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Product />}/>
      <Route path={'/products/:id'} element={<Details />}/>
    </Routes>
  )
}

export default AllRoutes
