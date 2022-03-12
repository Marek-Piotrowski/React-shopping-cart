import React from 'react'
import { FaTimes } from 'react-icons/fa';
import BasketFooter from './Footer/BasketFooter';
import ProductTable from './Products/ProductTable';
import Suminfo from './Products/Suminfo';
import PropTypes from 'prop-types';

function Cart({setshowCart}) {


  const handleClose = () =>{
      setshowCart(false)
  }


  return (
    <div className='basket-container'>
        <div className='cart-close-icon'>
          <FaTimes style={{height:"30px",width:"30px"}} onClick={handleClose}/>
        </div>
        <ProductTable/>
        <Suminfo/>
        <BasketFooter
        handleClose={handleClose}
         />

    </div>
  )
}

Cart.propTypes = {
  setshowCart: PropTypes.func.isRequired,
}

export default Cart