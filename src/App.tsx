import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Property from './pages/Property';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Navbar />
   <div> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/property" element={<Property/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Footer />
   </>
  );
}

export default App;
