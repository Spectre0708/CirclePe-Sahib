// src/components/SearchBar.js
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="flex items-center px-4 py-2 bg-white rounded-full mx-4 my-2 shadow-sm">
      <FiSearch size={20} color="#1D3B56" />
      <input
        type="text"
        placeholder="Gurgaon"
        className="ml-2 w-full text-sm outline-none text-text-dark"
      />
    </div>
  );
};

export default SearchBar;
