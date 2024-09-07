import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const PropertyCard = ({ image, title, location, price, onClick, isLiked, onLike }) => {
  return (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      onClick={onClick}
    >
      {/* Like Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from triggering onClick of the card
          onLike();
        }}
        className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
      >
        {isLiked ? (
          <AiFillHeart className="text-red-500" size={24} />
        ) : (
          <AiOutlineHeart className="text-gray-500" size={24} />
        )}
      </button>

      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{location}</p>
        <p className="text-indigo-600 font-semibold">Rs. {price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
