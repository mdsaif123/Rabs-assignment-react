import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Industry = () => {
  return (
    <div>
      <div className="industry">
        <h1 className="text-center text-white">
          Industries <span className="text-warning bold">We've</span> Worked For
        </h1>
        <OwlCarousel
          className="owl-theme"
          loop
          nav={true}
          dots={true}
          items={3}
          margin={10}
          responsive={{
            0: {
              items: 1,  // Full width for small screens (like col-12)
            },
            600: {
              items: 2,  // Show 2 items for medium-sized screens
            },
            1000: {
              items: 3,  // Show 3 items for large screens
            },
          }}
        >
          <div className="item">
            <div className="">
              <img
                src="https://prefecturespg.com/wp-content/uploads/2021/08/New-Teaching-and-Learning-Styles.jpg"
                alt="Placeholder Image"
              />
              <div className="info">
                <h2>Education</h2>
                <p>Here is a short description that appears on hover.</p>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="">
              <img
                src="https://www.studying-in-uk.org/wp-content/uploads/2018/09/accounting-and-finances.jpg"
                alt="Placeholder Image"
              />
              <div className="info">
                <h2>Finance</h2>
                <p>Here is a short description that appears on hover.</p>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="">
              <img
                src="https://www.itcilo.org/sites/default/files/courses/cover-images/A9016137.jpeg"
                alt="Placeholder Image"
              />
              <div className="info">
                <h2>Technology</h2>
                <p>Here is a short description that appears on hover.</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="">
              <img
                src="https://www.itcilo.org/sites/default/files/courses/cover-images/A9016137.jpeg"
                alt="Placeholder Image"
              />
              <div className="info">
                <h2>Technology</h2>
                <p>Here is a short description that appears on hover.</p>
              </div>
            </div>
          </div>
          
          {/* Add more items as needed */}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Industry;
