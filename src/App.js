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
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmed" element={<OrderConfirmed />} />
        </Routes>
      </div>

      <div className="responsiveMessage">
        <p className="message">Please check this site on Desktop.</p>
        <br />
        <p className="message">
          This site is not yet optimized for mobile. Sorry for the
          inconvenience.
        </p>
      </div>
    </div>
  );
}

export default App;
