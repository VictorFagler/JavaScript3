import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:8080/api/product');
      setData(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      const response = await axios.post('http://localhost:8080/api/product', newProduct);
      const savedProduct = response.data;
      setData((prevData) => [...prevData, savedProduct]);
    } catch (error) {
      console.log('Error saving product:', error);
    }
  };

  const value = {
    data,
    addProduct,
    refreshData: fetchData, // Function to refresh the data
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
