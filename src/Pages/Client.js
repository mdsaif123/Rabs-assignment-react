import React, { useState, useEffect } from "react";
import Card from "../Components/Card"

const Client = () => {
    const [data, setData] = useState([]);

    // Fetch JSON data
    useEffect(() => {
      fetch("/data.json")
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error("Error fetching JSON data: ", error));
    }, []);
  
  return (
    <div>
      <div className=" client py-4">
        <h1 className="text-center py-4 text-white">
          Our Client-Centric Approach to <br /><span className="text-warning bold">WEB DEVELOPEMENT</span>  Success
        </h1>
        <div>
     
      <div className="card-container">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Client;
