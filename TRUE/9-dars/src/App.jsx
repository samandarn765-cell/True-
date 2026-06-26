import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Brand from './pages/Brand.jsx'
import Product from './pages/Product.jsx'
import Prem from './pages/Prem.jsx'
import Club from './pages/Club.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/product" element={<Product />} />
          <Route path="/prem" element={<Prem />} />
          <Route path="/club" element={<Club />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
