import React from 'react';

const PaymentApproved = ({ onReturnHome }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center">
      <div className="bg-green-100 rounded-full p-6">
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
      <h1 className="text-2xl font-bold mt-4 text-gray-800">Payment Approved</h1>
      <p className="text-gray-600 mt-2">Thank you for your payment. Your transaction has been successfully processed.</p>

      <button
        onClick={onReturnHome}
        className="mt-6 bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
      >
        Return to Home
      </button>
    </div>
  );
};

export default PaymentApproved;
