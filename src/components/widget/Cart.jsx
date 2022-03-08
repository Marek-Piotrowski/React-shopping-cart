import React from 'react'
import { FaTimes } from 'react-icons/fa';
import BasketFooter from './Footer/BasketFooter';
import ProductTable from './Products/ProductTable';
import Suminfo from './Products/Suminfo';


function Cart({setshowCart,cartProducts,RemoveFromCart,SetcartProducts}) {


  const handleClose = () =>{
      setshowCart(false)
  }


  return (
    <div className='basket-container'>
        <div className='cart-close-icon'>
          <FaTimes style={{height:"30px",width:"30px"}} onClick={handleClose}/>
        </div>
        <ProductTable cartProducts={cartProducts}
        RemoveFromCart={RemoveFromCart}
        SetcartProducts={SetcartProducts}
        />
        <Suminfo/>
        <BasketFooter
        cartProducts={cartProducts}
        close={setshowCart}
         />

    </div>
  )
}

export default Cart