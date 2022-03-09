import React from 'react'
import { FaTimes } from 'react-icons/fa';
import BasketFooter from './Footer/BasketFooter';
import ProductTable from './Products/ProductTable';
import Suminfo from './Products/Suminfo';
import PropTypes from 'prop-types';


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

Cart.propTypes = {
  setshowCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired,
  RemoveFromCart: PropTypes.func.isRequired,
  SetcartProducts: PropTypes.func.isRequired

}

export default Cart