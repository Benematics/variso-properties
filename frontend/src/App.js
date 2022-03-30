import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs"
import Footer from "./components/Footer";
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/About" element={<AboutPage/>} />
      <Route path="/Contact" element={<ContactUs/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  

    );
}

export default App;
