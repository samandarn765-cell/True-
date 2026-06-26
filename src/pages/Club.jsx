import React, { useState } from 'react'
import AlertModal from '../components/AlertModal'
import zalImg from '../assets/ZAL.png'

const Club = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '', area: '',
    budget: '', experience: '', message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setFormData({ name: '', phone: '', email: '', city: '', area: '', budget: '', experience: '', message: '' })
  }

  return (
    <div className="club-page">
      {showAlert && (
        <AlertModal
          message="Аризангиз муваффақиятли юборилди! Бизнинг менежер 1 иш куни ичида сиз билан боғланади."
          onClose={() => setShowAlert(false)}
        />
      )}

      {/* HERO */}
      <section className="club-hero">
        <div className="container">
          <h1>ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE</h1>
          <p>Станьте партнёром ведущего мирового производителя фитнес-оборудования</p>
        </div>
      </section>

      {/* GYM LAYOUT */}
      <section className="club-layout">
        <div className="container club-layout-grid">
          <div className="layout-img">
            <img src={zalImg} alt="3D План зала TRUE Fitness" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
          <div className="layout-text">
            <h2>ПРОФЕССИОНАЛЬНОЕ ОСНАЩЕНИЕ ВАШЕГО ЗАЛА</h2>
            <p>Мы предлагаем полное решение для оснащения вашего фитнес-клуба профессиональным оборудованием TRUE Fitness. Наши специалисты разработают оптимальную планировку зала и подберут оборудование в соответствии с вашими требованиями.</p>
            <ul className="club-features">
              <li>✓ Бесплатный дизайн-проект зала</li>
              <li>✓ Подбор оборудования под бюджет</li>
              <li>✓ Профессиональный монтаж и наладка</li>
              <li>✓ Обучение персонала</li>
              <li>✓ Гарантийное обслуживание</li>
              <li>✓ Рекламная поддержка</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="club-form-section">
        <div className="container">
          <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
          <p className="form-subtitle">Заполните форму и наш специалист свяжется с вами в течение 1 рабочего дня</p>
          <form className="club-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Имя и Фамилия *</label>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Иван Иванов" required />
              </div>
              <div className="form-group">
                <label>Номер телефона *</label>
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+998 90 123 45 67" required />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
              </div>
              <div className="form-group">
                <label>Город *</label>
                <input name="city" value={formData.city} onChange={handleChange} placeholder="Ташкент" required />
              </div>
              <div className="form-group">
                <label>Площадь помещения (м²)</label>
                <input name="area" value={formData.area} onChange={handleChange} placeholder="500" />
              </div>
              <div className="form-group">
                <label>Предполагаемый бюджет</label>
                <select name="budget" value={formData.budget} onChange={handleChange}>
                  <option value="">Выберите диапазон</option>
                  <option value="до $50,000">до $50,000</option>
                  <option value="$50,000 — $100,000">$50,000 — $100,000</option>
                  <option value="$100,000 — $250,000">$100,000 — $250,000</option>
                  <option value="более $250,000">более $250,000</option>
                </select>
              </div>
              <div className="form-group">
                <label>Опыт в фитнес-бизнесе</label>
                <select name="experience" value={formData.experience} onChange={handleChange}>
                  <option value="">Выберите</option>
                  <option value="Нет опыта">Нет опыта</option>
                  <option value="До 1 года">До 1 года</option>
                  <option value="1-3 года">1-3 года</option>
                  <option value="Более 3 лет">Более 3 лет</option>
                </select>
              </div>
              <div className="form-group">
                <label>Стандартный срок начала бизнеса</label>
                <select>
                  <option>В течение 3 месяцев</option>
                  <option>3-6 месяцев</option>
                  <option>6-12 месяцев</option>
                  <option>Более года</option>
                </select>
              </div>
            </div>
            <div className="form-group full">
              <label>Дополнительная информация</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Расскажите о вашем проекте..." rows="4"></textarea>
            </div>
            <button type="submit" className="btn-blue form-submit">Отправить заявку</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Club
