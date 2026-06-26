import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="header-contacts">
            <span>📞 +998 (71) 234-56-78</span>
            <span>✉ info@truefitness.uz</span>
          </div>
          <div className="header-social">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">YT</a>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-main-inner">
          <Link to="/" className="logo">
            {/* Logo rasmini src/assets/logo.png ga qo'ying */}
            <div className="logo-placeholder">
              <span className="logo-arrow">▲</span>
              <span className="logo-text">TRUE</span>
            </div>
          </Link>

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
