import cartLogo from '../../assets/supermarket-basket.svg'
import Cart from './Cart'
import { useState } from 'react'

function CartIcon() {
  const [showCart, setshowCart] = useState(false)

  const handleshowCart = () =>{
    setshowCart(true)
  }

  return (
    <>
      <div className='cart-icon-wrapper'>
        <div className="cart">
          <img src={cartLogo}
          alt="Cart Logo"
          onClick={handleshowCart} />
        </div>
        {/* dodaj/usun klase active aby widziec koszyk */}
        <span className='cart-sum active'>1</span>

      </div>
      {showCart &&
        <div className='cart-container'>
          <Cart setshowCart={setshowCart}/>
        </div>}
    </>
  )
}

export default CartIcon