import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import { Route, Routes } from "react-router-dom"
import Recipe from './Recipe'
function Pages() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>


  )
}

export default Pages