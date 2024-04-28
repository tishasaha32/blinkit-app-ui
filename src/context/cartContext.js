import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "./productsContext";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { products, setProducts, setProduct } = useContext(ProductsContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  const updateServerProduct = (id, updatedProduct) => {
    axios
      .patch(`http://localhost:8000/products/${id}`, {
        qty: updatedProduct.qty,
      })
      .then(() => {
        console.log("Product updated successfully");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

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
    // localStorage.setItem("grandTotal", JSON.stringify(grandTotal));
    // const storedGrandTotal = localStorage.getItem("grandTotal");
    // if (storedGrandTotal) {
    //   setGrandTotal(JSON.parse(storedGrandTotal));
    // }
  }, []);

  const handleQtyIncrease = (id) => {
    const newProducts = [...products];
    const product = newProducts.find((product) => product.id === id);
    if (product) {
      product.qty += 1;
      setProducts(newProducts);
      setProduct(product);
      updateServerProduct(id, product);
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
      setProduct(product);
      updateServerProduct(id, product);
      updateCart(id, newProducts);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
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
