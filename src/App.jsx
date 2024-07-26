import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import './index.css'; // Assuming Tailwind CSS is imported in this file
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import PopularHotels from './Components/popularHotels';




function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/register" element={<PopularHotels />} />
          <Route path="/about" element={<About />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer/>} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

