import { act } from '@testing-library/react';
import React from 'react';

// const initialState = {
//     cart: []
// }
const cart = [];


const CartReducer = (state = cart, action) => {
    switch (action.type) {
        case "ADDTO-CART":
            const { product, quantity } = action.payload;

            const productExit = state.find((item) => item.id === product.id)
            if (productExit) {
                return state.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item))

            } else {
                return [...state, { ...product, qty: 1 }]
            }
        case "REMOVE-CART":
              console.log(action)
              const CartItem = action.RemoveItem;
              const ItemsList = state.find((item) => item.id === CartItem.id);

              if (ItemsList.qty === 1) {
                return (state.filter((item) => item.id !== CartItem.id))
              } else {
                return (state.map((item) => (item.id === CartItem.id ? 
                    { ...ItemsList, qty: ItemsList.qty - 1 } : item)))
              }
          



        default: return state;
    }
}
export default CartReducer;