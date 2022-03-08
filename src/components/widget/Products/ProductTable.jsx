import React from 'react'
import BasketProduct from './BasketProduct'

const ProductTable = ({cartProducts,RemoveFromCart,SetcartProducts}) => {


  return (
    <> {cartProducts.length >0 ? cartProducts.map(product => (<BasketProduct key={product.id} product={product} RemoveFromCart={RemoveFromCart}
      cartProducts={cartProducts} SetcartProducts={SetcartProducts}/>) ) : <div> No products</div>}

    </>
  )
}


export default ProductTable