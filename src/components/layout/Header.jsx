import CartIcon from '../widget/CartIcon'
import Logo from '../../assets/logo-black.svg'
import PropTypes from 'prop-types';

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

Header.propTypes = {
  cartProducts: PropTypes.array.isRequired,
  RemoveFromCart: PropTypes.func.isRequired,
  SetcartProducts: PropTypes.func.isRequired

}

export default Header