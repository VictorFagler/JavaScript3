import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { UserContext } from "../../contexts/UserContext";

const Products = () => {
  const { data } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  return (
    <div className="products">
      {user ? (
        data.map((product) => (
          <Link to={`/productdetails/${product._id}`} key={product._id}>
            <div className="productCard">
              <img alt={product.title} src={product.imageURL} style={{ display: "block", maxWidth: "80%" }} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
            </div>
          </Link>
        ))
      ) : (
        
          <h2 className="center">Please login as admin to view the products.</h2>
      
      )}
    </div>
  );
};

export default Products;
