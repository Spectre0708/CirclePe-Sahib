// src/components/PropertyCard.js
import React from 'react';

const PropertyCard = ({ image, title, location, price, onClick }) => {
  return (
    <div
      className="property-card bg-white p-4 rounded-lg shadow-md cursor-pointer"
      onClick={onClick} // Handle click event
    >
      <img src={image} alt={title} className="rounded-lg w-full" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="text-blue-600 font-semibold">{price}</p>
    </div>
  );
};

export default PropertyCard;
