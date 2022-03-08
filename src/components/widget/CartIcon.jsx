import cartLogo from '../../assets/supermarket-basket.svg'
import Cart from './Cart'
import { useState, useEffect } from 'react'

function CartIcon({cartProducts,RemoveFromCart,SetcartProducts}) {
  const [showCart, setshowCart] = useState(false)

  const handleshowCart = () =>{
    setshowCart(true)
  }

  useEffect(()=>{
    //totalQty()
  },[cartProducts])

  // show actual items quantity in the cart
  const totalQty = ()=>{
    const sum = cartProducts.reduce((a,v)=> a= a+v.qty,0)
    return sum
  }

  return (
    <>
      <div className='cart-icon-wrapper'>
        <div className="cart">
          <img src={cartLogo}
          alt="Cart Logo"
          onClick={handleshowCart} />
        </div>
        {cartProducts.length > 0 &&
        <span className='cart-sum active'>{totalQty()}</span> }

      </div>
      {showCart &&
        <div className='cart-container'>
          <Cart
          setshowCart={setshowCart}
          cartProducts={cartProducts}
          RemoveFromCart={RemoveFromCart}
          SetcartProducts={SetcartProducts}
          />
        </div>}
    </>
  )
}

export default CartIcon