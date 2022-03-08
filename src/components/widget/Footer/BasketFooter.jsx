import React from 'react'
import { FaTruck } from 'react-icons/fa'
import { useState,useEffect } from 'react'


const BasketFooter = ({close,cartProducts}) => {

  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(()=>{
    const sum = cartProducts.reduce((a,v)=> a=a+v.price *v.qty,0).toFixed(2)
    setTotalPrice(sum)
    console.log("to jest suma z koszyka  "+ sum)
  },[cartProducts])

  const handleClose = () =>{
    close(false)
  }

  return (
    <div className='basket-footer'>
        <div className='basket-wrapper'>
          <div className='basket-info' >
            <FaTruck style={{marginRight: "5px"}}/>
            <span>Darmowa dostawa</span>
          </div>
          <span className='basket-return' onClick={handleClose}>wróć</span>
        </div>

        <div className='basket-sum-price'>
          <div>
             <span> {totalPrice} zł</span>
          </div>
          <button className='basket-pay-button'>opłać</button>
        </div>

    </div>
  )
}

export default BasketFooter