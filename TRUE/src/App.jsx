import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Prem from './pages/Prem'
import Poduct from './pages/Poduct'
import Club from './pages/Club'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/prem" element={<Prem />} />
        <Route path="/poduct" element={<Poduct />} />
        <Route path="/club" element={<Club />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
