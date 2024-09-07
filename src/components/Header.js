import React from 'react';
import { FiChevronLeft, FiShare2 } from 'react-icons/fi';

const Header = ({ title = 'YOUR HOME', onBack, onShare }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-blue-500 shadow-lg">
      {/* Back Button */}
      <button onClick={onBack} className="p-2 rounded-full bg-white shadow-md">
        <FiChevronLeft size={24} color="#1D3B56" />
      </button>

      {/* Dynamic Title */}
      <h1 className="text-lg font-semibold text-white">{title}</h1>

      {/* Share Button */}
      <button onClick={onShare} className="p-2 rounded-full bg-white shadow-md">
        <FiShare2 size={24} color="#1D3B56" />
      </button>
    </div>
  );
};

export default Header;
