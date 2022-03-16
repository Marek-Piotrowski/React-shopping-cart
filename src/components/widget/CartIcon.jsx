import cartLogo from '../../assets/supermarket-basket.svg'
import Cart from './Cart'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function CartIcon() {


  const {cartProducts} = useSelector(state => state.cart)
  const [showCart, setshowCart] = useState(false)


  const handleshowCart = () =>{
    setshowCart(!showCart)
    //cartRef.current.style.transform = `translate(100%)`
  }

  useEffect(()=>{

  },[cartProducts,showCart])

  // show actual items quantity in the cart
  const totalQty = ()=>{
    const sum = cartProducts.reduce((a,v)=> a= a+v.qty,0)
    return isNaN(sum) ? 0 : sum
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
          />
        </div>}
    </>
  )
}

export default CartIcon