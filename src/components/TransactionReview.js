import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Confetti from 'react-confetti';

const TransactionReview = ({ property, onBack }) => {
  const [period, setPeriod] = useState(6);
  const [showBackButton, setShowBackButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [step, setStep] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false); // State for terms acceptance
  const [fadeIn, setFadeIn] = useState(true); // State for fade-in effect

  const price = 22020;

  const calculateTotal = () => {
    return period * price;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackButton(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handlePayment = () => {
    if (!termsAccepted) return; // Do nothing if terms are not accepted

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
      setShowConfetti(true); // Show confetti when payment is complete
      setTimeout(() => setShowConfetti(false), 7000); // Stop confetti after 7 seconds
    }, 2000);
  };

  const handleNextStep = () => {
    setFadeIn(false); // Trigger fade-out
    setTimeout(() => {
      if (step < 3) {
        setStep(step + 1);
      } else {
        setShowPopup(false);
        onBack();
      }
      setFadeIn(true); // Trigger fade-in
    }, 300); // Match the duration with the transition time
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Rent at Zero Deposit</h1>
            <div className="bg-green-100 rounded-full p-6 mb-6 shadow-lg flex items-center justify-center">
              <div className="bg-green-500 rounded-full p-4 shadow-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-12 h-12 text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
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
            <div className="bg-green-100 rounded-full p-6 mb-6 shadow-lg flex items-center justify-center">
              <div className="bg-green-500 rounded-full p-4 shadow-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-12 h-12 text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
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
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Congrats!! Your new rent offer:</h2>
              <p className="text-2xl text-blue-600 font-bold">₹{calculateTotal()}</p>
            </div>
            <p className="text-lg text-gray-600 mb-4">Here You Go !! your transaction has been processed.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 relative">
      {/* Back Button */}
      <button
        onClick={onBack}
        className={`absolute top-2 left-2 bg-gray-200 p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ${
          showBackButton ? 'opacity-100' : 'opacity-0'
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Confetti Animation */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      {/* Property Details */}
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-auto text-center transform transition-transform duration-300 hover:scale-105">
        <img
          src={property.image}
          alt={property.title}
          className="rounded-lg w-full h-64 object-cover mb-4 shadow-md"
        />
        <div className="mt-2">
          <h2 className="text-xl font-semibold">{property.title}</h2>
          <p className="text-gray-500">{property.location}</p>
          <p className="text-primary text-lg font-bold">₹ {price}/month</p>
        </div>
      </div>

      {/* Period Selection */}
      <div className="mt-4 w-full max-w-md mx-auto text-center">
        <h3 className="text-lg font-semibold mb-2">Select Period</h3>
        <div className="flex justify-center mt-2">
          {[3, 6, 9].map((p) => (
            <button
              key={p}
              className={`px-4 py-2 rounded-lg border m-1 shadow-md ${
                p === period ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-blue-500 border-blue-500'
              } transform transition-transform duration-300 hover:scale-105`}
              onClick={() => setPeriod(p)}
            >
              {p} months
            </button>
          ))}
        </div>
      </div>

      {/* Payment Details */}
      <div className="mt-4 w-full max-w-md mx-auto text-center">
        <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
        <p className="text-gray-700">Period time: {period} months</p>
        <p className="text-gray-700">Monthly payment: ₹ {price}</p>
        <p className="text-gray-700">Security deposit: ₹ 0</p>
        <h3 className="text-xl font-bold mt-2">Total: ₹ {calculateTotal()}</h3>
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className="mt-4 w-full max-w-md mx-auto text-center">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-600">I accept the terms and conditions</span>
        </label>
      </div>

      {/* Pay Button */}
      <button
        onClick={handlePayment}
        className={`mt-4 w-full max-w-md mx-auto py-3 rounded-lg shadow-lg transition duration-200 flex justify-center items-center transform hover:scale-105 ${
          termsAccepted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
        }`}
        disabled={loading || !termsAccepted}
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin mr-2" size={24} />
        ) : (
          'Pay with Circle'
        )}
      </button>

      {/* Popup Modal for Payment Confirmation */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`bg-white p-6 rounded-lg shadow-xl text-center max-w-md mx-auto transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {renderStepContent()}

            <div className="flex justify-center mt-6">
              <button
                onClick={handleNextStep}
                className={`py-3 px-6 rounded-full shadow-lg transition duration-300 flex justify-center items-center transform hover:scale-105 ${
                  step < 3 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {step < 3 ? 'Next Step' : 'Return Home'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionReview;
