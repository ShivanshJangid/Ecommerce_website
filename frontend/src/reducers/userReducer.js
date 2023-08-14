import { createReducer} from '@reduxjs/toolkit';
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_RESET,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_RESET,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    UPDATE_USER_REQUEST,
    DELETE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    DELETE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    DELETE_USER_FAIL,
    UPDATE_USER_RESET,
    DELETE_USER_RESET,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
} from '../constants/userConstants'

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

export const userReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(LOGIN_REQUEST,(state={user:{}},action)=>{
            return {
                loading:true,
                isAuthenticated:false
            }
        })
        .addCase(REGISTER_USER_REQUEST,(state={user:{}},action)=>{
            return {
                loading:true,
                isAuthenticated:false
            }
        })
        .addCase(LOAD_USER_REQUEST,(state={user:{}},action)=>{
            return {
                loading:true,
                isAuthenticated:false
            }
        })
        .addCase(LOGIN_SUCCESS,(state = {user:{}},action)=>{
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        })
        .addCase(REGISTER_USER_SUCCESS,(state = {user:{}},action)=>{
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        })
        .addCase(LOAD_USER_SUCCESS,(state = {user:{}},action)=>{
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        })
        .addCase(LOGIN_FAIL,(state = {user:{}},action)=>{
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        })
        .addCase(REGISTER_USER_FAIL,(state = {user:{}},action)=>{
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        })
        .addCase(LOAD_USER_FAIL,(state = {user:{}},action)=>{
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        })
        
        .addCase(LOGOUT_SUCCESS,(state = {user:{}},action)=>{
            return {
                loading: false,
                user: null,
                isAuthenticated: false
            }
        })

        .addCase(LOGOUT_FAIL,(state = {user:{}},action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        })
        .addCase(CLEAR_ERRORS,(state = {user:{}},action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = {user:{}},action)=>{
            return state
        })
        
});




export const profileReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(UPDATE_PROFILE_REQUEST,(state={},action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(UPDATE_PASSWORD_REQUEST,(state={},action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(UPDATE_USER_REQUEST,(state={},action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(DELETE_USER_REQUEST,(state={},action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(UPDATE_PROFILE_SUCCESS,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        })
        .addCase(UPDATE_PASSWORD_SUCCESS,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        })
        .addCase(UPDATE_USER_SUCCESS,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        })
        .addCase(DELETE_USER_SUCCESS,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                isDeleted: action.payload.success,
                message: action.payload.message,
            }
        })
        .addCase(UPDATE_PROFILE_FAIL,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        })
        .addCase(UPDATE_PASSWORD_FAIL,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        })
        .addCase(UPDATE_USER_FAIL,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        })
        .addCase(DELETE_USER_FAIL,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        })
        .addCase(UPDATE_PROFILE_RESET,(state = {},action)=>{
            return {
                ...state,
                isUpdated: false
            }
        })
        .addCase(UPDATE_PASSWORD_RESET,(state = {},action)=>{
            return {
                ...state,
                isUpdated: false
            }
        })
        .addCase(UPDATE_USER_RESET,(state = {},action)=>{
            return {
                ...state,
                isUpdated: false
            }
        })
        .addCase(DELETE_USER_RESET,(state = {},action)=>{
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




export const forgotPasswordReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(FORGOT_PASSWORD_REQUEST,(state={},action)=>{
            return {
                ...state,
                loading:true,
                error: null
            }
        })
        .addCase(RESET_PASSWORD_REQUEST,(state={},action)=>{
            return {
                ...state,
                loading:true,
                error: null
            }
        })
        .addCase(FORGOT_PASSWORD_SUCCESS,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        })
        .addCase(RESET_PASSWORD_SUCCESS,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                success: action.payload
            }
        })
        .addCase(FORGOT_PASSWORD_FAIL,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        })
        .addCase(RESET_PASSWORD_FAIL,(state = {},action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload
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




export const allUsersReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(ALL_USERS_REQUEST,(state = { users: [] }, action)=>{
            return {
                ...state,
                loading: true,
            }
        })
        .addCase(ALL_USERS_SUCCESS,(state = { users: [] }, action)=>{
            return {
                ...state,
                loading: false,
                users: action.payload,
            }
        })
        .addCase(ALL_USERS_FAIL,(state = { users: [] }, action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })
        .addCase(CLEAR_ERRORS,(state = { users: [] }, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = { users: [] }, action)=>{
            return state
        })
        
});




export const userDetailsReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(USER_DETAILS_REQUEST,(state = { user: {} }, action)=>{
            return {
                ...state,
                loading: true,
            }
        })
        .addCase(USER_DETAILS_SUCCESS,(state = { user: {} }, action)=>{
            return {
                ...state,
                loading: false,
                user: action.payload,
            }
        })
        .addCase(USER_DETAILS_FAIL,(state = { user: {} }, action)=>{
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })
        .addCase(CLEAR_ERRORS,(state = { user: {} }, action)=>{
            return {
                ...state,
                error: null
            }
        })
        .addDefaultCase((state = { user: {} }, action)=>{
            return state
        })
        
});





