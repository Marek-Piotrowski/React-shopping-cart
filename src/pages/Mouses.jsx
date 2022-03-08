import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Breadcrump from "../components/layout/Breadcrump"
import ProductsList from "../components/products/ProductsList"
import { useState, useEffect } from "react"

function Mouses() {
  const [cartProducts,SetcartProducts] = useState([])


  useEffect(()=>{
    console.log(cartProducts)
  },[cartProducts])

  // Add to Cart
  const AddToCart = (product) =>{
    const id = Math.floor(Math.random()* 100 +1)
    const newProduct = {id, ...product}
    //console.log(cartProducts)
    SetcartProducts([...cartProducts, newProduct])
    //console.log(cartProducts)
  }

  // Remove from Cart
  const RemoveFromCart = (id)=>{
    SetcartProducts(
      cartProducts.filter(product => product.id !== id)
    )
    //cartProducts.filter(product => product.id !== id)
    //console.log(id)
  }




  return (
    <div className="container">
        <Header
        cartProducts={cartProducts}
        RemoveFromCart={RemoveFromCart}
        SetcartProducts={SetcartProducts}
        />
        <Breadcrump/>
        <ProductsList
        AddToCart={AddToCart}

        />
        <Footer/>
    </div>
  )
}

export default Mouses