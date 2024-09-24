import React from "react";

const ServiceCard = ({ title, description, icon, image,backgroundColor }) => {
  return (
    <div className="row my-4">
      <div className="col-md-12 col-lg-6 d-flex background-c" style={{ backgroundColor: backgroundColor }}>
        <img src={icon} alt={title}  className="mx-2 my-2 card-icon" />
        <p>{description}</p>
      </div>
      <div className="col-md-6">
        <div className="my-2">
          <img src={image} alt={title} className="card-img small-card" style={{ height: "150px", borderRadius: "10px" }} />
          <div className="card-img-overlay">
            <p className="card-text text-center text-white">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
