import { configureStore } from '@reduxjs/toolkit'
import {
    newProductReducer,
    newReviewReducer,
    productDetailsReducer,
    productReducer,
    productReviewsReducer,
    productsReducer,
    reviewReducer,
  } from "./reducers/productReducer";
  
  import {
    allUsersReducer,
    forgotPasswordReducer,
    profileReducer,
    userDetailsReducer,
    userReducer,
  } from "./reducers/userReducer";
  
  import { cartReducer } from "./reducers/cartReducer";

  import {
    allOrdersReducer,
    myOrdersReducer,
    newOrderReducer,
    orderDetailsReducer,
    orderReducer,
  } from "./reducers/orderReducer";

const store = configureStore({
    reducer:{
        products: productsReducer,
        productDetails: productDetailsReducer,
        user: userReducer,
        profile: profileReducer,
        forgotPassword: forgotPasswordReducer,
        cart: cartReducer,
        newOrder: newOrderReducer,
        myOrders: myOrdersReducer,
        orderDetails: orderDetailsReducer,
        newReview: newReviewReducer,
        newProduct: newProductReducer,
        product: productReducer,
        allOrders: allOrdersReducer,
        order: orderReducer,
        allUsers: allUsersReducer,
        userDetails: userDetailsReducer,
        productReviews: productReviewsReducer,
        review: reviewReducer,
    }
});

export default store