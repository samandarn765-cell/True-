import React, { useState } from 'react'
import AlertModal from '../components/AlertModal'
import './Contact.css'

// Carousel uchun showroom rasimlar (o'zingiz src/assets/ ga rasm qo'shib almashtiring)
const showroomImages = [
  { label: '🏋️ Showroom — Вход', bg: '#1a1a1a' },
  { label: '🚴 Showroom — Кардио зона', bg: '#00AEEF' },
  { label: '💪 Showroom — Силовая зона', bg: '#2a2a2a' },
  { label: '🏃 Showroom — Беговые дорожки', bg: '#0077B6' },
  { label: '⭐ Showroom — VIP зал', bg: '#333' },
]

const Contact = () => {
  const [current, setCurrent] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })

  const prev = () => setCurrent(c => (c === 0 ? showroomImages.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === showroomImages.length - 1 ? 0 : c + 1))

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setFormData({ name: '', phone: '', message: '' })
  }

  return (
    <div className="contact-page">
      {showAlert && (
        <AlertModal
          message="Хабарингиз қабул қилинди! Биз 1 иш куни ичида сиз билан боғланамиз."
          onClose={() => setShowAlert(false)}
        />
      )}

      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <h1>ШОУ-РУМ TRUE В ТАШКЕНТЕ</h1>
          <p>Посетите наш шоу-рум и лично оцените качество оборудования TRUE Fitness</p>
        </div>
      </section>

      {/* SHOWROOM CAROUSEL */}
      <section className="showroom-section">
        <div className="container">
          <div className="carousel">
            <button className="carousel-btn prev" onClick={prev}>‹</button>
            <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
              {showroomImages.map((img, i) => (
                <div key={i} className="carousel-slide">
                  <div
                    className="showroom-slide"
                    style={{ background: img.bg }}
                  >
                    <span>{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next" onClick={next}>›</button>
          </div>
          <div className="carousel-dots">
            {showroomImages.map((_, i) => (
              <span key={i} className={i === current ? 'active' : ''} onClick={() => setCurrent(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* MAP + INFO */}
      <section className="contact-info">
        <div className="container contact-info-grid">
          {/* MAP */}
          <div className="map-block">
            <h2>КАК НАС НАЙТИ</h2>
            <div className="map-container">
              <iframe
                title="TRUE Fitness Tashkent"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0!2d69.2797!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTYnNDYuOSJF!5e0!3m2!1sru!2suz!4v1700000000000!5m2!1sru!2suz"
                width="100%"
                height="350"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* CONTACT DETAILS + FORM */}
          <div className="contact-details">
            <div className="info-block">
              <h3>ИНФОРМАЦИОННЫЙ ЦЕНТР-ПРЕДСТАВИТЕЛЬ В ТАШКЕНТЕ — ТЕХНОПАРК</h3>
              <ul className="contact-list">
                <li>
                  <span className="info-icon">📞</span>
                  <div>
                    <strong>Телефон</strong>
                    <a href="tel:+998712345678">+998 (71) 234-56-78</a>
                  </div>
                </li>
                <li>
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>Адрес</strong>
                    <span>г. Ташкент, Технопарк, ул. Мирзо Улугбека 27</span>
                  </div>
                </li>
                <li>
                  <span className="info-icon">🕐</span>
                  <div>
                    <strong>Часы работы</strong>
                    <span>Пн–Пт: 9:00–18:00 | Сб: 10:00–15:00</span>
                  </div>
                </li>
                <li>
                  <span className="info-icon">✉</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@truefitness.uz">info@truefitness.uz</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* QUICK FORM */}
            <div className="quick-form-block">
              <h3>НАПИСАТЬ НАМ</h3>
              <form className="quick-form" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  required
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Номер телефона"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ваш вопрос или сообщение"
                  rows="3"
                ></textarea>
                <button type="submit" className="btn-blue">Отправить сообщение</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
