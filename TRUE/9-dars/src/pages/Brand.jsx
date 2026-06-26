import { Link } from 'react-router-dom'
import heroBg from '../assets/hero.png'
import bgImg from '../assets/bg.png'

const Brand = () => {
  const innovations = [
    { icon: '🏃', title: 'Беговые дорожки серии 900', desc: 'Профессиональные беговые дорожки с мощным двигателем и широкой беговой поверхностью' },
    { icon: '🚴', title: 'Велотренажёры серии 400', desc: 'Эргономичные велотренажёры с точной системой регулировки нагрузки' },
    { icon: '⚡', title: 'Эллиптические CS900', desc: 'Низкоударная нагрузка на всё тело с плавным скользящим движением' },
    { icon: '🎯', title: 'Лестничный тренажёр', desc: 'Интенсивная кардио-тренировка, имитирующая подъём по лестнице' },
    { icon: '💪', title: 'Силовые тренажёры', desc: 'Полный комплекс силового оборудования для тренировки всех групп мышц' },
    { icon: '🔄', title: 'Гребные тренажёры', desc: 'Гребные тренажёры для кардио и силовых тренировок' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className='relative' style={{ minHeight: '300px' }}>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.4)' }} />
        <div className='relative z-10 flex flex-col items-center justify-center text-center text-white px-5' style={{ minHeight: '300px' }}>
          <p className='text-[#00ADEF] text-sm font-semibold tracking-widest uppercase mb-2'>TRUE FITNESS</p>
          <h1 className='text-3xl md:text-4xl font-bold mb-3'>О БРЕНДЕ</h1>
          <p className='text-gray-300 text-sm max-w-xl'>TRUE — совершенное фитнес-оборудование мирового класса</p>
        </div>
      </section>

      {/* About text */}
      <section className='py-16 bg-white'>
        <div className='max-w-[1300px] mx-auto px-5'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <p className='text-[#00ADEF] font-semibold text-sm tracking-widest uppercase mb-2'>ИСТОРИЯ БРЕНДА</p>
              <h2 className='text-2xl font-bold mb-4'>TRUE FITNESS — СОВЕРШЕННОЕ ФИТНЕС-ОБОРУДОВАНИЕ</h2>
              <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                TRUE Fitness основана в США и является одним из ведущих мировых производителей коммерческого фитнес-оборудования. На протяжении более 30 лет компания производит высококачественные тренажёры для фитнес-клубов по всему миру.
              </p>
              <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                Оборудование TRUE отличается исключительной надёжностью, инновационными технологиями и эргономичным дизайном. Каждый тренажёр проходит строгий контроль качества перед поставкой.
              </p>
              <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                Мы предлагаем вам возможность приобрести оборудование TRUE для вашего фитнес-клуба с полным сервисным сопровождением в Узбекистане.
              </p>
              <Link to="/contact"><button className='btn-blue'>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button></Link>
            </div>
            <div>
              <img src={bgImg} alt="TRUE Brand" className='w-full object-cover' style={{ maxHeight: '380px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='py-12' style={{ backgroundColor: '#00ADEF' }}>
        <div className='max-w-[1300px] mx-auto px-5'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white'>
            {[
              { num: '30+', label: 'Лет опыта' },
              { num: '50+', label: 'Стран мира' },
              { num: '10,000+', label: 'Клубов-партнёров' },
              { num: '100%', label: 'Гарантия качества' },
            ].map((s, i) => (
              <div key={i}>
                <div className='text-3xl font-bold mb-1'>{s.num}</div>
                <div className='text-white/80 text-sm'>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations */}
      <section className='py-16' style={{ backgroundColor: '#f5f5f5' }}>
        <div className='max-w-[1300px] mx-auto px-5'>
          <h2 className='section-title'>НАШИ ИННОВАЦИИ</h2>
          <p className='section-subtitle'>Передовые технологии в каждом тренажёре</p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
            {innovations.map((item, i) => (
              <div key={i} className='bg-white p-5 hover:shadow-md transition-shadow'>
                <div className='text-3xl mb-3'>{item.icon}</div>
                <h3 className='font-bold text-sm mb-2'>{item.title}</h3>
                <p className='text-gray-500 text-xs leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className='py-14' style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div className='absolute inset-0' style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} />
        <div className='relative z-10 max-w-[700px] mx-auto px-5 text-center text-white'>
          <h2 className='text-2xl font-bold mb-2'>ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</h2>
          <p className='text-gray-300 mb-6 text-sm'>Узнайте всё о тренажёрах TRUE FITNESS для вашего клуба</p>
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

export default Brand
