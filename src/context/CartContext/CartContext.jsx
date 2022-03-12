import { createContext,useReducer} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const initialState = {
        cartProducts: []
    }

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

    const [state, dispatch] = useReducer(CartReducer,initialState)



    // Remove from Cart
    const RemoveFromCart = (id)=>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        })
    }

    // ADD to CART
    const AddToCart = (product) =>{
        const id = Math.floor(Math.random()* 100 +1)
        const newProduct = {id, ...product}
        dispatch({type:'ADD_TO_CART',payload: newProduct })
    }

    // UPDATE CART PRODUCT QTY
     const UpdateProduct = (id,value)=>{
        const data = {
            id: id,
            value: value
        }
        dispatch({type:'UPDATE_PRODUCT_CART',payload: data})
     }


    return (
        <CartContext.Provider value={{
            cartProducts: state.cartProducts,
            RemoveFromCart,
            AddToCart,
            UpdateProduct}}>
            {children}
        </CartContext.Provider>
    )
}

