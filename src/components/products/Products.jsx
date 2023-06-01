import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';

const Products = () => {
  const { data, refreshData } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: 0,
    imageURL: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveProduct = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/product', newProduct);
      const savedProduct = response.data;
      setNewProduct({
        name: '',
        description: '',
        price: 0,
        imageURL: '',
      });
      setIsEditing(false); // Close the add product edit mode
      refreshData(); // Fetch updated data from the server
    } catch (error) {
      console.log('Error saving product:', error);
    }
  };


  const handleChange = (e) => {
    setNewProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="products">
      {user ? (
        <>
          {isEditing ? (
            <div className="productCard">
              <h4 className='add-new-text'>Add New Product</h4>
              <input
                type="text"
                name="imageURL"
                placeholder="Image URL"
                value={newProduct.imageURL}
                onChange={handleChange}
              />
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Product Description"
                value={newProduct.description}
                onChange={handleChange}
              ></textarea>
              <input
                type="number"
                name="price"
                placeholder="Product Price"
                value={newProduct.price}
                onChange={handleChange}
              />
              <button onClick={handleSaveProduct}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <button onClick={() => setIsEditing(true)}>Add New Product</button>
          )}

          {data.map((product) => (
            <Link to={`/productdetails/${product._id}`} key={product._id}>
              <div className="productCard">
                <img
                  alt={product.title}
                  src={product.imageURL}
                  style={{ display: 'block', maxWidth: '80%' }}
                />
                <h3 className='productCard-title'>{product.name}</h3>
                <p>{product.description}</p>
                <p className="productCard-price">Price: ${product.price}</p>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <h2 className="center">Please login as admin to view the products.</h2>
      )}
    </div>
  );
};

export default Products;
