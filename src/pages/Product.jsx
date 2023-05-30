import React from 'react'
import Products from '../components/products/Products'
import ProductContextProvider from '../contexts/ProductContext'

const Product = () => {
  return (
    <div>
      <ProductContextProvider>
         <Products />
      </ProductContextProvider>
    </div>
  )
}



export default Product