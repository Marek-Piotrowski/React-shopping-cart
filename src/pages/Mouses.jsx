import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Breadcrump from "../components/layout/Breadcrump"
import ProductsList from "../components/products/ProductsList"

function Mouses() {
  return (
    <div className="container">
        <Header/>
        <Breadcrump/>
        <ProductsList/>
        <Footer/>
    </div>
  )
}

export default Mouses