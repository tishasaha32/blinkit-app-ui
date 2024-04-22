import { createContext, useContext, useEffect, useState } from "react";
import { ProductsContext } from "./productsContext";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { products, setProducts, setProduct } = useContext(ProductsContext);
  const [cartProducts, setCartProducts] = useState([]);

  const updateCart = (newProducts) => {
    const addedtoCartProducts = newProducts.filter(
      (product) => product.qty > 0
    );
    setCartProducts(addedtoCartProducts);
  };

  const handleQtyIncrease = (id) => {
    const newProducts = [...products];
    const product = newProducts.find((product) => product.id === id);
    if (product) {
      product.qty = product.qty + 1;
      setProducts(newProducts);
      setProduct(product);
      updateCart(newProducts);
    }
  };

  const handleQtyDecrease = (id) => {
    const newProducts = [...products];
    const product = newProducts.find((product) => product.id === id);
    if (product) {
      product.qty = product.qty - 1;
      setProducts(newProducts);
      setProduct(product);
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
