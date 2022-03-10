import React from 'react'
import { FaTruck } from 'react-icons/fa'
import { useState,useEffect } from 'react'
import PropTypes from 'prop-types';


const BasketFooter = ({close,cartProducts}) => {

  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(()=>{
    const sum = cartProducts.reduce((a,v)=> a=a+v.price *v.qty,0).toFixed(2).replace(/[.,]00/, "")
    setTotalPrice(sum)
    //console.log("this is from the cart  "+ sum)
  },[cartProducts])

  const handleClose = () =>{
    close(false)
  }

  return (
    <div className='basket-footer'>
        <div className='basket-wrapper'>
          <div className='basket-info' >
            <FaTruck style={{marginRight: "5px"}}/>
            <span>Free Delivery</span>
          </div>
          <span className='basket-return' onClick={handleClose}>Return</span>
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
  cartProducts: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,

}

export default BasketFooter