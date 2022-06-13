import React from 'react';

const initialState = {
    products: [],
}


const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET-PRODUCTS":

            return {
                ...state,
                products: action.products
            }
       
        default: return state;
    }
}
export default ProductReducer;