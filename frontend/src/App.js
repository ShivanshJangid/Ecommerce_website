import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";


function App() {


  const {isAuthenticated, user} = useSelector(state=>state.user)

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const {data} = await axios.get('/api/v1/stripeapikey');
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka']
      }
    });

    store.dispatch(loadUser());

    getStripeApiKey();

  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <div>
      <Header /> 

      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
      <Route path='/' element={<Home />} />
      {stripeApiKey && (
          <Route
            path='/process/payment'
            element={(
              <Elements stripe={loadStripe(stripeApiKey)}>
                <ProtectedRoute component={Payment} />
              </Elements>
            )}
          />
        )}


        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:keyword' element={<Products/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/account' element={<ProtectedRoute component={Profile} />} />
        <Route path='/me/update' element={<ProtectedRoute component={UpdateProfile} />} />
        <Route path='/password/update' element={<ProtectedRoute component={UpdatePassword} />} />
        <Route path='/password/forgot' element={<ForgotPassword/>} />
        <Route path='/password/reset/:token' element={<ResetPassword/>} />
        <Route path='/login' element={<LoginSignUp/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/shipping' element={<ProtectedRoute component={Shipping} />} />
        
        <Route path='/success' element={<ProtectedRoute component={OrderSuccess} />} />
        <Route path='/orders' element={<ProtectedRoute component={MyOrders} />} />
        <Route path='/order/confirm' element={<ProtectedRoute component={ConfirmOrder} />} />
        <Route path='/order/:id' element={<ProtectedRoute component={OrderDetails} />} />

        <Route isAdmin={true} path='/admin/dashboard' element={<ProtectedRoute component={Dashboard} />} />
        <Route isAdmin={true} path='/admin/products' element={<ProtectedRoute component={ProductList} />} />
        <Route isAdmin={true} path='/admin/product' element={<ProtectedRoute component={NewProduct} />} />
        <Route isAdmin={true} path='/admin/product/:id' element={<ProtectedRoute component={UpdateProduct} />} />
        <Route isAdmin={true} path='/admin/orders' element={<ProtectedRoute component={OrderList} />} />
        <Route isAdmin={true} path='/admin/order/:id' element={<ProtectedRoute component={ProcessOrder} />} />
        <Route isAdmin={true} path='/admin/users' element={<ProtectedRoute component={UsersList} />} />
        <Route isAdmin={true} path='/admin/user/:id' element={<ProtectedRoute component={UpdateUser} />} />
        <Route isAdmin={true} path='/admin/reviews' element={<ProtectedRoute component={ProductReviews} />} />
        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />

      </Routes>
      <Footer />
    </div>

  );
}

export default App;
