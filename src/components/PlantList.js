import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const plants = [
    {
      id: 1,
      name: "Aloe",
      image: "./images/aloe.jpg",
      price: 15.99,
    },
    {
      id: 2,
      name: "ZZ Plant",
      image: "./images/zz-plant.jpg",
      price: 25.98,
    },
  ];

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
