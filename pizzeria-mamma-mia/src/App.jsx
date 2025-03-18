import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <div class="container-fluid">
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  );
};

export default App;