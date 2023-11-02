import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCatogory from "./Pages/ShopCatogory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCatogory category="men" />} />
          <Route path="/women" element={<ShopCatogory category="women" />} />
          <Route path="/kids" element={<ShopCatogory category="kids" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
