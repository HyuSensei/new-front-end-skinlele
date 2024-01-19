import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/customer/Home";
import Login from "../pages/customer/Login";
import Register from "../pages/customer/Register";
import Detail from "../pages/customer/Detail";
import Cart from "../pages/customer/Cart";
import OrderWait from "../pages/customer/OrderWait";
import OrderShip from "../pages/customer/OrderShip";
import OrderComplete from "../pages/customer/OrderComplete";
import OrderCancel from "../pages/customer/OrderCancel";
import Search from "../pages/customer/Search";
import CategorySkincare from "../pages/customer/CategorySkincare";
import CategoryMakeup from "../pages/customer/CategoryMakeup";
import Rate from "../pages/customer/Rate";
import { useSelector } from "react-redux";
import NotFound from "../pages/404";

const CustomerRoute = (props) => {
  const isAuthSuccess = useSelector(
    (state) => state.customer.auth.isAuthSucess
  );
  const ProtectedRoute = () => {
    console.log(isAuthSuccess);
    if (!isAuthSuccess) {
      return <Navigate to={"/login"} replace />;
    }
    return <Outlet />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail/:product_id" element={<Detail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order_wait/:user_id" element={<OrderWait />} />
      <Route path="/order_ship/:user_id" element={<OrderShip />} />
      <Route path="/order_complete/:user_id" element={<OrderComplete />} />
      <Route path="/order_cancel/:user_id" element={<OrderCancel />} />
      <Route path="/search" element={<Search />} />
      <Route
        path="/category_skincare/:category_id"
        element={<CategorySkincare />}
      />
      <Route
        path="/category_makeup/:category_id"
        element={<CategoryMakeup />}
      />
      <Route path="/rate" element={<Rate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CustomerRoute;
