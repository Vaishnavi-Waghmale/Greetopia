// CardGenerator.js

import React, { useState } from "react";
import "./CardGenerator.css"; // Import your CSS for styling

function CardGenerator() {
  const [relation, setRelation] = useState("");
  const [nickname, setNickname] = useState("");
  const [occasion, setOccasion] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [generatedCard, setGeneratedCard] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateCard = () => {
    // Add logic to generate the greeting card based on user inputs
    // Set the generated card image in the state (e.g., setGeneratedCard(generatedCardImage))
  };

  return (
    <div className="CardGenerator">
      <input
        type="text"
        placeholder="Relation"
        value={relation}
        onChange={(e) => setRelation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      />
      <textarea
        placeholder="Custom Message"
        value={customMessage}
        onChange={(e) => setCustomMessage(e.target.value)}
      ></textarea>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleGenerateCard}>Generate Card</button>
      {selectedImage && <img src={selectedImage} alt="Selected" />}
      {generatedCard && <img src={generatedCard} alt="Generated Card" />}
    </div>
  );
}

export default CardGenerator;
