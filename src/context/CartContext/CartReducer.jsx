const CartReducer = (state, action)=>{
    switch (action.type){
        case 'REMOVE_FROM_CART':
            return {...state,
                 cartProducts: state.cartProducts.filter(product => product.id !== action.payload)}
        case 'ADD_TO_CART':
            return {...state,
                 cartProducts: [...state.cartProducts, action.payload]}
         case 'UPDATE_PRODUCT_CART':
             return {...state,
            cartProducts: state.cartProducts.map(item=> item.id===action.payload.id? {...item, qty: parseInt(action.payload.value) }: item)}
        default:
            return state
    }
}

export default CartReducer