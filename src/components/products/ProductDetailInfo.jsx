import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ProductDetailContext } from '../../contexts/ProductDetailContext';
import Loader from '../loader/Loader';
import { useParams } from 'react-router-dom';

const ProductDetailInfo = () => {
  const { data } = useContext(ProductDetailContext);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    name: data.name,
    price: data.price,
    description: data.description
  });



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
      console.log('Token:', token); // Check if the token is retrieved correctly

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log('Config:', config); // Check if the config object is correctly set

      await axios.put(`http://localhost:8080/api/product/${data._id}`, editedData, config);
      console.log('Product updated successfully'); // Check if the update is successful

      setEditMode(false);
    } catch (error) {
      console.error('Error updating product:', error);
      console.log('Error response:', error.response); // Check the response object for more details
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
            <img src={data.imageURL} alt={data.imageURL} />
          </div>
        </div>
        <div className="product-details-info left">
          {editMode ? (
            <>
              <input
                type="text"
                name="name"
                value={editedData.name}
                onChange={handleInputChange}
              />
              <textarea
                name="description"
                value={editedData.description}
                onChange={handleInputChange}
              ></textarea>
              <input
                name="price"
                type="number"
                value={editedData.price}
                onChange={handleInputChange}
              />
              <button onClick={handleSave}>Save</button>
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
          <div className="action-buttons"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
