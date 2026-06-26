import { Link } from 'react-router-dom'
import heroBg from '../assets/hero.png'
import bgImg from '../assets/bg.png'

const Prem = () => {
  const advantages = [
    { icon: '🏆', title: 'Премиальное качество', desc: 'Тренажёры TRUE производятся из высококачественных материалов и проходят строгий контроль качества на каждом этапе производства' },
    { icon: '⚙️', title: 'Надёжность и долговечность', desc: 'Срок службы оборудования TRUE более 15 лет при правильном обслуживании. Минимальные расходы на техническое обслуживание' },
    { icon: '💡', title: 'Инновационные технологии', desc: 'Запатентованные технологии TRUE обеспечивают плавность работы, точность показаний и комфорт тренировок' },
    { icon: '🎨', title: 'Современный дизайн', desc: 'Стильный и эргономичный дизайн тренажёров TRUE украсит любой фитнес-зал и привлечёт клиентов' },
    { icon: '📊', title: 'Умные технологии', desc: 'Встроенные дисплеи и совместимость с популярными фитнес-приложениями для отслеживания прогресса' },
    { icon: '🌍', title: 'Мировое признание', desc: 'TRUE используется в тысячах премиальных фитнес-клубов по всему миру, в т.ч. в 5-звёздочных отелях' },
  ]

  const brands = [
    'Hilton Hotels', 'Marriott', 'Planet Fitness', 'Equinox', 'World Gym', 'Gold\'s Gym',
  ]

  const gallery = [
    { icon: '🏟️', label: 'Фитнес-зал' },
    { icon: '🚴', label: 'Велотренажёры' },
    { icon: '🏃', label: 'Беговые дорожки' },
    { icon: '💪', label: 'Силовая зона' },
    { icon: '⚡', label: 'Кардио-зона' },
    { icon: '🎯', label: 'Функциональный зал' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className='relative' style={{ minHeight: '300px' }}>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.4)' }} />
        <div className='relative z-10 flex flex-col items-center justify-center text-center text-white px-5' style={{ minHeight: '300px' }}>
          <p className='text-[#00ADEF] text-sm font-semibold tracking-widest uppercase mb-2'>TRUE FITNESS</p>
          <h1 className='text-3xl md:text-4xl font-bold mb-3'>ПРЕИМУЩЕСТВА</h1>
          <p className='text-gray-300 text-sm max-w-xl'>Почему тысячи клубов по всему миру выбирают TRUE Fitness</p>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className='py-16 bg-white'>
        <div className='max-w-[1300px] mx-auto px-5'>
          <h2 className='section-title'>ПРЕИМУЩЕСТВА TRUE FITNESS</h2>
          <p className='section-subtitle'>Всё, что нужно для успешного фитнес-бизнеса</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {advantages.map((a, i) => (
              <div key={i} className='p-6 border border-gray-100 hover:border-[#00ADEF] hover:shadow-md transition-all'>
                <div className='text-4xl mb-4'>{a.icon}</div>
                <h3 className='font-bold text-sm mb-2 uppercase tracking-wide'>{a.title}</h3>
                <p className='text-gray-500 text-xs leading-relaxed'>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className='py-16' style={{ backgroundColor: '#f5f5f5' }}>
        <div className='max-w-[1300px] mx-auto px-5'>
          <h2 className='section-title'>НАШИ ОБЪЕКТЫ</h2>
          <p className='section-subtitle'>Фитнес-залы, оснащённые оборудованием TRUE</p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {gallery.map((g, i) => (
              <div key={i} className='relative overflow-hidden bg-gray-200 hover:shadow-lg transition-shadow' style={{ height: '200px' }}>
                <img src={i % 2 === 0 ? heroBg : bgImg} alt={g.label} className='w-full h-full object-cover' style={{ filter: 'brightness(0.6)' }} />
                <div className='absolute inset-0 flex items-end p-4'>
                  <span className='text-white font-bold text-sm bg-[#00ADEF] px-3 py-1'>{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className='py-12' style={{ backgroundColor: '#1a1a2e' }}>
        <div className='max-w-[1300px] mx-auto px-5 text-center'>
          <p className='text-gray-400 text-xs uppercase tracking-widest mb-6'>БРЕНД TRUE ВХОДИТ В ТОП-3 ВЕДУЩИХ ПРОИЗВОДИТЕЛЕЙ ФИТНЕС-ОБОРУДОВАНИЯ</p>
          <div className='flex flex-wrap justify-center gap-6'>
            {brands.map((b, i) => (
              <div key={i} className='text-gray-300 font-bold text-sm px-4 py-2 border border-gray-700'>{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className='py-14' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div className='absolute inset-0' style={{ backgroundColor: 'rgba(0,0,0,0.75)' }} />
        <div className='relative z-10 max-w-[700px] mx-auto px-5 text-center text-white'>
          <h2 className='text-2xl font-bold mb-2'>ПОЛУЧИТЕ СКИДКУ НА ТРЕНАЖЁРЫ TRUE FITNESS</h2>
          <p className='text-gray-300 mb-6 text-sm'>Оставьте заявку и наш менеджер свяжется с вами в течение 30 минут</p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <input className='form-input flex-1 text-black' placeholder='Имя' type='text' />
            <input className='form-input flex-1 text-black' placeholder='Телефон' type='tel' />
            <input className='form-input flex-1 text-black' placeholder='Email' type='email' />
            <button className='btn-blue whitespace-nowrap'>ОТПРАВИТЬ</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Prem
