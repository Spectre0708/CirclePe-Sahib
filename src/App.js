import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import TransactionReview from './components/TransactionReview';
import './index.css';

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      image: '../assets/sky-dandelions-apartment.jpg',
      title: 'Sky Dandelions Apartment',
      location: 'Sector 56, Gurgaon',
      price: 22000,
    },
    {
      image: '../assets/wings-tower.jpg',
      title: 'Wings Tower',
      location: 'Sector 57, Gurgaon',
      price: 17000,
    },
    {
      image: '../assets/wayside-modern-house.jpg',
      title: 'Wayside Modern House',
      location: 'Sector 58, Gurgaon',
      price: 18000,
    },
  ];

  const handleBack = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <SearchBar />
      <div className="mt-2">
        {selectedProperty ? (
          <TransactionReview property={selectedProperty} onBack={handleBack} />
        ) : (
          properties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              onClick={() => setSelectedProperty(property)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
