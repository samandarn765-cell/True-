import React, { useState } from 'react'
import AlertModal from '../components/AlertModal'
import './Prem.css'

const advantages = [
  { icon: '🏆', title: 'Премиальное качество', desc: 'Тренажёры TRUE Fitness соответствуют самым высоким стандартам качества' },
  { icon: '🔧', title: 'Долговечность', desc: 'Срок службы оборудования TRUE превышает 15 лет при правильной эксплуатации' },
  { icon: '💡', title: 'Инновации', desc: 'Передовые технологии и инновационные решения в каждом тренажёре' },
  { icon: '🌍', title: 'Мировой бренд', desc: 'TRUE Fitness используется в более чем 50 странах мира' },
  { icon: '🛡️', title: 'Гарантия', desc: 'Расширенная гарантия на все виды оборудования TRUE Fitness' },
  { icon: '📞', title: 'Поддержка 24/7', desc: 'Круглосуточная техническая поддержка и сервисное обслуживание' },
  { icon: '💰', title: 'Выгодные условия', desc: 'Гибкие условия оплаты и специальные предложения для клубов' },
  { icon: '🎯', title: 'Точность', desc: 'Высокоточные датчики и мониторинг показателей тренировки' },
  { icon: '⚙️', title: 'Низкие расходы', desc: 'Минимальные затраты на обслуживание и ремонт оборудования' },
]

const Prem = () => {
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    e.target.reset()
  }

  return (
    <div className="prem-page">
      {showAlert && (
        <AlertModal
          message="Сизнинг аризангиз қабул қилинди! Биз тез орада сиз билан боғланамиз."
          onClose={() => setShowAlert(false)}
        />
      )}

      {/* HERO */}
      <section className="prem-hero">
        <div className="container">
          <h1>ПРЕИМУЩЕСТВА TRUE FITNESS</h1>
          <p>Почему ведущие фитнес-клубы мира выбирают TRUE</p>
        </div>
      </section>

      {/* ADVANTAGES GRID */}
      <section className="advantages">
        <div className="container">
          <div className="advantages-grid">
            {advantages.map((item, i) => (
              <div className="advantage-card" key={i}>
                <div className="adv-img">
                  <div className="img-placeholder" style={{height: '160px', background: i % 3 === 0 ? '#00AEEF' : i % 3 === 1 ? '#1a1a1a' : '#f0f0f0', color: i % 3 === 2 ? '#333' : '#fff'}}>
                    {item.icon} {item.title}
                  </div>
                </div>
                <div className="adv-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="prem-banner">
        <div className="container">
          <h2>БРЕНД TRUE ВХОДИТ В ТОП 3 ЛИДИРУЮЩИХ ПРОИЗВОДИТЕЛЕЙ ФИТНЕС-ОБОРУДОВАНИЯ</h2>
        </div>
      </section>

      {/* STATS */}
      <section className="prem-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>40+</h3>
              <p>Лет на рынке</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Стран мира</p>
            </div>
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Клубов-партнёров</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Лет гарантии</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="prem-cta">
        <div className="container">
          <h2>ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</h2>
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

export default Prem
