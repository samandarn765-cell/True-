import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png' // Logo rasmini src/assets/logo.png ga qo'ying

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="TRUE FITNESS" />
            </div>
            <p>TRUE FITNESS — ведущий мировой производитель премиального фитнес-оборудования из США.</p>
            <div className="footer-social">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Навигация</h4>
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/brand">О Бренде</Link></li>
              <li><Link to="/prem">Преимущества</Link></li>
              <li><Link to="/poduct">Продукция</Link></li>
              <li><Link to="/club">Открыть клуб</Link></li>
              <li><Link to="/contact">Контакты</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Контакты</h4>
            <ul>
              <li>📍 Ташкент, Технопарк, ул. Мирзо Улугбека 27</li>
              <li>📞 +998 (71) 234-56-78</li>
              <li>✉ info@truefitness.uz</li>
              <li>🕐 Пн–Пт: 9:00–18:00</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Подписка</h4>
            <p>Получайте новости и специальные предложения</p>
            <div className="footer-form">
              <input type="email" placeholder="Ваш email" />
              <button className="btn-blue">→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2024 TRUE Fitness. Все права защищены.</span>
          <span>Разработано в Ташкенте</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
