import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from "./pages/Dashboard"
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard />} />




    </Routes>
    
    
    </>
    
  )
}

export default App
