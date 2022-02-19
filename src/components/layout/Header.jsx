import Cart from '../widget/Cart'
import Logo from '../../assets/logo-black.svg'

function Header() {
  return (
    <header className='header'>
      <h1>
        <img src={Logo} alt="logo" width="102" height="50" />
      </h1>
      <Cart/>
    </header>

  )
}

export default Header