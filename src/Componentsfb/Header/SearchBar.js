// import React, { useState } from 'react';

// const SearchBar = ({ handleSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSearch(searchTerm);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchBar;

// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(searchTerm);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchBar;
// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={searchTerm}
//         onChange={handleChange}
//       />
//     </form>
//   );
// };
// export default SearchBar;
// import React, { useState } from 'react';
// import './SearchBar.css';

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         className="search-input"
//         placeholder="Search movies..."
//         value={searchTerm}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSearch(value);
    }, 500);
  };

  return (
    <div className="search-bar">
      <input 
        type="text"
        className="search-input"
        placeholder="Search here...."
        value={searchTerm}
        onChange={handleChange}
      />
      {isLoading && <div className="spinner" />}
    </div>
  );
};

export default SearchBar;