import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const ProductHeader = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return null; // If user is not logged in, return null to render nothing
  }

  return (
    <div className='product-header'>
      <h1>Press a product to manage the product</h1>
    </div>
  );
};

export default ProductHeader;
