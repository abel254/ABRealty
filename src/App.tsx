import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/header/Navbar';
import Home from './pages/Home';
import Property from './pages/Property';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import SingleProperty from './components/propertyComponents/singlePropertyPage/SingleProperty';
import { PropertiesProvider } from './context/PropertyContext';
import AboutUs from './pages/AboutUs';


function App() {
  return (
   <>
   <PropertiesProvider>
   <Navbar />
   <div> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/property" element={<Property/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/singleProperty" element={<SingleProperty/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
      </div>
      <Footer />
   </PropertiesProvider>
   
   </>
  );
}

export default App;
