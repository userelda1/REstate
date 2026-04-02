import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Testimonails from "./components/Testimonails"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Aboutmore from "./components/Aboutmore"
import ServiceDetails from "./components/ServiceDetails"
import Signup from "./components/Signup"
import Properties from "./components/Properties"
import PropertyDetails from "./components/PropertyDetails"

import { ToastContainer } from "react-toastify"
import { Routes, Route } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Services/>
      <Properties/>
      <Projects/>
      <Testimonails/>
      <Contact/>
      <Footer/>
    </>
  )
}

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ToastContainer/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-more" element={<Aboutmore/>}/>
        <Route path="/service/:id" element={<ServiceDetails/>}/>
        <Route path="/properties/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
  )
}

export default App