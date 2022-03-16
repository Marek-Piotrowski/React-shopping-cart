import BasketProduct from './BasketProduct'
import { useSelector } from 'react-redux'

const ProductTable = () => {

  const {cartProducts} = useSelector(state=>state.cart)


  return (
    <> {cartProducts.length >0 ? cartProducts.map(product => (<BasketProduct
      key={product.id}
      product={product}
      />) ) : <div> No products</div>}
    </>
  )
}


export default ProductTable