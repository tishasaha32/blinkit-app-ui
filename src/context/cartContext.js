import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "./productsContext";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { products, setProducts, setProduct } = useContext(ProductsContext);
  const [cartProducts, setCartProducts] = useState([]);

  const updateServerProduct = (id, updatedProduct) => {
    axios
      .patch(`http://localhost:8000/products/${id}`, {
        qty: updatedProduct.qty,
      })
      .then((response) => {
        console.log("Product updated successfully");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  const updateCart = (newProducts) => {
    const newCartProducts = newProducts.filter((product) => product.qty > 0);
    setCartProducts(newCartProducts);
  };

  const handleQtyIncrease = (id) => {
    const newProducts = [...products];
    const product = newProducts.find((product) => product.id === id);
    if (product) {
      product.qty += 1;
      setProducts(newProducts);
      setProduct(product);
      updateServerProduct(id, product);
      updateCart(newProducts);
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
      setProduct(product);
      updateServerProduct(id, product);
      updateCart(newProducts);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, handleQtyIncrease, handleQtyDecrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
