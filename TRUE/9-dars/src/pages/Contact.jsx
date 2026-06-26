import { useState } from 'react'
import heroBg from '../assets/hero.png'
import bgImg from '../assets/bg.png'

const Contact = () => {
  const [activeImg, setActiveImg] = useState(0)

  const showroomImages = [heroBg, bgImg, heroBg, bgImg, heroBg, bgImg]

  return (
    <div>
      {/* Hero */}
      <section className='relative' style={{ minHeight: '260px' }}>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.4)' }} />
        <div className='relative z-10 flex flex-col items-center justify-center text-center text-white px-5' style={{ minHeight: '260px' }}>
          <p className='text-[#00ADEF] text-sm font-semibold tracking-widest uppercase mb-2'>TRUE FITNESS</p>
          <h1 className='text-3xl md:text-4xl font-bold mb-3'>КОНТАКТЫ</h1>
          <p className='text-gray-300 text-sm'>ШОУ-РУМ TRUE В ТАШКЕНТЕ — ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ</p>
        </div>
      </section>

      {/* Showroom */}
      <section className='py-16 bg-white'>
        <div className='max-w-[1300px] mx-auto px-5'>
          <div className='grid md:grid-cols-2 gap-10'>
            {/* Image carousel */}
            <div>
              <div className='relative overflow-hidden' style={{ height: '320px' }}>
                <img
                  src={showroomImages[activeImg]}
                  alt="Showroom"
                  className='w-full h-full object-cover transition-all duration-500'
                />
                <button className='carousel-btn carousel-btn-left' onClick={() => setActiveImg(i => (i - 1 + showroomImages.length) % showroomImages.length)}>‹</button>
                <button className='carousel-btn carousel-btn-right' onClick={() => setActiveImg(i => (i + 1) % showroomImages.length)}>›</button>
              </div>
              {/* Thumbnails */}
              <div className='grid grid-cols-3 gap-2 mt-2'>
                {showroomImages.slice(0, 3).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    onClick={() => setActiveImg(i)}
                    className='w-full h-20 object-cover cursor-pointer transition-opacity'
                    style={{ opacity: activeImg === i ? 1 : 0.6, border: activeImg === i ? '2px solid #00ADEF' : '2px solid transparent' }}
                  />
                ))}
              </div>
            </div>

            {/* Map + Info */}
            <div>
              <h2 className='text-xl font-bold mb-4'>ШОУРУМ TRUE В ТАШКЕНТЕ</h2>
              {/* Simple map placeholder */}
              <div className='w-full mb-4 relative bg-gray-200 flex items-center justify-center' style={{ height: '200px' }}>
                <div className='text-center'>
                  <div className='text-4xl mb-2'>📍</div>
                  <p className='text-sm text-gray-600 font-semibold'>ШОУ-РУМ TRUE FITNESS</p>
                  <p className='text-xs text-gray-500'>г. Ташкент, Технопарк</p>
                </div>
                {/* Decorative grid */}
                <div className='absolute inset-0' style={{
                  backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                  opacity: 0.3
                }} />
              </div>
              <div className='space-y-3'>
                <div className='flex items-start gap-3'>
                  <span className='text-[#00ADEF] text-lg'>📍</span>
                  <div>
                    <p className='font-semibold text-sm'>Адрес</p>
                    <p className='text-gray-500 text-xs'>г. Ташкент, Технопарк ул. Технологическая 1 Корпус 37</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <span className='text-[#00ADEF] text-lg'>📞</span>
                  <div>
                    <p className='font-semibold text-sm'>Телефон</p>
                    <p className='text-gray-500 text-xs'>+998 (99) 99-99-99</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <span className='text-[#00ADEF] text-lg'>🕐</span>
                  <div>
                    <p className='font-semibold text-sm'>Время работы</p>
                    <p className='text-gray-500 text-xs'>Пн-Сб: 9:00 - 18:00</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <span className='text-[#00ADEF] text-lg'>✉️</span>
                  <div>
                    <p className='font-semibold text-sm'>Email</p>
                    <p className='text-gray-500 text-xs'>info@truefitness.uz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + More showroom images */}
      <section className='py-16' style={{ backgroundColor: '#f5f5f5' }}>
        <div className='max-w-[1300px] mx-auto px-5'>
          <div className='grid md:grid-cols-2 gap-10'>
            {/* Form */}
            <div className='bg-white p-8'>
              <h2 className='text-xl font-bold mb-2'>СВЯЗАТЬСЯ С НАМИ</h2>
              <p className='text-gray-500 text-xs mb-6'>Оставьте заявку и мы свяжемся с вами</p>
              <div className='space-y-4'>
                <div>
                  <label className='form-label'>Имя</label>
                  <input className='form-input' type='text' placeholder='Ваше имя' />
                </div>
                <div>
                  <label className='form-label'>Телефон</label>
                  <input className='form-input' type='tel' placeholder='+998 __ ___ __ __' />
                </div>
                <div>
                  <label className='form-label'>Email</label>
                  <input className='form-input' type='email' placeholder='email@example.com' />
                </div>
                <div>
                  <label className='form-label'>Сообщение</label>
                  <textarea className='form-input' rows={4} placeholder='Ваш вопрос...' />
                </div>
                <button className='btn-blue w-full py-3'>ОТПРАВИТЬ СООБЩЕНИЕ</button>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className='text-lg font-bold mb-4'>НАШИ ТРЕНАЖЁРЫ В ШОУ-РУМЕ</h3>
              <div className='grid grid-cols-3 gap-2'>
                {showroomImages.map((img, i) => (
                  <div key={i} className='overflow-hidden' style={{ height: '120px' }}>
                    <img src={img} alt="" className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' />
                  </div>
                ))}
              </div>
              <div className='mt-6 p-5' style={{ backgroundColor: '#00ADEF' }}>
                <p className='text-white font-bold mb-1 text-sm'>ЗАПИСАТЬСЯ НА ПРОСМОТР</p>
                <p className='text-white/80 text-xs mb-3'>Посетите наш шоурум и протестируйте тренажёры лично</p>
                <div className='flex gap-2'>
                  <input className='form-input flex-1' type='tel' placeholder='+998...' />
                  <button style={{ backgroundColor: '#1a1a2e', color: 'white' }} className='px-4 py-2 text-xs font-bold whitespace-nowrap'>ПОЗВОНИТЬ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
