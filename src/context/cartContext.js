import { createContext, useContext, useState } from "react";
import { ProductsContext } from "./productsContext";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // Example to ensure that ProductsContext has values
  const { products } = useContext(ProductsContext);
  const [cartProducts, setCartProducts] = useState(products);

  const handleQtyIncrease = (id) => {
    const newProducts = [...products];
    const product = newProducts.find((product) => product.id === id);
    if (product) {
      product.qty = product.qty + 1;
      setCartProducts(newProducts);
    }
  };

  const handleQtyDecrease = (id) => {
    const newProducts = [...cartProducts];
    const product = newProducts.find((product) => product.id === id);
    if (product) {
      product.qty = product.qty - 1;
      setCartProducts(newProducts);
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
