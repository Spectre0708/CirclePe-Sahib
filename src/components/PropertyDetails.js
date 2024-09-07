// src/components/PropertyDetails.js
import React from 'react';

const PropertyDetails = ({ property, onBack }) => {
  return (
    <div className="p-4 mx-auto bg-white shadow-lg rounded-lg max-w-lg my-4">
      <button
        className="text-primary mb-2 hover:underline"
        onClick={onBack}
      >
        Back to Properties
      </button>
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
      <p className="text-sm text-gray-500">{property.location}</p>
      <p className="text-lg text-gray-800 mt-2">Price: ₹{property.price}</p>
      <div className="mt-4">
        {/* Additional Details */}
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
