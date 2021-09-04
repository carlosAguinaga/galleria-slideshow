import React from "react";
import "../styles/GalleryItem.css";

const CardItem = ({ image, title, subtitle }) => {
  return (
    <div className="card-item">
      <img className="image-card" src={image} alt={image} />
      <div className="card-description-container">
        <p className="title-card">{title}</p>
        <p className="subtitle-card">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardItem;
