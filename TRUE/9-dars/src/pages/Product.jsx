import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero.png'
import bgImg from '../assets/bg.png'

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Все' },
    { id: 'cardio', label: 'Кардио' },
    { id: 'strength', label: 'Силовые' },
    { id: 'specialty', label: 'Специальные' },
  ]

  const products = [
    { id: 1, cat: 'cardio', icon: '🏃', name: 'Беговая дорожка 900', model: 'TRUE 900T', desc: 'Профессиональная беговая дорожка для коммерческих залов. Мощность 4.0 л.с., скорость до 22 км/ч.', price: 'по запросу' },
    { id: 2, cat: 'cardio', icon: '⚡', name: 'Эллиптический CS900', model: 'TRUE CS900', desc: 'Плавная низкоударная нагрузка на всё тело. Регулируемый шаг, 25 уровней сопротивления.', price: 'по запросу' },
    { id: 3, cat: 'cardio', icon: '🚴', name: 'Велотренажёр C400', model: 'TRUE C400', desc: 'Эргономичный велотренажёр с точным контролем нагрузки. Тихий ременной привод.', price: 'по запросу' },
    { id: 4, cat: 'specialty', icon: '🪜', name: 'Лестничный тренажёр', model: 'TRUE STAIR', desc: 'Интенсивная кардио-тренировка, имитирующая подъём по лестнице. Для профессионалов.', price: 'по запросу' },
    { id: 5, cat: 'strength', icon: '💪', name: 'Силовая рама', model: 'TRUE RACK', desc: 'Многофункциональная силовая рама для комплексных тренировок. Сталь 12 мм.', price: 'по запросу' },
    { id: 6, cat: 'cardio', icon: '🚣', name: 'Гребной тренажёр', model: 'TRUE ROW', desc: 'Тренировка 86% мышц тела. Водяное сопротивление для реалистичного ощущения.', price: 'по запросу' },
    { id: 7, cat: 'strength', icon: '🏋️', name: 'Свободные веса', model: 'TRUE FW', desc: 'Полный комплект гантелей, штанг и скамеек для силовых тренировок.', price: 'по запросу' },
    { id: 8, cat: 'specialty', icon: '🎯', name: 'Функциональный тренажёр', model: 'TRUE FUNC', desc: 'Многофункциональная система с тросами для функционального тренинга.', price: 'по запросу' },
  ]

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.cat === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className='relative' style={{ minHeight: '280px' }}>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${bgImg})`, filter: 'brightness(0.4)' }} />
        <div className='relative z-10 flex flex-col items-center justify-center text-center text-white px-5' style={{ minHeight: '280px' }}>
          <p className='text-[#00ADEF] text-sm font-semibold tracking-widest uppercase mb-2'>TRUE FITNESS</p>
          <h1 className='text-3xl md:text-4xl font-bold mb-3'>ПРОДУКЦИЯ</h1>
          <p className='text-gray-300 text-sm'>Премиальное фитнес-оборудование для коммерческих залов</p>
        </div>
      </section>

      {/* Filters */}
      <section className='py-8 bg-white border-b'>
        <div className='max-w-[1300px] mx-auto px-5 flex flex-wrap gap-3 justify-center'>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className='px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-all'
              style={{
                backgroundColor: activeCategory === c.id ? '#00ADEF' : 'transparent',
                color: activeCategory === c.id ? 'white' : '#333',
                border: `2px solid ${activeCategory === c.id ? '#00ADEF' : '#ddd'}`,
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className='py-16' style={{ backgroundColor: '#f5f5f5' }}>
        <div className='max-w-[1300px] mx-auto px-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {filtered.map(p => (
              <div key={p.id} className='bg-white hover:shadow-lg transition-shadow'>
                <div className='h-44 flex items-center justify-center' style={{ backgroundColor: '#f0f8ff' }}>
                  <div className='text-6xl'>{p.icon}</div>
                </div>
                <div className='p-4'>
                  <p className='text-[#00ADEF] text-xs font-semibold mb-1'>{p.model}</p>
                  <h3 className='font-bold text-sm mb-2'>{p.name}</h3>
                  <p className='text-gray-500 text-xs leading-relaxed mb-4'>{p.desc}</p>
                  <div className='flex items-center justify-between'>
                    <span className='text-xs text-gray-400'>Цена: {p.price}</span>
                    <Link to="/contact"><button className='btn-blue' style={{ padding: '6px 14px', fontSize: '11px' }}>ЗАКАЗАТЬ</button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-12' style={{ backgroundColor: '#00ADEF' }}>
        <div className='max-w-[1300px] mx-auto px-5 text-center text-white'>
          <h2 className='text-2xl font-bold mb-3'>НУЖНА ПОМОЩЬ С ВЫБОРОМ?</h2>
          <p className='text-white/80 mb-6 text-sm'>Наши специалисты помогут подобрать оборудование под ваш бюджет и задачи</p>
          <Link to="/contact"><button style={{ backgroundColor: 'white', color: '#00ADEF', fontWeight: 700 }} className='px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-100 transition'>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button></Link>
        </div>
      </section>
    </div>
  )
}

export default Product
