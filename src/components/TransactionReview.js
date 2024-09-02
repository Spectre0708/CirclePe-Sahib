import React, { useState, useEffect } from 'react';
import PaymentApproved from './PaymentApproved'; // Import the new component

const TransactionReview = ({ property, onBack }) => {
  const [period, setPeriod] = useState(6); // Default period of 6 months
  const [showBackButton, setShowBackButton] = useState(false);
  const [paymentApproved, setPaymentApproved] = useState(false);

  // Dummy price for calculation; replace with dynamic data if needed
  const price = 22020;

  const calculateTotal = () => {
    return period * price;
  };

  useEffect(() => {
    // Start the animation after a short delay to ensure smooth slide-in
    const timer = setTimeout(() => {
      setShowBackButton(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handlePayment = () => {
    setPaymentApproved(true); // Trigger payment approval
  };

  if (paymentApproved) {
    return <PaymentApproved onReturnHome={onBack} />; // Render the payment approval page
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg relative">
      {/* Back Button with animation */}
      <button
        onClick={onBack}
        className={`absolute top-2 left-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 back-button ${
          showBackButton ? '' : 'hidden'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div className="property-details">
        <img src={property.image} alt={property.title} className="rounded-lg w-full" />
        <div className="mt-2">
          <h2 className="text-xl font-semibold">{property.title}</h2>
          <p className="text-gray-500">{property.location}</p>
          <p className="text-primary text-lg font-bold">₹ {price}/month</p>
        </div>
      </div>

      <div className="select-period mt-4">
        <h3 className="text-lg font-semibold">Select Period</h3>
        <div className="period-options mt-2 flex space-x-2">
          {[3, 6, 9].map((p) => (
            <button
              key={p}
              className={`period-button px-4 py-2 rounded-lg border ${
                p === period ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'
              }`}
              onClick={() => setPeriod(p)}
            >
              {p} months
            </button>
          ))}
        </div>
      </div>

      <div className="payment-detail mt-4">
        <h3 className="text-lg font-semibold">Payment Detail</h3>
        <p className="text-gray-700">Period time: {period} months</p>
        <p className="text-gray-700">Monthly payment: ₹ {price}</p>
        <p className="text-gray-700">Security deposit: ₹ 0</p>
        <h3 className="text-xl font-bold mt-2">Total: ₹ {calculateTotal()}</h3>
      </div>

      {/* Responsive Pay Button */}
      <button
        onClick={handlePayment}
        className="mt-4 w-full bg-primary text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
      >
        Pay with Circle
      </button>
    </div>
  );
};

export default TransactionReview;
