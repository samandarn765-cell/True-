import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png' // Logo rasmini src/assets/logo.png ga qo'ying
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
     
    <header className="header">


      <hr className='hr w-[30px] h-0.5 bg-gray-300' />
      <div className="header-main">
        <div className="container header-main-inner">
         <div className=' items-center justify-center bg-white W-full h-[80px] '>
            <img src={logo} alt="" />
          </div>

          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Главная</NavLink>
            <NavLink to="/brand" onClick={() => setMenuOpen(false)}>О Бренде</NavLink>
            <NavLink to="/prem" onClick={() => setMenuOpen(false)}>Преимущества</NavLink>
            <NavLink to="/poduct" onClick={() => setMenuOpen(false)}>Продукция</NavLink>
            <NavLink to="/club" onClick={() => setMenuOpen(false)}>Открыть клуб</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Контакты</NavLink>
          </nav>

          <Link to="/contact" className="btn-blue header-btn">Связаться</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
