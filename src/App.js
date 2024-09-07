import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import TransactionReview from './components/TransactionReview';
import PaymentConfirmation from './components/PaymentConfirmation';
import Footer from './components/Footer'; // Import the Footer component
import './index.css';

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [likedProperties, setLikedProperties] = useState([]);

  const properties = [
    {
      image: './assets/sky-dandelions-apartment.jpg',
      title: 'Sky Dandelions Apartment',
      location: 'Sector 56, Gurgaon',
      price: 22000,
    },
    {
      image: './assets/wings-tower.jpg',
      title: 'Wings Tower',
      location: 'Sector 57, Gurgaon',
      price: 17000,
    },
    {
      image: './assets/wayside-modern-house.jpg',
      title: 'Wayside Modern House',
      location: 'Sector 58, Gurgaon',
      price: 18000,
    },
  ];

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBack = () => {
    setSelectedProperty(null);
    setPaymentComplete(false);
  };

  const handleLike = (property) => {
    if (likedProperties.find(p => p.title === property.title)) {
      setLikedProperties(likedProperties.filter(p => p.title !== property.title));
    } else {
      setLikedProperties([...likedProperties, property]);
    }
  };

  const handlePaymentComplete = () => {
    setPaymentComplete(true);
  };

  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <Header
        title={selectedProperty ? selectedProperty.title : 'Your Circle'}
        onBack={handleBack}
      />

      {!selectedProperty && !paymentComplete && (
        <div className="flex justify-center my-4">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      )}

      <div className="flex-grow mt-2 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paymentComplete ? (
          <PaymentConfirmation amount={selectedProperty.price} onReturnHome={handleBack} />
        ) : selectedProperty ? (
          <TransactionReview
            property={selectedProperty}
            onBack={handleBack}
            onPaymentComplete={handlePaymentComplete}
          />
        ) : (
          filteredProperties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              onClick={() => setSelectedProperty(property)}
              isLiked={likedProperties.some(p => p.title === property.title)}
              onLike={() => handleLike(property)}
            />
          ))
        )}
      </div>

      <Footer
        likedProperties={likedProperties}
        onLikeClick={() => console.log('Like button clicked')}
      />
    </div>
  );
}

export default App;
