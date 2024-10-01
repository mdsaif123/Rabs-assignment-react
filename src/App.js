import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Overview from './Pages/Overview';
import ServicePage from './Pages/ServicePage';
import Client from './Pages/Client';
import Feedback from './Pages/Feedback';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import Navbar from './Components/Navbar';


function App() {
  return (
    <Router>
    <Navbar className="my-5"
    />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/approach" element={<Client/>} />
        <Route path="/review" element={<Feedback/> } />
        <Route path="/about" element={<About/>} />
        <Route path="/faq" element={<FAQ/>} />
      </Routes>
    </Router>
  );
}

export default App;
