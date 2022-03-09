import cartLogo from '../../assets/supermarket-basket.svg'
import Cart from './Cart'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

function CartIcon({cartProducts,RemoveFromCart,SetcartProducts}) {
  const [showCart, setshowCart] = useState(false)

  //const cartRef = useRef(null)

  // const style = {
  //   transition: "transform 2s ease-in-out",
  //   transform: `translate(0)`
  // }

  const handleshowCart = () =>{
    setshowCart(!showCart)
    //cartRef.current.style.transform = `translate(100%)`
  }

  useEffect(()=>{

  },[cartProducts,showCart])

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
      {/* {showCart && */
        <div className={`${showCart ? "cart-container animate" : "cart-container"}`}

        >
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

CartIcon.propTypes = {
  cartProducts: PropTypes.array.isRequired,
  RemoveFromCart: PropTypes.func.isRequired,
  SetcartProducts: PropTypes.func.isRequired

}

export default CartIcon