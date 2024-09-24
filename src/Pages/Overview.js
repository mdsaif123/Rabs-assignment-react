import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const Overview = () => {
  return (
    <div>
    <div className="container-overview">
    <marquee behavior="" direction=""> <h1>Absolutely! World Leading Website Designer At Your Service</h1></marquee>
    <div className="text-center my-3">
        <h2 className='bold'>Our Existence</h2>
    </div>
    <div className="container p-3">
        <div className="row">
            <div className="col-md-3 d-flex flex-column ">
            <div className='my-4'>
                <h1 className='bold'>4.9/5</h1>
                <span className='text-warning'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </span>
              
                <CiStar />
            </div>
            <div className='my-4'>
                <h1 className='bold'>10000+</h1>
                <span>Total Project Complete</span>
            </div>
            <div className='my-4'>
                <h1 className='bold'>12+</h1>
                <span>Years of experince</span>
            </div>

            </div>
            <div className="col-md-8">
            <div>
            <img className='map-image' src="https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/India_United_Arab_Emirates_Locator-new.gif" alt="" />

            </div>
           
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row my-4">
        <h4 className='text-center'>A Website Design-First Integrated Business Promotion Company</h4>
        <p className='text-center my-3 text-indent'>RABS Net Solutions Pvt. Ltd. is a full-service website design agency based in Mumbai, India. An agency with a strong growth trajectory and mindset, we are a team of passionate strategists, marketers, communicators, and technologists. We collaborate with our clients in India and abroad on strategies and tactics to achieve measurable business results. <span className='bold'>"Let's make website design magic together.</span> "</p>
        </div>
    </div>
    </div>
    <div className="text-center my-2">
  <img className="shake" src="https://rabsnetsolutions.com/experience-center/assets/img/membership/slider/arrow.png" alt="Shaking Image" />
</div>

   
      
    </div>
  )
}

export default Overview
