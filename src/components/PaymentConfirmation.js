// src/components/PaymentConfirmation.js

import React, { useState } from 'react';

const PaymentConfirmation = ({ amount, onReturnHome }) => {
  const [step, setStep] = useState(1); // Step 1: Zero Deposit, Step 2: 3 Month Salary Cover, Step 3: Final Confirmation

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1); // Go to next step
    } else {
      onReturnHome(); // Return home after final step
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Rent at Zero Deposit</h1>
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-16 h-16 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Congratulations! You've qualified for Zero Deposit on this property.
            </p>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">3 Month Salary Cover</h1>
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-16 h-16 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              You're also covered with 3 months' salary protection.
            </p>
          </>
        );
      case 3:
        return (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">New Rent Offer</h1>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Your new rent offer:</h2>
              <p className="text-2xl text-blue-600 font-bold">₹{amount}</p>
            </div>
            <p className="text-lg text-gray-600 mb-4">Your transaction has been processed.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center">
      {renderStepContent()}

      <button
        onClick={handleNextStep}
        className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
      >
        {step < 3 ? 'Next Step' : 'Pay with Circle'}
      </button>
    </div>
  );
};

export default PaymentConfirmation;
