import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails.jsx'


const App = () => {

  useEffect(() => {
    const token = localStorage.getItem('token');
    // console.log(token);
    if (token) {
      axios.get('http://localhost:8080/api/user/:id', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          // console.log(res);
          setUser(res.data); // Assuming the response contains user data
        })
        .catch(error => {
          console.log(error)
        });
    }
  }, []);


  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productdetails/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App