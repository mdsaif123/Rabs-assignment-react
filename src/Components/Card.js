import React from "react";

const Card = ({ title, image, description }) => {
  return (
    <div className="container">
      <div className="row mb-5 ">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="">
          <h1 className="mb-5 text-white">{title}</h1>
          <div className="d-flex client-card">
          <img src={image} alt={title} style={{width:"100%"}} /> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          <p className="mb-4 text-white mt-5 pt-4">{description}</p>
            
           
          </div>
           <p></p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Card;
