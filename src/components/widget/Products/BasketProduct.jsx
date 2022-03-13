import { FaTrashAlt } from 'react-icons/fa'
import React, { useState,useEffect,useContext } from 'react'
import PropTypes from 'prop-types';
import { CartContext } from '../../../context/CartContext/CartContext';
import { RemoveFromCart,UpdateProduct } from '../../../context/CartContext/CartActions';

const BasketProduct = ({product}) => {

  const {cartProducts,dispatch} = useContext(CartContext)

  const [quantity, setQuantity] = useState(product.qty)
  const [showProduct,setShowProduct] = useState(true)


useEffect(()=>{
  const data = UpdateProduct(product.id,quantity)
  dispatch({type: 'UPDATE_PRODUCT_CART' ,payload: data})
},[quantity,showProduct])

const handleOnClick = () =>{
  // animate removing
  setShowProduct(false)
  // we need to use set timeout to delay from removing from the dom, and just give the time to fully animate
// actually remove from the dom
  const id = RemoveFromCart(product.id)

  setTimeout(()=>dispatch({
        type: 'REMOVE_FROM_CART',
        payload: id
     }),500)
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