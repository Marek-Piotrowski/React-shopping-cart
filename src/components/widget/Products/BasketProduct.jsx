import { FaTrashAlt } from 'react-icons/fa'
import React, { useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {GetId,UpdateProductQty} from '../../../features/cart/cartHelpers'
import {RemoveFromCart,UpdateProduct} from '../../../features/cart/cartSlice'

const BasketProduct = ({product}) => {

  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(product.qty)
  const [showProduct,setShowProduct] = useState(true)


useEffect(()=>{
  const data = UpdateProductQty(product.id,quantity)
  dispatch(UpdateProduct(data))
},[quantity,showProduct])

const handleOnClick = () =>{
  // animate removing
  setShowProduct(false)
  // we need to use set timeout to delay from removing from the dom, and just give the time to fully animate
// actually remove from the dom
  const id = GetId(product.id)

  setTimeout(()=>dispatch(RemoveFromCart(id)),500)
}


  return (
    <div className={`${showProduct ? "basket-product show-product" : "basket-product"}`}>

     <div className='basket-product-img' >
        <img src={product.imageUrl} alt="80x80px" />
     </div>

     <div className='basket-product-info'>
      <h4 className='product-title'>{product.name}</h4>
        <div className='product-info'>
          <p>Type:</p>{product.type}
        </div>
        <div className='product-sensor'>
          <p>Sensor:</p>{product.sensor}
        </div>
     </div>

     <div className='basket-price-info'>
        {product.promotionalPrice && <div className="promo-price">{product.promotionalPrice} $</div>}
        <div className="regular-price">{product.price} $</div>
        <div className='basket-price-quantity'>
          <p>pcs</p>
          <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
          <FaTrashAlt onClick={handleOnClick}/>
        </div>
     </div>

    </div>
  )
}

BasketProduct.propTypes = {
  product:PropTypes.object.isRequired,
}

export default BasketProduct