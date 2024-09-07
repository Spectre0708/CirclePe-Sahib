import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search properties..."
      className="p-2 rounded-md border border-gray-300 w-full max-w-lg"
    />
  );
};

export default SearchBar;
