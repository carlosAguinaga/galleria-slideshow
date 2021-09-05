import React from "react";
import "../styles/GalleryItem.css";

const CardItem = ({ image, title, subtitle }) => {
  return (
    <div className="card-item">
      <img className="image-card" src={image} alt={image} />
      <div className="card-description-container">
        <h2 className="title-card">{title}</h2>
        <h4 className="subtitle-card">{subtitle}</h4>
      </div>
    </div>
  );
};

export default CardItem;
