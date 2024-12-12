import React from 'react'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import {ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  




function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={5000} theme="colored"

/>
    <Header/>
   
   <Routes>
   <Route element={<Landing/>} path={'/'}/>
   <Route element={<Home/>} path={'/home'}/>
   <Route element={<History/>} path={'/history'}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App