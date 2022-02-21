import { useState } from "react"
import { FaPlusCircle } from 'react-icons/fa';

function ProductItem({imageUrl,name,type,sensor,price,promotionalPrice}) {

  const [showButton, setShowButton] = useState(false)

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
      <img src={imageUrl} alt="product-image" className="product-image" />
      <h4 className='product-title'>{name}</h4>
      <div className='product-info'>
        <p>Typ myszki:</p>{type}
      </div>
      <div className='product-sensor'>
        <p>Sensor:</p>{sensor}
      </div>


      <div className='product-price'>
        {promotionalPrice ? promotionalPrice : price } <p> zł</p>
      </div>
      {showButton && <div className="add-to-cart" >
        <FaPlusCircle style={{marginRight: "10px"}}/>
        Dodaj do koszyka
        </div>}
    </div>
  )
}

export default ProductItem