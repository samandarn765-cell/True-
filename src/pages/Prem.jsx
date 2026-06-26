import React, { useState } from 'react'
import AlertModal from '../components/AlertModal'
import bg3_1 from '../assets/3_bg_1.jpg'
import bg3_2 from '../assets/3_bg_2.jpg'
import bg3_3 from '../assets/3_bg_3.jpg'
import bg3_4 from '../assets/3_bg_4.jpg'
import bg3_5 from '../assets/3_bg_5.jpg'
import bg2Big from '../assets/2_BG_BIG.jpg'
import bg4 from '../assets/bg4.jpg'
import bg2 from '../assets/2_bg.jpg'
import bg3_2png from '../assets/3_bg_2.png'

const advantages = [
  { img: bg3_1, title: 'Премиальное качество', desc: 'Тренажёры TRUE Fitness соответствуют самым высоким стандартам качества' },
  { img: bg3_2, title: 'Долговечность', desc: 'Срок службы оборудования TRUE превышает 15 лет при правильной эксплуатации' },
  { img: bg3_3, title: 'Инновации', desc: 'Передовые технологии и инновационные решения в каждом тренажёре' },
  { img: bg3_4, title: 'Мировой бренд', desc: 'TRUE Fitness используется в более чем 50 странах мира' },
  { img: bg3_5, title: 'Гарантия', desc: 'Расширенная гарантия на все виды оборудования TRUE Fitness' },
  { img: bg3_1, title: 'Поддержка 24/7', desc: 'Круглосуточная техническая поддержка и сервисное обслуживание' },
  { img: bg3_2, title: 'Выгодные условия', desc: 'Гибкие условия оплаты и специальные предложения для клубов' },
  { img: bg3_3, title: 'Точность', desc: 'Высокоточные датчики и мониторинг показателей тренировки' },
  { img: bg3_4, title: 'Низкие расходы', desc: 'Минимальные затраты на обслуживание и ремонт оборудования' },
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
      <section className="prem-hero" style={{ backgroundImage: `url(${bg2Big})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="prem-hero-overlay"></div>
        <div className="container prem-hero-content">
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
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '6px' }} />
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
      <section className="prem-banner" style={{ backgroundImage: `url(${bg4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="prem-banner-overlay"></div>
        <div className="container prem-banner-content">
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
      <section className="prem-cta" style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="prem-cta-overlay"></div>
        <div className="container prem-cta-content">
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
