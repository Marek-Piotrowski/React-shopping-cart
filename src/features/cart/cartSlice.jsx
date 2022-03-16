import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    cartProducts: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        RemoveFromCart: (state, action) =>{
            state.cartProducts = state.cartProducts.filter(product => product.id !== action.payload)
        },
        AddToCart: (state, action) =>{
            state.cartProducts = [...state.cartProducts, action.payload]
        },
        UpdateProduct: (state, action) =>{
            state.cartProducts = state.cartProducts.map(item=> item.id===action.payload.id? {...item, qty: parseInt(action.payload.value) }: item)
        }
    },
    extraReducers: (builder) =>{

    }
})

export const {RemoveFromCart,AddToCart,UpdateProduct} = cartSlice.actions

export default cartSlice.reducer