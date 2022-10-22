import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
  </Routes>
  )
}
