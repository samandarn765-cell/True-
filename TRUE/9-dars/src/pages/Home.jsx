import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero.png'
import bgImg from '../assets/bg.png'

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { title: 'TRUE FITNESS — ПРЕМИУМ ТРЕНАЖЁРЫ ИЗ США', subtitle: 'Совершенное и надёжное оборудование для фитнес-бизнеса' },
    { title: 'ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ ТРЕНИРОВОК', subtitle: 'Лучшие тренажёры для коммерческих фитнес-клубов' },
    { title: 'ОТКРЫТЬТЕ КЛУБ ВМЕСТЕ С TRUE', subtitle: 'Полный комплекс услуг для вашего бизнеса' },
  ]

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide(s => (s + 1) % slides.length), 4000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    { icon: '🏃', title: 'Беговые дорожки', desc: 'Профессиональные беговые дорожки для коммерческих залов' },
    { icon: '🚴', title: 'Велотренажёры', desc: 'Эргономичные велотренажёры с точным контролем нагрузки' },
    { icon: '⚡', title: 'Эллиптические', desc: 'Плавная нагрузка на всё тело без ударов на суставы' },
    { icon: '💪', title: 'Силовые', desc: 'Полный комплекс силового оборудования для залов' },
  ]

  const services = [
    { icon: '📦', title: 'Поставка', desc: 'Доставка оборудования по всему Узбекистану' },
    { icon: '🔧', title: 'Монтаж', desc: 'Профессиональная установка и настройка' },
    { icon: '📋', title: 'Гарантия', desc: 'Расширенная гарантия на всё оборудование' },
    { icon: '🛠', title: 'Сервис', desc: 'Техническое обслуживание и ремонт' },
    { icon: '📐', title: 'Проектирование', desc: 'Разработка планировки фитнес-зала' },
    { icon: '📚', title: 'Обучение', desc: 'Обучение персонала работе с оборудованием' },
  ]

  return (
    <div>
      {/* Hero Carousel */}
      <section className='relative overflow-hidden' style={{ minHeight: '480px' }}>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.45)' }}
        />
        <div className='relative z-10 flex flex-col items-center justify-center text-center text-white px-5' style={{ minHeight: '480px' }}>
          <p className='text-[#00ADEF] text-sm font-semibold tracking-widest uppercase mb-3'>TRUE FITNESS</p>
          <h1 className='text-3xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight'>
            {slides[activeSlide].title}
          </h1>
          <p className='text-gray-300 mb-8 text-lg'>{slides[activeSlide].subtitle}</p>
          <div className='flex gap-4 flex-wrap justify-center'>
            <Link to="/product"><button className='btn-blue'>НАША ПРОДУКЦИЯ</button></Link>
            <Link to="/contact"><button className='btn-outline' style={{ borderColor: 'white', color: 'white' }}>СВЯЗАТЬСЯ С НАМИ</button></Link>
          </div>
          {/* Dots */}
          <div className='flex gap-2 mt-8'>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className='w-2 h-2 rounded-full transition-all'
                style={{ backgroundColor: activeSlide === i ? '#00ADEF' : 'rgba(255,255,255,0.5)' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TRUE FITNESS Intro */}
      <section className='py-16 bg-white'>
        <div className='max-w-[1300px] mx-auto px-5'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <p className='text-[#00ADEF] font-semibold text-sm tracking-widest uppercase mb-2'>О БРЕНДЕ</p>
              <h2 className='text-3xl font-bold mb-4'>TRUE FITNESS</h2>
              <p className='text-gray-600 mb-2 text-sm leading-relaxed'>СОВЕРШЕННОЕ И НАДЁЖНОЕ ОБОРУДОВАНИЕ ДЛЯ ФИТНЕС-БИЗНЕСА</p>
              <p className='text-gray-500 text-sm leading-relaxed mb-6'>
                TRUE Fitness — ведущий мировой производитель премиального фитнес-оборудования. Основанная в США, компания поставляет тренажёры в фитнес-клубы по всему миру уже более 30 лет.
              </p>
              <Link to="/brand"><button className='btn-blue'>ПОДРОБНЕЕ О БРЕНДЕ →</button></Link>
            </div>
            <div className='relative'>
              <img src={bgImg} alt="TRUE Fitness" className='w-full object-cover' style={{ maxHeight: '320px' }} />
              <div className='absolute bottom-4 left-4 bg-[#00ADEF] text-white px-4 py-2'>
                <p className='text-xs font-bold'>БЕГОВЫЕ ДОРОЖКИ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className='py-16' style={{ backgroundColor: '#f5f5f5' }}>
        <div className='max-w-[1300px] mx-auto px-5'>
          <h2 className='section-title'>НАША ПРОДУКЦИЯ</h2>
          <p className='section-subtitle'>Профессиональное оборудование для фитнес-клубов</p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {features.map((f, i) => (
              <div key={i} className='bg-white p-6 text-center hover:shadow-lg transition-shadow'>
                <div className='text-4xl mb-3'>{f.icon}</div>
                <h3 className='font-bold text-sm mb-2'>{f.title}</h3>
                <p className='text-gray-500 text-xs leading-relaxed'>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className='text-center mt-8'>
            <Link to="/product"><button className='btn-blue'>СМОТРЕТЬ ВСЕ ТРЕНАЖЁРЫ</button></Link>
          </div>
        </div>
      </section>

      {/* Blue banner */}
      <section className='py-14' style={{ backgroundColor: '#00ADEF' }}>
        <div className='max-w-[1300px] mx-auto px-5 text-center text-white'>
          <h2 className='text-2xl font-bold mb-3'>TRUE — ВЕДУЩИЙ МИРОВОЙ ПРОИЗВОДИТЕЛЬ ПРЕМИАЛЬНОГО ФИТНЕС ОБОРУДОВАНИЯ</h2>
          <p className='text-white/80 mb-6 text-sm'>Более 30 лет опыта. Тысячи клубов по всему миру.</p>
          <Link to="/brand"><button style={{ backgroundColor: 'white', color: '#00ADEF', fontWeight: 700 }} className='px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-100 transition'>УЗНАТЬ БОЛЬШЕ</button></Link>
        </div>
      </section>

      {/* Services */}
      <section className='py-16 bg-white'>
        <div className='max-w-[1300px] mx-auto px-5'>
          <h2 className='section-title'>МЫ ПРЕДЛАГАЕМ ПОЛНЫЙ КОМПЛЕКС УСЛУГ</h2>
          <p className='section-subtitle'>Всё необходимое для вашего фитнес-бизнеса</p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
            {services.map((s, i) => (
              <div key={i} className='flex gap-4 items-start p-4 hover:bg-gray-50 transition'>
                <div className='text-2xl'>{s.icon}</div>
                <div>
                  <h3 className='font-bold text-sm mb-1'>{s.title}</h3>
                  <p className='text-gray-500 text-xs'>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className='py-14' style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div className='absolute inset-0' style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} />
        <div className='relative z-10 max-w-[700px] mx-auto px-5 text-center text-white'>
          <h2 className='text-2xl font-bold mb-2'>ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ НА ТРЕНАЖЁРЫ TRUE FITNESS</h2>
          <p className='text-gray-300 mb-6 text-sm'>Оставьте заявку и наш менеджер свяжется с вами</p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <input className='form-input flex-1 text-black' placeholder='Ваше имя' type='text' />
            <input className='form-input flex-1 text-black' placeholder='+998 __ ___ __ __' type='tel' />
            <button className='btn-blue whitespace-nowrap'>ОТПРАВИТЬ</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
