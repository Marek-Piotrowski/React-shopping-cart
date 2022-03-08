import CartIcon from '../widget/CartIcon'
import Logo from '../../assets/logo-black.svg'

function Header({cartProducts,RemoveFromCart,SetcartProducts}) {

  return (
    <header className='header'>
      <h1>
        <img src={Logo}
        alt="logo"
        width="102"
        height="50"
         />
      </h1>
      <CartIcon
      cartProducts={cartProducts}
      RemoveFromCart={RemoveFromCart}
      SetcartProducts={SetcartProducts}
      />
    </header>

  )
}

export default Header