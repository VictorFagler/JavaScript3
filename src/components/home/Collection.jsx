import React, { useContext } from "react";
import { NavLink, Link } from 'react-router-dom'
import CollectionCard from './CollectionCard'
import { ProductContext } from "../../contexts/ProductContext";

const Collection = () => {
  
  const { data, loadMoreProducts, isLoadMoreDisabled } = useContext(ProductContext)

  return (
    <div className='collection-container'>
      <h1>Best Collection</h1>
      <ul>
        <li><NavLink to="#">All</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Bags</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Dress</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Decoration</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Essentials</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Interior</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Laptop</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Mobile</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Beauty</NavLink></li>
        <span>/</span>
      </ul>
      <div className='grid-collection-template'>
        {
          data.map(card => (
            <Link to={
              `/productdetails/${card._id}`} key={card._id}>
              <CollectionCard card={card} key={card._id} />
            </Link>
          ))
        }
      </div>
        <button 
        onClick={loadMoreProducts} 
        className={`button button-secondary ${isLoadMoreDisabled ? 'disabled' : ''}`}
        disabled={isLoadMoreDisabled}>
          load more
        </button>
    </div>
  )
}

export default Collection