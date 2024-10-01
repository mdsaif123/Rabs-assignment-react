import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MyCarousel = () => {
  return (
    <div className="container">
    <div className="row">

    <OwlCarousel className="owl-theme" loop margin={10} nav>
      <div className="item col-md-4 col-12 col-lg-4">
        <h4>
    
          <div className="card">
            <img
              src="https://prefecturespg.com/wp-content/uploads/2021/08/New-Teaching-and-Learning-Styles.jpg"
              alt="Placeholder Image"
            />
            <div className="info">
              <h2>Education</h2>
              <p>Here is a short description that appears on hover.</p>
            </div>
          </div>
        </h4>
      </div>
      <div className="item col-md-4 col-12 col-lg-4">
        <h4>
    
          <div className="card">
            <img
              src="https://www.studying-in-uk.org/wp-content/uploads/2018/09/accounting-and-finances.jpg"
              alt="Placeholder Image"
            />
            <div className="info">
              <h2>Finance</h2>
              <p>Here is a short description that appears on hover.</p>
            </div>
          </div>
        </h4>
      </div>
      <div className="item col-md-4 col-12 col-lg-4">
        <h4>
    
          <div className="card">
            <img
              src="https://www.itcilo.org/sites/default/files/courses/cover-images/A9016137.jpeg"
              alt="Placeholder Image"
            />
            <div className="info">
              <h2>Technology</h2>
              <p>Here is a short description that appears on hover.</p>
            </div>
          </div>
        </h4>
      </div>
      <div className="item col-md-4 col-12 col-lg-4">
        <h4>
    
          <div className="card">
            <img
              src="https://prefecturespg.com/wp-content/uploads/2021/08/New-Teaching-and-Learning-Styles.jpg"
              alt="Placeholder Image"
            />
            <div className="info">
              <h2>Education</h2>
              <p>Here is a short description that appears on hover.</p>
            </div>
          </div>
        </h4>
      </div>
      <div className="item col-md-4 col-12 col-lg-4">
        <h4>
    
          <div className="card">
            <img
              src="https://www.itcilo.org/sites/default/files/courses/cover-images/A9016137.jpeg"
              alt="Placeholder Image"
            />
            <div className="info">
              <h2>Technology</h2>
              <p>Here is a short description that appears on hover.</p>
            </div>
          </div>
        </h4>
      </div>
      <div className="item col-md-4 col-12 col-lg-4">
        <h4>
    
          <div className="card">
            <img
              src="https://www.itcilo.org/sites/default/files/courses/cover-images/A9016137.jpeg"
              alt="Placeholder Image"
            />
            <div className="info">
              <h2>Technology</h2>
              <p>Here is a short description that appears on hover.</p>
            </div>
          </div>
        </h4>
      </div>
    </OwlCarousel>
    </div>
    </div>
  );
};

export default MyCarousel;
