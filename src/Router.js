import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import AddTask from './Pages/AddTask'
import Home from './Pages/Home'

export const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/addtask' element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  )
}
