// src/components/FeaturedProperties.js
import React from 'react';
import PropertyCard from './PropertyCard';

const FeaturedProperties = ({ properties }) => {
  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold text-gray-800">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            title={property.title}
            location={property.location}
            price={property.price}
            onClick={property.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
