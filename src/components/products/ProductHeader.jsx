import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const ProductHeader = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return null; // If user is not logged in, return null to render nothing
  }

  return (
    <div className='product-header'>
      <h1>Press product to edit</h1>
    </div>
  );
};

export default ProductHeader;
