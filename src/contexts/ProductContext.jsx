import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {

  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/product`);
        setData(prevData => [...prevData, ...result.data.slice(prevData.length)]);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const value = {
    data,

  }
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider