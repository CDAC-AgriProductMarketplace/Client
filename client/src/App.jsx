import Navbar from "./components/layout/Navbar";
import "./App.css";
import FeatureStrip from "./components/utils-components/FeatureStrip";
import Footer from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/authentication/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Profile from "./pages/user-pages/Profile";

import OrderDetails from "./pages/user-pages/orders/OrderDetails";
import TrackOrder from "./pages/user-pages/orders/TrackOrder";
import CancelOrderPage from "./pages/user-pages/orders/CancelOrderPage";
import OrderListPage from "./pages/user-pages/orders/OrderListPage";

import ProductListPage from "./pages/products/ProductListPage";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";

import ProtectedRoute from "./ProtectedRoute";

import { logout } from "./redux/slices/authSlices";
import { isTokenExpired } from "./services/AuthService";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && isTokenExpired(token)) {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <div className="font-[Geist] antialiased flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <FeatureStrip />

      <div className="flex-grow sm:py-4 xs:py-2 px-4 md:py-8">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />

          <Route path="/products/:category" element={<ProductListPage />} />
          <Route
            path="/products/:category/:subcategory"
            element={<ProductListPage />}
          />
          <Route path="/product-details/:id" element={<ProductDetails />} />

          {/* Protected routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                <OrderListPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders/:orderId"
            element={
              <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                <OrderDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders/:orderId/track"
            element={
              <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                <TrackOrder />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders/:orderId/cancel"
            element={
              <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                <CancelOrderPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
