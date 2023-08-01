import Home from "./pages/Home.jsx"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from "./pages/Shop.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Wish from "./pages/Wish.jsx";
import Cart from "./pages/Cart.jsx";
import Account from "./pages/Account.jsx";
import Blog from "./pages/Blog.jsx";
import BlogItem from "./components/BlogItem.jsx";
import Product from "./pages/Product.jsx";

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from "./pages/Order.jsx";
import OrderDetail from "./pages/OrderDetail.jsx";


function App() {
  return (
   <>
    <ToastContainer position="bottom-center" limit={1}/>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/wish" element={<Wish/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/blogs" element={<Blog/>}/>
            <Route path="/blogs/:id" element={<BlogItem/>}/>
            <Route path="/products/:id" element={<Product/>}/>
            <Route path="/orders/" element={<Order/>}/>
            <Route path="/orders/:id" element={<OrderDetail/>}/>
        </Routes>
    </Router>
   </>
  );
}

export default App;
