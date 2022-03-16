// // Get an ID
 export const GetId = (id)=>{
     return id
 }

 // ADD an ID to a product
 export const AddId = (product) =>{
    const id = Math.floor(Math.random()* 100 +1)
    const newProduct = {id, ...product}
    return newProduct
}

// UPDATE PRODUCT QTY
 export const UpdateProductQty = (id,value)=>{
    const data = {
        id: id,
        value: value
    }
    return data
  }