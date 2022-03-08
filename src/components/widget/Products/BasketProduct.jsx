import { FaTrashAlt } from 'react-icons/fa'
import React, { useState,useEffect } from 'react'

const BasketProduct = ({product,RemoveFromCart,cartProducts,SetcartProducts}) => {
  const [quantity, setQuantity] = useState(product.qty)

  // Update selected product quantity
  const updateProduct = (id,value)=>{
    SetcartProducts(cartProducts.map(item=> item.id===id? {...product, qty: parseInt(value) }: item))
}

useEffect(()=>{
  updateProduct(product.id,quantity)

},[quantity])


  return (
    <div className='basket-product'>

     <div className='basket-product-img' >
        <img src={product.imageUrl} alt="80x80px" />
     </div>

     <div className='basket-product-info'>
      <h4 className='product-title'>{product.name}</h4>
        <div className='product-info'>
          <p>Typ myszki:</p>{product.type}
        </div>
        <div className='product-sensor'>
          <p>Sensor:</p>{product.sensor}
        </div>
     </div>

     <div className='basket-price-info'>
        {product.promotionalPrice && <div className="promo-price">{product.promotionalPrice} zł</div>}
        <div className="regular-price">{product.price} zł</div>
        <div className='basket-price-quantity'>
          <p>szt.</p>
          <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
          <FaTrashAlt onClick={()=>RemoveFromCart(product.id)}/>
        </div>
     </div>

    </div>
  )
}

export default BasketProduct