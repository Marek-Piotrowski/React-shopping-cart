import { createContext,useReducer} from "react";
import CartReducer from "./CartReducer";

// create context
export const CartContext = createContext();

// create komponent that returns it
export const CartProvider = ({children}) =>{

    const initialState = {
        cartProducts: []
    }

    const [state, dispatch] = useReducer(CartReducer,initialState)

    return (
        <CartContext.Provider value={{
            ...state,
            dispatch,
            }}>
            {children}
        </CartContext.Provider>
    )
}

