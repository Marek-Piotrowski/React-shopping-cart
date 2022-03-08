import { useState } from "react"
import { FaPlusCircle } from 'react-icons/fa';

function ProductItem({isNew,imageUrl,name,type,sensor,price,promotionalPrice,AddToCart}) {

  const [showButton, setShowButton] = useState(false)
  const [product, setProduct] = useState({
    imageUrl,
    name,
    type,
    sensor,
    price,
    promotionalPrice,
    qty: 1,
  })

  const handleMouseEnter = e => {
    setShowButton(true)
  }

  const handleMouseLeave = e => {
    setShowButton(false)
  }


  return (
    <div className="product-item-container"
      onMouseEnter={handleMouseEnter}

      onMouseLeave={handleMouseLeave}
    >
      {isNew && <div className="new-item">
        Nowość!
        </div>}
      <img src={imageUrl} alt="main" className="product-image" />
      <h4 className='product-title'>{name}</h4>
      <div className='product-info'>
        <p>Typ myszki:</p>{type}
      </div>
      <div className='product-sensor'>
        <p>Sensor:</p>{sensor}
      </div>


      <div className='product-price'>
        {promotionalPrice && <div className="promo-price">{promotionalPrice} zł</div>}
        <div className="regular-price">{price} zł</div>
      </div>
      {showButton && <div className="add-to-cart" onClick={()=>AddToCart(product)}  >
        <FaPlusCircle style={{marginRight: "10px"}}/>
        Dodaj do koszyka
      </div>}
    </div>
  )
}

export default ProductItem