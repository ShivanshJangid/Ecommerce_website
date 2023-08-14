import { createReducer } from "@reduxjs/toolkit";
import { 
    ADD_TO_CART, 
    REMOVE_CART_ITEM, 
    SAVE_SHIPPING_INFO 
} from "../constants/cartConstants";

const getLocalStorageData = ()=>{
    let localStorageData = localStorage.getItem('cartItems');
    if(!localStorageData){
        return [];
    }else{
        return JSON.parse(localStorageData);
    }
}

const getLocalStorageDataShippingInfo = ()=>{
    let localStorageData = localStorage.getItem('shippingInfo');
    if(!localStorageData){
        return {};
    }else{
        return JSON.parse(localStorageData);
    }
}

let initialState = {
    cartItems : getLocalStorageData(),
    shippingInfo: getLocalStorageDataShippingInfo()
};

// let initialState = {
//     cart: {
//       cartItems: localStorage.getItem("cartItems")
//         ? JSON.parse(localStorage.getItem("cartItems"))
//         : [],
//       shippingInfo: localStorage.getItem("shippingInfo")
//         ? JSON.parse(localStorage.getItem("shippingInfo"))
//         : {},
//     },
//   };

export const cartReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(ADD_TO_CART,(state = { cartItems: [], shippingInfo: {} },action)=>{

                const item = action.payload;
                const isItemExist =  state.cartItems.some((i) => i.product === item.product);
                if(isItemExist) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map((i)=>(
                            i.product === item.product?item:i
                        )),
                    };
                }else{
                    return {...state,cartItems: [...state.cartItems, item]};
                }
        })
        .addCase(REMOVE_CART_ITEM,(state = { cartItems: [], shippingInfo: {} },action)=>{
            return {
                ...state,
                cartItems: state.cartItems.filter((i)=> i.product !== action.payload)
            };
        })
        .addCase(SAVE_SHIPPING_INFO,(state = { cartItems: [], shippingInfo: {} },action)=>{
            return {
                ...state,
                shippingInfo: action.payload
            };
        })
        .addDefaultCase((state = { cartItems: [], shippingInfo: {} },action)=>{
            return state;
        })
        
});