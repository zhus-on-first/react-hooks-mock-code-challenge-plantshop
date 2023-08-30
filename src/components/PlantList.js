import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const plant = {
    id: 1,
    name: "Aloe",
    image: "./images/aloe.jpg",
    price: 15.99,
  };

  return (
    <ul className="cards">
      <PlantCard plant={plant} />
    </ul>
  );
}

export default PlantList;
