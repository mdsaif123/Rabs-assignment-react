import React from 'react'
import { FaAddressBook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const FooterLinks = () => {
  return (
    <div>
    <div className="container-fluid Footer-links">
      <div className="container">
        <div className="row">

            <div className="col-md-4 service text-white">
            <h2>Services</h2>
            <hr />
            <div className='d-flex flex-column my-3 services-links'>
            <a href="">UI/Ux Design</a>
            <a href="">Wordpress Development</a>
            <a href="">Landing Page development</a>
            <a href="">Portfolio Websites</a>
            <a href="">Corporate Websites</a>
            <a href="">PHP & React website</a>
            <a href="">Real estate and developers website</a>
            </div>
            

            </div>
            <div className="col-md-4 service text-white">
                <h2>Office Address</h2>   <hr />

                <FaAddressBook /> Office B16, Al Kazim Building, AL Garhoud, DUBAI. <br />
                <IoCall />+971 58 233 5969 <br /> <br />
                <FaAddressBook />Office 01, Pushtikar Society, Jogeshwari West, Mumbai -102. 
                <IoCall />+971 58 233 5969 <br /><br />

                <MdEmail />support@rabsnetsolutions.com 

            </div>
            <div className="col-md-4 text-white service">
                <h2>Newsletter</h2>
                <hr />
                <div>
                <input type="text" placeholder='Email' className='news-later' />
                </div>
              
                <div className='my-3'>
                    <input type="checkbox" /> &nbsp; &nbsp;T & C Apply

                </div>
                <button className='submit-btn'>submit</button>
            </div>
          
        </div><hr className='text-white' />
        <div className='d-flex justify-content-between p-4 text-white'>
        <div>Copyright © 2024 RABS Net Solutions Pvt. Ltd. All Rights Reserved</div>
        <div>Privacy Policy | Terms & Conditions </div>
      </div>
      </div>
    
      </div>
     
      
    </div>
  )
}

export default FooterLinks
