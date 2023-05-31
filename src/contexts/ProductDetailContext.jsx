import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/loader/Loader';

export const ProductDetailContext = createContext();

const ProductDetailsProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/product/${productId}`);
        const product = response.data;
        const updatedProduct = { ...product, id: productId }; // Include the id property in the product data
        setData(updatedProduct);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    getProductById();
  }, [productId]);

  const updateProductData = (updatedData) => {
    setData((prevData) => ({
      ...prevData,
      ...updatedData
    }));
  };

  const value = {
    data,
    updateProductData
  };

  return (
    <ProductDetailContext.Provider value={value}>
      {loading ? <Loader /> : children}
    </ProductDetailContext.Provider>
  );
};

export default ProductDetailsProvider;
