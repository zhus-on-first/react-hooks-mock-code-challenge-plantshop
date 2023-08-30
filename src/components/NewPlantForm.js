import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  //initialize state for form field values
  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState("");

  function handleNewPlantSubmit(event) {
    event.preventDefault();
    const newPlant = {
      name: plantName,
      image: plantImage,
      price: plantPrice,
    };
    addNewPlant(newPlant);
    setPlantImage("");
    setPlantName("");
    setPlantPrice("");
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlantSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantName}
          onChange={(event) => setPlantName(event.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={plantImage}
          onChange={(event) => setPlantImage(event.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plantPrice}
          onChange={(event) => setPlantPrice(event.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
