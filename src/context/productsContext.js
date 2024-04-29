import { createContext, useState, useEffect } from "react";
import axios from "axios";
import productList from "../helper/products";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productList);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState();

  useEffect(() => {
    const updatedProducts = localStorage.getItem("products");
    if (updatedProducts) {
      setProducts(JSON.parse(updatedProducts));
    } else {
      setProducts(productList);
    }
  }, []);

  useEffect(() => {
    if (!productId) return;
    setProduct(products.find((product) => product.id === productId));
  });

  const handleFilteredSearch = (search) => {
    const filteredValue = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filteredValue);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        handleFilteredSearch,
        product,
        setProduct,
        setProductId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
