import React, { useState } from 'react';
import { FaHome, FaUser, FaHeart } from 'react-icons/fa';

const Footer = ({ likedProperties }) => {
  const [showLiked, setShowLiked] = useState(false);

  const handleLikeClick = () => {
    setShowLiked(!showLiked);
  };

  return (
    <div className="fixed bottom-0 w-full bg-white shadow-lg flex justify-around p-4">
      <button className="flex items-center">
        <FaHome size={24} />
        <span className="ml-2"></span>
      </button>
      <button className="flex items-center">
        <FaUser size={24} />
        <span className="ml-2"></span>
      </button>
      <button onClick={handleLikeClick} className="flex items-center">
        <FaHeart size={24} />
        <span className="ml-2"></span>
      </button>

      {showLiked && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-4 shadow-lg rounded-lg w-80 max-h-80 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">Liked Properties</h3>
          {likedProperties.length === 0 ? (
            <p>No liked properties yet.</p>
          ) : (
            <ul>
              {likedProperties.map((property) => (
                <li key={property.id} className="border-b py-2 flex items-center">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-16 h-16 object-cover rounded-lg mr-2"
                  />
                  <div>
                    <p className="font-semibold">{property.title}</p>
                    <p className="text-gray-500">{property.location}</p>
                    <p className="text-blue-600">₹ {property.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Footer;
