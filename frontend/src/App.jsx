import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import About from './pages/About';
import Navbar from './components/Navbar';
import axios from 'axios'; // ✅ Imported Axios

const App = () => {

  const[location,setLocation]=useState(null)
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords; // ✅ Correct
      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const location = await axios.get(url);
        const exactlocation = location.data.address;
        setLocation(exactlocation)
       
        
      } catch (error) {
        console.log('Error fetching location info:', error);
      }
    }, (err) => {
      console.log('Error getting geolocation:', err);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar location={location} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
