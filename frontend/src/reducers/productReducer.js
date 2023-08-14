import { createReducer } from '@reduxjs/toolkit';
import { 
    ALL_PRODUCT_FAIL, 
    ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS, 
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    CLEAR_ERRORS, 
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,
    DELETE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,
    UPDATE_PRODUCT_RESET,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET
} from '../constants/productConstants';

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

export const productsReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(ALL_PRODUCT_REQUEST,(state = {products:[]},action)=>{
            return {
                loading:true,
                products:[]
            }
        })
        .addCase(ADMIN_PRODUCT_REQUEST,(state = {products:[]},action)=>{
            return {
                loading:true,
                products:[]
            }
        })
        .addCase(ALL_PRODUCT_SUCCESS,(state = {products:[]},action)=>{
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
            }
        })
        .addCase(ADMIN_PRODUCT_SUCCESS,(state = {products:[]},action)=>{
            return {
                loading: false,
                products: action.payload
            }
        })
        .addCase(ALL_PRODUCT_FAIL,(state = {products:[]},action)=>{
            return {
                loading: false,
                error: action.payload
            }
        })
        .addCase(ADMIN_PRODUCT_FAIL,(state = {products:[]},action)=>{
            return {
                loading: false,
                error: action.payload
            }
        })
        .addCase(CLEAR_ERRORS,(state = {products:[]},action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {products:[]},action)=>{
            return state
        })
        
});


export const newProductReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(NEW_PRODUCT_REQUEST,(state = { product: {} }, action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(NEW_PRODUCT_SUCCESS,(state = { product: {} }, action)=>{
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product,
            };
        })
        .addCase(NEW_PRODUCT_FAIL,(state = { product: {} }, action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })
        .addCase(NEW_PRODUCT_RESET,(state = { product: {} }, action)=>{
            return {
                ...state,
                success: false,
            }
        })
        .addCase(CLEAR_ERRORS,(state = { product: {} }, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = { product: {} }, action)=>{
            return state
        })
        
});



export const productReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(DELETE_PRODUCT_REQUEST,(state = {}, action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(UPDATE_PRODUCT_REQUEST,(state = {}, action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(DELETE_PRODUCT_SUCCESS,(state = {}, action)=>{
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        })
        .addCase(UPDATE_PRODUCT_SUCCESS,(state = {}, action)=>{
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        })
        .addCase(DELETE_PRODUCT_FAIL,(state = {}, action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })
        .addCase(UPDATE_PRODUCT_FAIL,(state = {}, action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })
        .addCase(DELETE_PRODUCT_RESET,(state = {}, action)=>{
            return {
                ...state,
                isDeleted: false,
            }
        })
        .addCase(UPDATE_PRODUCT_RESET,(state = {}, action)=>{
            return {
                ...state,
                isUpdated: false,
            }
        })
        .addCase(CLEAR_ERRORS,(state = {}, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {}, action)=>{
            return state
        })
        
});


export const productDetailsReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(PRODUCT_DETAILS_REQUEST,(state = {product:{}},action)=>{
            return {
                loading:true,
                ...state
            }
        })
        .addCase(PRODUCT_DETAILS_SUCCESS,(state = {product:{}},action)=>{
            return {
                loading: false,
                product: action.payload
            }
        })
        .addCase(PRODUCT_DETAILS_FAIL,(state = {product:{}},action)=>{
            return {
                loading: false,
                error: action.payload
            }
        })
        .addCase(CLEAR_ERRORS,(state = {product:{}},action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {product:{}},action)=>{
            return state
        })
        
});


export const newReviewReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(NEW_REVIEW_REQUEST,(state = {},action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(NEW_REVIEW_SUCCESS,(state = {},action)=>{
            return {
                loading: false,
                success: action.payload
            }
        })
        .addCase(NEW_REVIEW_FAIL,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        })
        .addCase(NEW_REVIEW_RESET,(state = {},action)=>{
            return {
                ...state,
                success: false
            }
        })
        .addCase(CLEAR_ERRORS,(state = {},action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {},action)=>{
            return state
        })
        
});


export const productReviewsReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(ALL_REVIEW_REQUEST,(state = { reviews: [] }, action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(ALL_REVIEW_SUCCESS,(state = { reviews: [] }, action)=>{
            return {
                loading: false,
                reviews: action.payload
            }
        })
        .addCase(ALL_REVIEW_FAIL,(state = { reviews: [] }, action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        })
        .addCase(CLEAR_ERRORS,(state = { reviews: [] }, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = { reviews: [] }, action)=>{
            return state
        })
        
});


export const reviewReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(DELETE_REVIEW_REQUEST,(state = {},action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(DELETE_REVIEW_SUCCESS,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            }
        })
        .addCase(DELETE_REVIEW_FAIL,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })
        .addCase(DELETE_REVIEW_RESET,(state = {},action)=>{
            return {
                ...state,
                isDeleted: false,
            }
        })
        .addCase(CLEAR_ERRORS,(state = {},action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {},action)=>{
            return state
        })
        
});