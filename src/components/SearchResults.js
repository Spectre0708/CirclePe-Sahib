import React from 'react';

// Corrected import paths for images
import skyDandelionsApartment from '../assets/sky-dandelions-apartment.jpg';
import wingsTower from '../assets/wings-tower.jpg';
import waysideModernHouse from '../assets/wayside-modern-house.jpg';

const SearchResults = () => {
  // Debugging logs
  console.log('Image paths:', {
    skyDandelionsApartment,
    wingsTower,
    waysideModernHouse
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Search Results</h2>
      <div className="space-y-4">
        {/* First Item */}
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <img
            src={skyDandelionsApartment}
            alt="Sky Dandelions Apartment"
            className="w-24 h-24 rounded-md object-cover"
          />
          <div className="ml-4">
            <h3 className="text-md font-medium">Sky Dandelions Apartment</h3>
            <p className="text-gray-500">Sector 56, Gurgaon</p>
            <p className="font-bold mt-2">₹ 22,000/month</p>
          </div>
        </div>
        {/* Second Item */}
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <img
            src={wingsTower}
            alt="Wings Tower"
            className="w-24 h-24 rounded-md object-cover"
          />
          <div className="ml-4">
            <h3 className="text-md font-medium">Wings Tower</h3>
            <p className="text-gray-500">Sector 57, Gurgaon</p>
            <p className="font-bold mt-2">₹ 17,000/month</p>
          </div>
        </div>
        {/* Third Item */}
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <img
            src={waysideModernHouse}
            alt="Wayside Modern House"
            className="w-24 h-24 rounded-md object-cover"
          />
          <div className="ml-4">
            <h3 className="text-md font-medium">Wayside Modern House</h3>
            <p className="text-gray-500">Sector 58, Gurgaon</p>
            <p className="font-bold mt-2">₹ 18,000/month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
