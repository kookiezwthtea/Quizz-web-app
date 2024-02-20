// SearchComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchComponent.css';
import Button from 'react-bootstrap/Button';

const SearchComponent = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(true);

  const handleSearch = () => {
    const filteredResults = data ? data.filter(item =>
      item && item.name && item.name.toLowerCase().includes(query.toLowerCase())
    ) : [];

    setResults(filteredResults);
    onSearch(query);

   
    setShowDropdown(true);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);

   
    setShowDropdown(true);
  };

  const handleLinkClick = () => {
   
    setShowDropdown(false);
  };

  return (
    <div className="search-component">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <Button
        style={{ marginLeft: '10px', height: '40px', borderColor: 'gray', borderRadius: '30px', background: 'white', color: 'gray' }}
        onClick={handleSearch}
      >
        <i className="fas fa-search"></i>
      </Button>

      {showDropdown && results.length > 0 && (
        <div className="search-results">
          {results.map((result, index) => (
            <Link
              key={index}
              to={`/quiz${result.category}/${result.id}`}
              className="search-result-item"
              onClick={handleLinkClick}
            >
              {result.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
