import React from 'react'
import ProductDetailInfo from '../components/products/ProductDetailInfo'
import ProductDetailsProvider from '../contexts/ProductDetailContext';

const ProductDetails = () => {

  return (
    <div>
      <ProductDetailsProvider>
        <ProductDetailInfo />
      </ProductDetailsProvider>
    </div>
  )
}

export default ProductDetails