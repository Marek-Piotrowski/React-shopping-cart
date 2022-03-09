import React from 'react'
import BasketProduct from './BasketProduct'
import PropTypes from 'prop-types';

const ProductTable = ({cartProducts,RemoveFromCart,SetcartProducts}) => {


  return (
    <> {cartProducts.length >0 ? cartProducts.map(product => (<BasketProduct
      key={product.id}
      product={product}
      RemoveFromCart={RemoveFromCart}
      cartProducts={cartProducts}
      SetcartProducts={SetcartProducts}/>) ) : <div> No products</div>}

    </>
  )
}

ProductTable.propTypes = {
  cartProducts: PropTypes.array.isRequired,
  RemoveFromCart: PropTypes.func.isRequired,
  SetcartProducts: PropTypes.func.isRequired

}


export default ProductTable