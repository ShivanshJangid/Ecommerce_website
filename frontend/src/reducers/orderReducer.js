import { createReducer } from "@reduxjs/toolkit";
import { 
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_RESET,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_RESET,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/orderConstants";

let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
  };

export const newOrderReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(CREATE_ORDER_REQUEST,(state = {}, action)=>{
            return {
                ...state,
                loading: true
            }
        })
        .addCase(CREATE_ORDER_SUCCESS,(state = {}, action)=>{
            return {
                loading: false,
                order: action.payload
            }
        })
        .addCase(CREATE_ORDER_FAIL,(state = {}, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addCase(CLEAR_ERRORS,(state = {}, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {products:[]},action)=>{
            return state
        })
        
});


export const myOrdersReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(MY_ORDERS_REQUEST,(state = {}, action)=>{
            return {
                loading: true
            }
        })
        .addCase(MY_ORDERS_SUCCESS,(state = {}, action)=>{
            return {
                loading: false,
                orders: action.payload
            }
        })
        .addCase(MY_ORDERS_FAIL,(state = {}, action)=>{
            return {
                loading: false,
                error: action.payload
            }
        })
        .addCase(CLEAR_ERRORS,(state = {}, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {products:[]},action)=>{
            return state
        })
        
});


export const allOrdersReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(ALL_ORDERS_REQUEST,(state = {}, action)=>{
            return {
                loading: true
            }
        })
        .addCase(ALL_ORDERS_SUCCESS,(state = {}, action)=>{
            return {
                loading: false,
                orders: action.payload
            }
        })
        .addCase(ALL_ORDERS_FAIL,(state = {}, action)=>{
            return {
                loading: false,
                error: action.payload,
            }
        })
        .addCase(CLEAR_ERRORS,(state = {}, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {products:[]},action)=>{
            return state
        })
        
});


export const orderReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(UPDATE_ORDER_REQUEST,(state = {}, action)=>{
            return {
                ...state,
                loading: true
            }
        })
        .addCase(DELETE_ORDER_REQUEST,(state = {}, action)=>{
            return {
                ...state,
                loading: true
            }
        })
        .addCase(UPDATE_ORDER_SUCCESS,(state = {}, action)=>{
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        })
        .addCase(DELETE_ORDER_SUCCESS,(state = {}, action)=>{
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        })
        .addCase(UPDATE_ORDER_FAIL,(state = {}, action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })
        .addCase(DELETE_ORDER_FAIL,(state = {}, action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })
        .addCase(UPDATE_ORDER_RESET,(state = {}, action)=>{
            return {
                ...state,
                isUpdated: false
            }
        })
        .addCase(DELETE_ORDER_RESET,(state = {}, action)=>{
            return {
                ...state,
                isDeleted: false,
            }
        })
        .addCase(CLEAR_ERRORS,(state = {}, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {products:[]},action)=>{
            return state
        })
        
});


export const orderDetailsReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(ORDER_DETAILS_REQUEST,(state = {}, action)=>{
            return {
                loading: true
            }
        })
        .addCase(ORDER_DETAILS_SUCCESS,(state = {}, action)=>{
            return {
                loading: false,
                order: action.payload,
            }
        })
        .addCase(ORDER_DETAILS_FAIL,(state = {}, action)=>{
            return {
                loading: false,
                error: action.payload,
            }
        })
        .addCase(CLEAR_ERRORS,(state = {}, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {products:[]},action)=>{
            return state
        })
        
});
