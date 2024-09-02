// src/components/Header.js
import React from 'react';
import { FiChevronLeft, FiShare2 } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-primary">
      <button>
        <FiChevronLeft size={24} color="#1D3B56" />
      </button>
      <h1 className="text-lg font-semibold text-text-dark">Search results</h1>
      <button>
        <FiShare2 size={24} color="#1D3B56" />
      </button>
    </div>
  );
};

export default Header;
