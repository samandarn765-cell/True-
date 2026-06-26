import { Link } from 'react-router-dom'
import heroBg from '../assets/hero.png'
import bgImg from '../assets/bg.png'

const Club = () => {
  const steps = [
    { num: '01', title: 'Заявка', desc: 'Оставьте заявку на открытие клуба. Наш менеджер свяжется с вами для консультации.' },
    { num: '02', title: 'Анализ', desc: 'Мы проанализируем ваш бюджет, локацию и целевую аудиторию.' },
    { num: '03', title: 'Проектирование', desc: 'Разработаем планировку зала и подберём оптимальный набор оборудования.' },
    { num: '04', title: 'Поставка', desc: 'Доставим оборудование TRUE в кратчайшие сроки.' },
    { num: '05', title: 'Монтаж', desc: 'Профессиональная установка и настройка всего оборудования.' },
    { num: '06', title: 'Открытие', desc: 'Поддержка на этапе открытия и обучение персонала.' },
  ]

  const [formData, setFormData] = React.useState({
    name: '', phone: '', email: '', city: '', area: '', budget: '', timeline: '', comments: ''
  })

  return (
    <div>
      {/* Hero */}
      <section className='relative' style={{ minHeight: '300px' }}>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.4)' }} />
        <div className='relative z-10 flex flex-col items-center justify-center text-center text-white px-5' style={{ minHeight: '300px' }}>
          <p className='text-[#00ADEF] text-sm font-semibold tracking-widest uppercase mb-2'>TRUE FITNESS</p>
          <h1 className='text-3xl md:text-4xl font-bold mb-3'>ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE</h1>
          <p className='text-gray-300 text-sm max-w-xl'>Всё необходимое для запуска успешного фитнес-клуба</p>
        </div>
      </section>

      {/* Layout image + text */}
      <section className='py-16 bg-white'>
        <div className='max-w-[1300px] mx-auto px-5'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <img src={bgImg} alt="Club layout" className='w-full object-cover border-2 border-gray-100' style={{ maxHeight: '360px' }} />
            </div>
            <div>
              <p className='text-[#00ADEF] font-semibold text-sm tracking-widest uppercase mb-2'>ВАШИ ВОЗМОЖНОСТИ</p>
              <h2 className='text-2xl font-bold mb-4'>ОТКРОЙТЕ КЛУБ ВМЕСТЕ С TRUE</h2>
              <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                TRUE Fitness предлагает полный пакет услуг для открытия вашего фитнес-клуба. Мы поможем вам на каждом этапе — от выбора помещения до торжественного открытия.
              </p>
              <ul className='space-y-2 mb-6'>
                {['Проектирование планировки зала', 'Подбор оборудования', 'Поставка и монтаж', 'Обучение персонала', 'Маркетинговая поддержка'].map((item, i) => (
                  <li key={i} className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='text-[#00ADEF] font-bold'>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className='btn-blue'>ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className='py-16' style={{ backgroundColor: '#f5f5f5' }}>
        <div className='max-w-[1300px] mx-auto px-5'>
          <h2 className='section-title'>КАК МЫ РАБОТАЕМ</h2>
          <p className='section-subtitle'>6 шагов от идеи до открытия клуба</p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
            {steps.map((s, i) => (
              <div key={i} className='bg-white p-6 relative'>
                <div className='text-[#00ADEF] text-4xl font-black mb-3 opacity-30'>{s.num}</div>
                <h3 className='font-bold text-sm mb-2 uppercase'>{s.title}</h3>
                <p className='text-gray-500 text-xs leading-relaxed'>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className='py-16 bg-white'>
        <div className='max-w-[900px] mx-auto px-5'>
          <h2 className='section-title'>ОТПРАВИТЬ ЗАЯВКУ</h2>
          <p className='section-subtitle'>Заполните форму и мы свяжемся с вами в течение рабочего дня</p>
          <div className='grid md:grid-cols-2 gap-5'>
            <div>
              <label className='form-label'>Ваше имя *</label>
              <input className='form-input' type='text' placeholder='Иван Иванов' />
            </div>
            <div>
              <label className='form-label'>Телефон *</label>
              <input className='form-input' type='tel' placeholder='+998 __ ___ __ __' />
            </div>
            <div>
              <label className='form-label'>Email</label>
              <input className='form-input' type='email' placeholder='email@example.com' />
            </div>
            <div>
              <label className='form-label'>Город</label>
              <input className='form-input' type='text' placeholder='Ташкент' />
            </div>
            <div>
              <label className='form-label'>Площадь помещения (кв.м)</label>
              <input className='form-input' type='text' placeholder='500' />
            </div>
            <div>
              <label className='form-label'>Бюджет</label>
              <select className='form-input'>
                <option value=''>Выберите бюджет</option>
                <option>до $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000 - $200,000</option>
                <option>более $200,000</option>
              </select>
            </div>
            <div>
              <label className='form-label'>Планируемая дата открытия</label>
              <input className='form-input' type='date' />
            </div>
            <div>
              <label className='form-label'>Стандарты тренажёрного зала</label>
              <select className='form-input'>
                <option>Эконом</option>
                <option>Средний</option>
                <option>Премиум</option>
                <option>Люкс</option>
              </select>
            </div>
            <div className='md:col-span-2'>
              <label className='form-label'>Дополнительные пожелания</label>
              <textarea className='form-input' rows={4} placeholder='Опишите ваши требования...' />
            </div>
            <div className='md:col-span-2'>
              <label className='form-label'>Количество тренажёров</label>
              <input className='form-input' type='text' placeholder='Например: 20-30 единиц' />
            </div>
          </div>
          <div className='mt-6 text-center'>
            <button className='btn-blue px-12 py-4 text-base'>ОТПРАВИТЬ ЗАЯВКУ</button>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'
export default Club
