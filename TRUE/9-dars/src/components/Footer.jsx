import LOGO from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a2e' }} className='text-white mt-0'>
      {/* Top blue bar */}
      <div style={{ backgroundColor: '#00ADEF' }} className='py-3'>
        <div className='max-w-[1300px] mx-auto px-5 flex flex-wrap items-center justify-between gap-4'>
          <div className='flex gap-6 text-sm font-semibold'>
            <Link to="/" className='text-white hover:text-gray-200'>О БРЕНДЕ</Link>
            <Link to="/product" className='text-white hover:text-gray-200'>ПРОДУКЦИЯ</Link>
            <Link to="/prem" className='text-white hover:text-gray-200'>ПРЕИМУЩЕСТВА</Link>
            <Link to="/club" className='text-white hover:text-gray-200'>ОТКРЫТЬ КЛУБ</Link>
            <Link to="/contact" className='text-white hover:text-gray-200'>КОНТАКТЫ</Link>
          </div>
          <div className='flex gap-3'>
            <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className='w-8 h-8 flex items-center justify-center text-white text-sm hover:bg-white hover:text-blue-500 transition'>f</a>
            <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className='w-8 h-8 flex items-center justify-center text-white text-sm hover:bg-white hover:text-blue-500 transition'>in</a>
            <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className='w-8 h-8 flex items-center justify-center text-white text-sm hover:bg-white hover:text-blue-500 transition'>▶</a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className='max-w-[1300px] mx-auto px-5 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo + info */}
          <div>
            <img src={LOGO} alt="TRUE" className='h-10 mb-4 brightness-0 invert' />
            <p className='text-gray-400 text-xs leading-relaxed'>
              TRUE Fitness — ведущий мировой производитель премиального фитнес-оборудования из США.
            </p>
          </div>

          {/* Продукция */}
          <div>
            <h4 className='text-white font-semibold text-sm mb-3 uppercase tracking-wider'>Продукция</h4>
            <ul className='space-y-2 text-gray-400 text-xs'>
              <li><a href="#" className='hover:text-[#00ADEF] transition'>Беговые дорожки</a></li>
              <li><a href="#" className='hover:text-[#00ADEF] transition'>Эллиптические тренажёры</a></li>
              <li><a href="#" className='hover:text-[#00ADEF] transition'>Велотренажёры</a></li>
              <li><a href="#" className='hover:text-[#00ADEF] transition'>Гребные тренажёры</a></li>
              <li><a href="#" className='hover:text-[#00ADEF] transition'>Силовое оборудование</a></li>
            </ul>
          </div>

          {/* О компании */}
          <div>
            <h4 className='text-white font-semibold text-sm mb-3 uppercase tracking-wider'>О компании</h4>
            <ul className='space-y-2 text-gray-400 text-xs'>
              <li><Link to="/brand" className='hover:text-[#00ADEF] transition'>О бренде</Link></li>
              <li><Link to="/prem" className='hover:text-[#00ADEF] transition'>Преимущества</Link></li>
              <li><Link to="/club" className='hover:text-[#00ADEF] transition'>Открыть клуб</Link></li>
              <li><Link to="/contact" className='hover:text-[#00ADEF] transition'>Контакты</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className='text-white font-semibold text-sm mb-3 uppercase tracking-wider'>Контакты</h4>
            <ul className='space-y-2 text-gray-400 text-xs'>
              <li>📍 г. Ташкент, Технопарк</li>
              <li>📞 +998 (99) 99-99-99</li>
              <li>✉️ info@truefitness.uz</li>
            </ul>
          </div>
        </div>

        <hr className='border-gray-700 my-6' />
        <p className='text-gray-500 text-xs text-center'>© 2024 TRUE Fitness. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer
