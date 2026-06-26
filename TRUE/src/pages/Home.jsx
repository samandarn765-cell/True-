import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AlertModal from '../components/AlertModal'
import './Home.css'

const Home = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setEmail('')
  }

  return (
    <div className="home">
      {showAlert && (
        <AlertModal
          message="Сизнинг аризангиз қабул қилинди! Биз тез орада сиз билан боғланамиз."
          onClose={() => setShowAlert(false)}
        />
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>TRUE FITNESS — PREMIUM<br />ТРЕНАЖЁРЫ ИЗ США</h1>
          <p>Профессиональное фитнес-оборудование мирового класса</p>
          <div className="hero-btns">
            <Link to="/poduct" className="btn-blue">Наша продукция</Link>
            <Link to="/contact" className="btn-outline">Связаться с нами</Link>
          </div>
        </div>
      </section>

      {/* ABOUT BANNER */}
      <section className="about-banner">
        <div className="container">
          <p>TRUE — ВЕДУЩИЙ МИРОВОЙ ПРОИЗВОДИТЕЛЬ ПРЕМИАЛЬНОГО ФИТНЕС-ОБОРУДОВАНИЯ</p>
        </div>
      </section>

      {/* TRUE FITNESS CARD */}
      <section className="home-intro">
        <div className="container home-intro-grid">
          <div className="intro-text">
            <h2>TRUE<br /><span>FITNESS</span></h2>
            <p>Совершенное и надёжное оборудование для фитнес-клубов</p>
            <Link to="/poduct" className="btn-blue">КАРДИО ТРЕНАЖЁРЫ →</Link>
          </div>
          <div className="intro-img">
            <div className="img-placeholder blue-bg">
              <span>🏃 Treadmill Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container features-grid">
          <div className="feature-item blue">
            <h3>ВЫСОКОЕ КАЧЕСТВО И НАДЁЖНОСТЬ</h3>
          </div>
          <div className="feature-item">
            <div className="img-placeholder">🚴 Велотренажёр</div>
          </div>
          <div className="feature-item">
            <div className="img-placeholder">🏋️ Силовой</div>
          </div>
          <div className="feature-item dark">
            <h3>НИЗКАЯ СТОИМОСТЬ ОБСЛУЖИВАНИЯ</h3>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <h2>МЫ ПРЕДЛАГАЕМ ПОЛНЫЙ КОМПЛЕКС УСЛУГ</h2>
          <div className="services-grid">
            {[
              { icon: '🎧', title: 'Консалтинг', desc: 'Профессиональная консультация по подбору оборудования' },
              { icon: '📦', title: 'Поставка', desc: 'Доставка и установка оборудования по всему Узбекистану' },
              { icon: '🔧', title: 'Монтаж', desc: 'Профессиональный монтаж и наладка оборудования' },
              { icon: '📋', title: 'Сервисное обслуживание', desc: 'Гарантийное и постгарантийное обслуживание' },
              { icon: '🎓', title: 'Обучение персонала', desc: 'Обучение сотрудников работе с оборудованием' },
              { icon: '⭐', title: 'Качество и надёжность', desc: 'Гарантия качества на всю продукцию TRUE Fitness' },
            ].map((item, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-content">
            <h2>ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ ПО ТРЕНАЖЁРАМ TRUE FITNESS</h2>
            <form className="cta-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ваше имя"
                required
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-blue">Отправить</button>
            </form>
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="home-links">
        <div className="container home-links-grid">
          <Link to="/club" className="home-link-card">
            <div className="img-placeholder">🏢 Открыть клуб</div>
            <div className="link-label">ОТКРЫТЬ КЛУБ С TRUE →</div>
          </Link>
          <Link to="/contact" className="home-link-card">
            <div className="img-placeholder dark-bg">📍 Контакты</div>
            <div className="link-label">НАШИ КОНТАКТЫ →</div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
