import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AlertModal from '../components/AlertModal'
import bgBig from '../assets/bg_big.jpg'
import headerImg from '../assets/Header.png'
import bg1 from '../assets/bg_1.png'
import bg2 from '../assets/bg_2.png'
import bg3 from '../assets/2_bg_3.png'
import bg4 from '../assets/2_bg_4.png'
import zalImg from '../assets/ZAL.png'

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
      <section className="hero" style={{ backgroundImage: `url(${bgBig})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            <img src={headerImg} alt="TRUE Fitness" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container features-grid">
          <div className="feature-item blue">
            <h3>ВЫСОКОЕ КАЧЕСТВО И НАДЁЖНОСТЬ</h3>
          </div>
          <div className="feature-item" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={bg1} alt="Велотренажёр" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="feature-item" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={bg2} alt="Силовой тренажёр" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              { img: bg3, title: 'Консалтинг', desc: 'Профессиональная консультация по подбору оборудования' },
              { img: bg4, title: 'Поставка', desc: 'Доставка и установка оборудования по всему Узбекистану' },
              { img: bg3, title: 'Монтаж', desc: 'Профессиональный монтаж и наладка оборудования' },
              { img: bg4, title: 'Сервисное обслуживание', desc: 'Гарантийное и постгарантийное обслуживание' },
              { img: bg3, title: 'Обучение персонала', desc: 'Обучение сотрудников работе с оборудованием' },
              { img: bg4, title: 'Качество и надёжность', desc: 'Гарантия качества на всю продукцию TRUE Fitness' },
            ].map((item, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">
                  <img src={item.img} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="home-cta" style={{ backgroundImage: `url(${bgBig})` }}>
        <div className="container">
          <div className="cta-content">
            <h2>ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ ПО ТРЕНАЖЁРАМ TRUE FITNESS</h2>
            <form className="cta-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Ваше имя" required />
              <input type="tel" placeholder="Номер телефона" required />
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
            <img src={zalImg} alt="Открыть клуб" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div className="link-label">ОТКРЫТЬ КЛУБ С TRUE →</div>
          </Link>
          <Link to="/contact" className="home-link-card">
            <img src={bg1} alt="Контакты" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div className="link-label">НАШИ КОНТАКТЫ →</div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
