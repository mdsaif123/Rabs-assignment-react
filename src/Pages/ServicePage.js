


import React, { useEffect, useState } from "react";

import ServiceCard from "../Components/ServiceCard";

import servicesData from "../Components/Services.json"

const ServicePage = () => {
  const [services, setServices] = useState([]);

  // Load services data
  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <div className="container">
      <div className="row my-5">
        <h1 className="text-center">Services We Offer</h1>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            image={service.image}
          />
        ))}
      </div>
      <div className="text-center my-2">
  <img className="shake" src="https://rabsnetsolutions.com/experience-center/assets/img/membership/slider/arrow.png" alt="Shaking Image" />
</div>

      
    </div>
  );
};

export default ServicePage;
