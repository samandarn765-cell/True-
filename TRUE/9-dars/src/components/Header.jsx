import LOGO from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-[#00ADEF] font-bold' : 'text-[#000000] font-normal'

  return (
    <header>
      {/* Logo bar */}
      <div className='flex items-center justify-center py-3 border-b border-gray-100'>
        <img src={LOGO} alt="TRUE Fitness" className='h-12 object-contain' />
      </div>

      {/* Nav bar */}
      <div className='max-w-[1300px] w-full mx-auto px-5'>
        <hr className='w-full border-t m-0' />
        <nav className='flex items-center justify-between gap-5 py-3'>
          <NavLink className={navLinkClass} to={'/'}>бренде</NavLink>
          <NavLink className={navLinkClass} to={'/product'}>продукция</NavLink>
          <NavLink className={navLinkClass} to={'/prem'}>премиум</NavLink>
          <NavLink className={navLinkClass} to={'/club'}>клуб</NavLink>
          <NavLink className={navLinkClass} to={'/contact'}>контакты</NavLink>
          <button className='btn-blue text-xs'>+998 (99) 99-99-99</button>
        </nav>
        <hr className='w-full border-t m-0' />
      </div>
    </header>
  )
}

export default Header
