import React, { useContext, useEffect, useState } from 'react'
import { FaAdn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className='header'>
      <div className='title-logo'>
        <FaAdn size={35} />
        <h1>ECOMMERCE</h1>
      </div>
      <div className='navigation'>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/product'>PRODUCT</NavLink>
        </li>
        {user ? (
          <>
            <NavLink to='/userprofile'>
              <li className='text-uppercase'>{user}</li>
            </NavLink>
            <li>
              <button className='btn btn-danger btn-sm' onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to='/login'>LOGIN</NavLink>
          </li>
        )}
      </div>
    </div>
  );
}

export default Navbar