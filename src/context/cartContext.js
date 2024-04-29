import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "./productsContext";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { products, setProducts, setProduct } = useContext(ProductsContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  const updateCart = async (id, newProducts) => {
    const newCartProducts = newProducts.filter((product) => product.qty > 0);
    setCartProducts(newCartProducts);

    localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
  };
  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cartProducts");
    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }
    const finalAmount = localStorage.getItem("grandTotal");
    if (finalAmount) {
      setGrandTotal(finalAmount);
    }
  }, []);

  const handleQtyIncrease = (id) => {
    const newProducts = [...products];
    const product = newProducts.find((product) => product.id === id);
    console.log(product);
    if (product) {
      product.qty += 1;
      setProducts(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
      setProduct(product);
      updateCart(id, newProducts);
    }
  };

  const handleQtyDecrease = (id) => {
    const newProducts = [...products];
    const product = newProducts.find((product) => product.id === id);
    if (product) {
      product.qty -= 1;
      if (product.qty < 0) {
        product.qty = 0;
      }
      setProducts(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
      setProduct(product);
      updateCart(id, newProducts);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        handleQtyIncrease,
        handleQtyDecrease,
        grandTotal,
        setGrandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
