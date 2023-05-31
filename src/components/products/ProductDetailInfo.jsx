import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ProductDetailContext } from '../../contexts/ProductDetailContext';
import Loader from '../loader/Loader';
import { useParams } from 'react-router-dom';

const ProductDetailInfo = () => {
  const { data, updateProductData } = useContext(ProductDetailContext);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    name: data.name,
    price: data.price,
    description: data.description,
    imageURL: data.imageURL
  });

  const { productId } = useParams();

  const handleInputChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(`http://localhost:8080/api/product/${productId}`, editedData, config);

      setEditMode(false);

      // Update the product data in the context
      updateProductData(editedData);
    } catch (error) {
      console.error('Error updating product:', error);
      console.log('Error response:', error.response);
    }
  };

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="product-details">
      <div className="container">
        <div className="left">
          <div className="image">
            {editMode ? (
              <>
              <h3>ImageURL:</h3>
              <input
                type="text"
                name="imageURL"
                value={editedData.imageURL}
                onChange={handleInputChange}
                style={{ width: '600px', height: '40px', fontSize: '16px' }}
              />
              </>
            ) : (
              <img src={data.imageURL} alt={data.imageURL} />
            )}
          </div>
        </div>
        <div className="product-details-info left">
          {editMode ? (
            <>
              <h3>Title:</h3>
              <input
                type="text"
                name="name"
                value={editedData.name}
                onChange={handleInputChange}
                style={{ width: '600px', height: '40px', fontSize: '16px' }} 
              />
              <h3>Description:</h3>
              <textarea
                name="description"
                value={editedData.description}
                onChange={handleInputChange}
                style={{ width: '600px', height: '120px', fontSize: '16px' }} 
              ></textarea>
              <h3>Price:</h3>
              <input
                name="price"
                type="number"
                value={editedData.price}
                onChange={handleInputChange}
                style={{ width: '600px', height: '40px', fontSize: '16px' }} 
              />
              <button onClick={handleSave} style={{ width: '600px' }}>Save</button>
            </>
          ) : (
            <>
              <h2>{data.name}</h2>
              <p className="detail-text">{data.description}</p>
              <div className="price">
                <span>{data.price}</span>
              </div>
              <button onClick={handleEdit}>Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
