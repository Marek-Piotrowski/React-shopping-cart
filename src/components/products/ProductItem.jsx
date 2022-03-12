import { useState, useContext } from "react"
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { CartContext } from "../../context/CartContext/CartContext";

function ProductItem({isNew,imageUrl,name,type,sensor,price,promotionalPrice}) {

  const {AddToCart} = useContext(CartContext)
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
        New!
        </div>}
      <img src={imageUrl} alt="main" className="product-image" />
      <h4 className='product-title'>{name}</h4>
      <div className='product-info'>
        <p>Type:</p>{type}
      </div>
      <div className='product-sensor'>
        <p>Sensor:</p>{sensor}
      </div>


      <div className='product-price'>
        {promotionalPrice && <div className="promo-price">{promotionalPrice} $</div>}
        <div className="regular-price">{price} $</div>
      </div>
      {<div className={`${!showButton ? "add-to-cart": "add-to-cart show"}`} onClick={()=>AddToCart(product)}  >
        <FaPlusCircle style={{marginRight: "10px"}}/>
        Add to cart
      </div>}
    </div>
  )
}

ProductItem.propTypes = {
  imageUrl:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  sensor:PropTypes.string.isRequired,
  promotionalPrice:PropTypes.number,
  price:PropTypes.number.isRequired,
  isNew:PropTypes.bool.isRequired,
}

export default ProductItem