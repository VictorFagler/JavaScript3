import React from 'react'
import Products from '../components/products/Products'
import ProductContextProvider from '../contexts/ProductContext'
import ProductHeader from '../components/products/ProductHeader'

const Product = () => {
  return (
    <div>
      <ProductContextProvider>
        <ProductHeader />
         <Products />
      </ProductContextProvider>
    </div>
  )
}



export default Product