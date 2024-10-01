import React from "react";
import "./Banner.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Banner = () => {
  AOS.init();
  return (
    <div>
      <div className="banner">
        <div className="text-center mt-4 pt-5 pb-3">
          <button className="banner-btn">Let's Discuss Your Project</button>
        </div>
        <div className="container">
          <div  className="row text-center text-white banner-heading" >
            <h1  className="">
              Elevate Your <span className="bold"> Digital Presence</span>
            </h1>
            <h1>
              Impactfull <span className="bold">Innovation,</span>Seamless{" "}
              <span className="bold"> Experience</span>
            </h1>
          </div>
        </div>
        <div className="container p-4">
          <div className="row my-5 text-center more">
            <div className="col-lg-3  col-md-6 col-sm-12 my-2">
              <button id="banner-btn1 ">Wordpress Development</button>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-12 my-2">
              <button id="banner-btn1 ">UI - UX Design</button>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-12 my-2">
              <button id="banner-btn1">Real State CRM</button>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-12 my-2">
              <button id="banner-btn1">PHP & React Website</button>
            </div>
          </div>
        </div>
        <div className="text-center my-2">
  <img className="shake" src="https://rabsnetsolutions.com/experience-center/assets/img/membership/slider/arrow.png" alt="Shaking Image" />
</div>

      </div>
      
    </div>
  );
};

export default Banner;
