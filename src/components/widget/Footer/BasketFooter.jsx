import React from 'react'
import { FaTruck } from 'react-icons/fa'
import { useState,useEffect,useContext } from 'react'
import PropTypes from 'prop-types';
import { CartContext } from '../../../context/CartContext/CartContext';

const BasketFooter = ({handleClose}) => {

  const [totalPrice,setTotalPrice] = useState(0)
  const {cartProducts} = useContext(CartContext)

  useEffect(()=>{
     const sum = cartProducts.reduce((a,v)=> a=a+v.price *v.qty,0).toFixed(2).replace(/[.,]00/, "")
     setTotalPrice(sum)
     console.log(cartProducts)
    //console.log("this is from the cart  "+ sum)
  },[cartProducts])




  return (
    <div className='basket-footer'>
        <div className='basket-wrapper'>
          <div className='basket-info' >
            <FaTruck style={{marginRight: "5px"}}/>
            <span>Free Delivery</span>
          </div>
          <span className='basket-return' onClick={()=>handleClose()}>Return</span>
        </div>

        <div className='basket-sum-price'>
          <div>
            {/* if number is NaN display 0 */}
             <span> {isNaN(totalPrice) ? 0 : totalPrice} $</span>
          </div>
          <button className='basket-pay-button'>Pay</button>
        </div>

    </div>
  )
}

BasketFooter.propTypes = {
  handleClose: PropTypes.func.isRequired,

}

export default BasketFooter