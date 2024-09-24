import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner/Banner'
import Overview from './Overview'
import ServicePage from './ServicePage'
import Client from './Client'
import Industry from './Industry'
import Achievement from './Achievement'
import Feedback from './Feedback'
import Founders from './Founders'
import FAQ from './FAQ'
import FooterLinks from './FooterLinks'
import { FaWhatsappSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";



const Home = () => {
  return (
    <div>

<div className="home-page">
      <h1>Welcome to Our Website</h1>
      
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fixed"
      >
        {/* <FaWhatsapp size={40} color="#25D366" /> */}
        <FaWhatsappSquare /> <br />
        <IoCall />
      </a>
    </div>
    <Navbar/>
    <Banner/>
    <Overview/>
    <ServicePage/>
    <Client/>
    <Industry/>
   <Achievement/>
   <Feedback/>
   <Founders/>
   <FAQ/>
   <FooterLinks/>
    
      
    </div>
  )
}

export default Home
