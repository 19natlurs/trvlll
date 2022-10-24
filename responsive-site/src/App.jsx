import { useState, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import Home from "./Components/pages/Home"
import Services from './Components/pages/Services'
import Navbar from './Components/Navbar'
import Products from './Components/pages/Products'
import Signup from './Components/pages/Signup'
import Footer from './Components/Footer'

function App() {


  return (
    <Fragment>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </Fragment>
  )
}

export default App
