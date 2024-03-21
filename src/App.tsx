import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackgroundBeamsDemo } from "./components/banner/BackgroundBeamsDemo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <BackgroundBeamsDemo />
    </BrowserRouter>
  );
}

export default App;
