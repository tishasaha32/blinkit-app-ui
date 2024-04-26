import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import Product from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmed from "./pages/OrderConfirmed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmed" element={<OrderConfirmed />} />
      </Routes>
    </div>
  );
}

export default App;
