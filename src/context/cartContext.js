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
      .then(() => {
        console.log("Product updated successfully");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  const updateCart = async (id, newProducts) => {
    //UI Logic
    const newCartProducts = newProducts.filter((product) => product.qty > 0);
    setCartProducts(newCartProducts);
    // Backend Logic
    // const cartProduct = products.find((product) => product.id === id);
    // console.log(cartProduct, "Single Cart Product");

    localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));

    // axios
    //   .get(`http://localhost:8000/cartProducts/${id}`)
    //   .then((response) => {
    //     if (response.data) {
    //       console.log(response.data, "GET data");
    //       axios
    //         .put(`http://localhost:8000/cartProducts/${id}`, cartProduct)
    //         .then((response) => {
    //           console.log(response.data);
    //         })
    //         .catch((error) => {
    //           console.error("PUT could not update cart", error);
    //         });
    //     }
    //   })
    //   .catch((error) => {
    //     axios
    //       .post(`http://localhost:8000/cartProducts`, cartProduct)
    //       .then(() => {})
    //       .catch((error) => {
    //         console.error("Error updating cart:", error);
    //       });
    //     // console.error("Error fetching cart products:", error);
    //   });
  };

  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cartProducts");
    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }
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
      value={{ cartProducts, handleQtyIncrease, handleQtyDecrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
