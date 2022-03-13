// Remove from Cart
export const RemoveFromCart = (id)=>{
    return id
}

// ADD to CART
export const AddToCart = (product) =>{
    const id = Math.floor(Math.random()* 100 +1)
    const newProduct = {id, ...product}
    return newProduct
}

// UPDATE CART PRODUCT QTY
 export const UpdateProduct = (id,value)=>{
    const data = {
        id: id,
        value: value
    }
    return data
 }