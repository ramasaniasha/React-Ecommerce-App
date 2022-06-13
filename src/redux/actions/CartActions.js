import axios from "../../Api/axios";
// import { useNavigate } from "react-router-dom";

export const GetallProducts = (search) => async (dispatch) => {
    console.log(search);
    const res = await axios.get(`http://localhost:3008/products?q=${search}`);
    const products = res.data;
    dispatch(
        {
            type: "GET-PRODUCTS",
            products: products
        }
    )

}

export const addToCarthadler = (product) => async (dispatch) => {
       dispatch(
        {
            type: "ADDTO-CART",
            payload: {
                product,
                quantity: 1
            }
        }
    )

}
export const decreaseQty = (item)=> async (dispatch) => {
    dispatch(
     {
         type: "REMOVE-CART",
         RemoveItem:item
     }
 )

}
