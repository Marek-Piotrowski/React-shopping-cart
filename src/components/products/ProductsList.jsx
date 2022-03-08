import ProductItem from "./ProductItem"
import { useEffect, useState } from "react"




function ProductsList({AddToCart}) {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = () =>{
    fetch('products.json',
      {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
    ).then(res => res.json())
    .then(data => setData(data.products))

  }

  return (
    <div className="productsList-container">
      <>

        { data.map(item => (<ProductItem
        key={item.name}
        imageUrl={item.imageUrl}
        name={item.name}
        type={item.type}
        sensor={item.sensor}
        promotionalPrice={item.promotionalPrice}
        price={item.price}
        isNew={item.isNew}
        AddToCart={AddToCart}

        />))}
      </>
    </div>
  )
}

export default ProductsList