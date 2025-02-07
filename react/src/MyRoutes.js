import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
// import First from "./First";
import Home from "./components/pages/Home";
import Deals from "./components/pages/Deals";
// import Nav from "./components/layout/NavBar";
import SignIn from "./components/pages/SignIn";
import Register from "./components/pages/Register";
import MaterialHome from "./components/pages/MaterialHome";
import Cart from "./components/pages/Cart";
import Blogs from "./components/pages/Blogs";
import Contact from "./components/pages/Contact";
import ConfirmEmail from "./ConfirmEmail";
import ForgetPassword from "./components/pages/ForgetPassword";
import ResetPassword from "./components/pages/ResetPassword";
import AdminDashboard from "./components/pages/AdminDashboard";
import ViewCategory from "./components/pages/Category/ViewCategory";
import AddCategory from "./components/pages/Category/AddCategory";
import ResendVerification from "./components/pages/ResendVerification";
import AdminRoute from "./SelectiveRoutes/AdminRoute";
import UpdateCategory from "./components/pages/Category/UpdateCategory";
import DeleteCategory from "./components/pages/Category/DeleteCategory";
import UpdateProduct from "./components/pages/products/UpdateProduct";
import ViewProducts from "./components/pages/products/ViewProducts";
import AddProduct from "./components/pages/products/Addproduct";
import PrivateRoute from "./SelectiveRoutes/PrivateRoute";
import DeleteProduct from "./components/pages/products/DeleteProduct";
import ConfirmOrder from "./components/pages/ConfirmOrder";
import Shipping from "./components/pages/Shipping";
import Menu from "./components/pages/menus";
import FoodDetailPage from "./components/pages/menus/food-details";
import DefaultLayout from "./components/layout/default";
import Payment from "./components/pages/payment/payment";
import FoodPage from "./components/pages/food/food";
import OrderPage from "./components/pages/orders/order";

const MyRoutes = () => {
  return (
    <>
      <Router>
        {/* <Nav/> */}
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<Deals />} />

            <Route path="/menus" element={<Menu />} />
            <Route path="/food/:id" element={<FoodDetailPage />} />
            <Route path="/foods" element={<FoodPage />} />


            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />

            <Route path="/home" element={<MaterialHome />} />
            {/* <Route path='/blogs' element={<Blogs />} /> */}
            <Route path="/contact" element={<Contact />} />

            <Route path='/confirmuser/:token' element={<ConfirmEmail />} />
            <Route path='/resendverification' element={<ResendVerification />} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />
            <Route path='/resetpassword/:token' element={<ResetPassword />} />

            <Route path="/" element={<PrivateRoute />}>
              <Route path='/confirmorder' element={<ConfirmOrder />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path='/shipping' element={<Shipping />} />
              {/* <Route path='/profile' element={<Profile />} /> */}

              {/* <Route path="/payment" element={<PaymentElement />} /> */}
            </Route>
          </Route>

          <Route path='/' element={<AdminRoute />}>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />

            {/* category Routes */}
            <Route path='/admin/viewcategory' element={<ViewCategory />} />
            <Route path='/admin/addcategory' element={<AddCategory />} />
            <Route path='/admin/updatecategory/:id' element={<UpdateCategory />} />
            <Route path='/admin/deletecategory/:id' element={<DeleteCategory />} />

            {/* Product Routes */}
            <Route path='/admin/viewproducts' element={<ViewProducts />} />
            <Route path='/admin/editproduct/:id' element={<UpdateProduct />} />
            <Route path='/admin/addproduct' element={<AddProduct />} />
            <Route path='/admin/deleteproduct/:id' element={<DeleteProduct />} />

            <Route path='/admin/vieworders' element={<OrderPage />} />


          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default MyRoutes