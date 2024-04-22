import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    console.log(productId);
    if (!productId) return;
    axios
      .get(`http://localhost:8000/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
        console.log(products);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [productId]);

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
