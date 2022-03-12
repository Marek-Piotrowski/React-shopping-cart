import BasketProduct from './BasketProduct'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext/CartContext';

const ProductTable = () => {

  const {cartProducts} = useContext(CartContext)


  return (
    <> {cartProducts.length >0 ? cartProducts.map(product => (<BasketProduct
      key={product.id}
      product={product}
      />) ) : <div> No products</div>}
    </>
  )
}


export default ProductTable