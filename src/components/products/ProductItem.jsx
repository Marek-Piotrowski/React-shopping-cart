
import { FaPlusCircle } from 'react-icons/fa';

function ProductItem({imageUrl,name,type,sensor,price,promotionalPrice}) {


  return (
    <div className="product-item-container">
      <img src={imageUrl} alt="product-image" className="product-image" />
      <h4 className='product-title'>{name}</h4>
      <div className='product-info'>
        <p className='product-type'>Typ myszki:</p>{type}
        <p className='product-sensor'>Sensor:</p>{sensor}
      </div>
      <div className='product-price'>
        {promotionalPrice ? promotionalPrice : price }
      </div>
      <div className="add-to-cart">
          <FaPlusCircle/>
          <p>Dodaj do koszyka</p>
      </div>

    </div>
  )
}

export default ProductItem