import React, { useState } from 'react'
import AlertModal from '../components/AlertModal'
import './Brand.css'

const carouselImages = [
  { label: '🏃 TRUE Treadmill Pro' },
  { label: '🚴 TRUE Велотренажёр' },
  { label: '🏋️ TRUE Эллипсоид' },
  { label: '💪 TRUE Силовой тренажёр' },
]

const innovations = [
  { icon: '🏃', title: 'Беговая дорожка 900', desc: 'Профессиональная беговая дорожка TRUE 900' },
  { icon: '🚴', title: 'Велотренажёр ES 700', desc: 'Эргономичный велотренажёр для клубов' },
  { icon: '🧘', title: 'Кардио для тренировок', desc: 'Широкий ассортимент кардио оборудования' },
  { icon: '🔄', title: 'Горизонтальный велосипед', desc: 'Комфортный горизонтальный велотренажёр' },
  { icon: '⚡', title: 'Степпер TRUE', desc: 'Инновационный степпер для всех уровней' },
  { icon: '🏋️', title: 'Эллиптический тренажёр', desc: 'Эллипсоид с расширенным функционалом' },
]

const Brand = () => {
  const [current, setCurrent] = useState(0)
  const [showAlert, setShowAlert] = useState(false)

  const prev = () => setCurrent(c => (c === 0 ? carouselImages.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === carouselImages.length - 1 ? 0 : c + 1))

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    e.target.reset()
  }

  return (
    <div className="brand-page">
      {showAlert && (
        <AlertModal
          message="Сизнинг аризангиз қабул қилинди! Биз тез орада сиз билан боғланамиз."
          onClose={() => setShowAlert(false)}
        />
      )}

      {/* HERO */}
      <section className="brand-hero">
        <div className="brand-hero-overlay"></div>
        <div className="container brand-hero-content">
          <h1>TRUE — СОВЕРШЕННОЕ ФИТНЕС-ОБОРУДОВАНИЕ</h1>
        </div>
      </section>

      {/* ABOUT TEXT */}
      <section className="brand-about">
        <div className="container brand-about-grid">
          <div className="brand-about-text">
            <h2>О БРЕНДЕ TRUE FITNESS</h2>
            <p>
              TRUE Fitness — американский производитель фитнес-оборудования премиального класса, основанный в 1981 году. Компания специализируется на производстве профессиональных беговых дорожек, велотренажёров, эллипсоидов и силового оборудования.
            </p>
            <p>
              Продукция TRUE Fitness используется в ведущих фитнес-клубах по всему миру. Каждый тренажёр создаётся с применением новейших технологий и проходит строгий контроль качества.
            </p>
            <p>
              В Узбекистане TRUE Fitness представлен официальным дистрибьютором, который обеспечивает полный спектр услуг: от консультации до сервисного обслуживания.
            </p>
            <button className="btn-blue">Подробнее о компании</button>
          </div>
          <div className="brand-about-img">
            <div className="img-placeholder" style={{height: '400px', background: '#e8f4f8'}}>🏢 TRUE Fitness HQ</div>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="brand-carousel-section">
        <div className="container">
          <h2>НАШИ ИННОВАЦИИ</h2>
          <div className="carousel">
            <button className="carousel-btn prev" onClick={prev}>‹</button>
            <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
              {carouselImages.map((img, i) => (
                <div key={i} className="carousel-slide">
                  <div className="img-placeholder" style={{height: '360px', background: i % 2 === 0 ? '#00AEEF' : '#1a1a1a', color: '#fff', fontSize: '24px'}}>
                    {img.label}
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next" onClick={next}>›</button>
          </div>
          <div className="carousel-dots">
            {carouselImages.map((_, i) => (
              <span key={i} className={i === current ? 'active' : ''} onClick={() => setCurrent(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATIONS GRID */}
      <section className="innovations">
        <div className="container">
          <div className="innovations-grid">
            {innovations.map((item, i) => (
              <div className="innovation-card" key={i}>
                <div className="inno-img">
                  <div className="img-placeholder" style={{height: '180px'}}>{item.icon} {item.title}</div>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="brand-cta">
        <div className="container">
          <h2>ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ ПО ТРЕНАЖЁРАМ TRUE FITNESS</h2>
          <form className="cta-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ваше имя" required />
            <input type="tel" placeholder="Номер телефона" required />
            <input type="email" placeholder="Email" required />
            <button type="submit" className="btn-blue">Отправить</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Brand
