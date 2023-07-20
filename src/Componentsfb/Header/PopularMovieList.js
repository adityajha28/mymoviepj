// import React from "react";
// import "./PopularMovieList.css";
// const PopularMovieList = (props) => {
//   const { movieData } = props;
//   return (
//     <div className="Moviedetails-container">
//       {movieData.map((movie) => (
//         <div className="Moviedetails">
//           <div key={movie.id}>
//             <img
//               className="movieImage"
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title}
//             />
//             <h2 className="movie-title">{movie.title}</h2>
//             <p className="movie-overview">{movie.overview}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default PopularMovieList;
// import React, { useEffect, useState } from 'react';

// const MovieListing = () => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(
//         "https://api.themoviedb.org/3/movie/popular?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US&page=1");
//         if (!response.ok) {
//           throw new Error('Failed to fetch movies.');
//         }
//         const data = await response.json();
//         setMovies(data.results);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchMovies();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Popular Movies</h2>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
//             <h3>{movie.title}</h3>
//             <p>Release Date: {movie.release_date}</p>
//             <p>Overview: {movie.overview}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieListing;
// import React, { useEffect, useState } from 'react';
// import "./PopularMovieList.css";

// const MovieListing = () => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchMovies = async () => {
//     try {
//       const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US&page=${page}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch movies.');
//       }
//       const data = await response.json();
//       const newMovies = data.results;
//       const uniqueMovies = [...movies, ...newMovies].reduce((unique, movie) => {
//         if (!unique.find((m) => m.id === movie.id)) {
//           return [...unique, movie];
//         }
//         return unique;
//       }, []);
//       setMovies(uniqueMovies);
//       setFilteredMovies(uniqueMovies);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, [page]);

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="movie-listing">

//       <h2>Popular Movies</h2>

//       <ul className="movie-grid">
//         {movies.map((movie) => (
//           <li key={movie.id} className="movie-item">
//             <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
//             <div className="movie-info">
//               {/* <h3 className="movie-title">{movie.title}</h3> */}
//               {/* <p className="release-date">Release Date: {movie.release_date}</p>
//               <p className="overview">{movie.overview}</p> */}
//             </div>
//           </li>
//         ))}
//       </ul>

//       <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
//     </div>
//   );
// };

// export default MovieListing;
// import React, { useEffect, useState } from 'react';
// import SearchBar from './SearchBar';
// import "./PopularMovieList.css";

// const MovieListing = () => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchMovies = async () => {
//     try {
//       const url = filteredMovies.length > 0
//         ? `https://api.themoviedb.org/3/search/movie?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US&page=${page}&query=${encodeURIComponent(filteredMovies)}`
//         : `https://api.themoviedb.org/3/movie/popular?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US&page=${page}`;

//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Failed to fetch movies.');
//       }
//       const data = await response.json();
//       const newMovies = data.results;
//       const uniqueMovies = [...movies, ...newMovies].reduce((unique, movie) => {
//         if (!unique.find((m) => m.id === movie.id)) {
//           return [...unique, movie];
//         }
//         return unique;
//       }, []);
//       setMovies(uniqueMovies);
//       setFilteredMovies([]);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, [page]);

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const handleSearch = (searchTerm) => {
//     setFilteredMovies(searchTerm);
//     setPage(1);
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="movie-listing">
//       <SearchBar onSearch={handleSearch} />

//       <h2>Popular Movies</h2>

//       <ul className="movie-grid">
//         {movies.map((movie) => (
//           <li key={movie.id} className="movie-item">
//             <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
//             <div className="movie-info">
//               <h3 className="movie-title">{movie.title}</h3>
//               <p className="release-date">Release Date: {movie.release_date}</p>
//               <p className="overview">{movie.overview}</p>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
//     </div>
//   );
// };

// export default MovieListing;
// import React, { useEffect, useState } from 'react';
// import SearchBar from './SearchBar';
// import "./PopularMovieList.css";

// const MovieListing = () => {
//   const [movies, setMovies] = useState([]);
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         if (searchTerm) {
//           const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US&page=1&include_adult=false&query=${encodeURIComponent(searchTerm)}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch movies.');
//           }
//           const data = await response.json();
//           setMovies(data.results);
//         } else {
//           const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US&page=1`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch movies.');
//           }
//           const data = await response.json();
//           setPopularMovies(data.results);
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchMovies();
//   }, [searchTerm]);

//   const handleSearch = (searchTerm) => {
//     setSearchTerm(searchTerm);
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="movie-listing">
//       <SearchBar onSearch={handleSearch} />

//       {searchTerm.length > 0 ? (
//         <div>
//           <h2>Search Results</h2>
//           <ul className="movie-grid">
//             {movies.map((movie) => (
//               <li key={movie.id} className="movie-item">
//                 <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
//                 <div className="movie-info">
//                   <h3 className="movie-title">{movie.title}</h3>
//                   <p className="release-date">Release Date: {movie.release_date}</p>
//                   <p className="overview">{movie.overview}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div>
//           <h2>Popular Movies</h2>
//           <ul className="movie-grid">
//             {popularMovies.map((movie) => (
//               <li key={movie.id} className="movie-item">
//                 <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
//                 <div className="movie-info">
//                   <h3 className="movie-title">{movie.title}</h3>
//                   <p className="release-date">Release Date: {movie.release_date}</p>
//                   <p className="overview">{movie.overview}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieListing;
// import React, { useEffect, useState } from 'react';
// import SearchBar from './SearchBar';
// import "./PopularMovieList.css";

// const MovieListing = () => {
//   const [movies, setMovies] = useState([]);
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         if (searchTerm) {
//           const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US&page=1&include_adult=false&query=${encodeURIComponent(searchTerm)}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch movies.');
//           }
//           const data = await response.json();
//           setMovies(data.results);
//         } else {
//           const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US&page=1`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch movies.');
//           }
//           const data = await response.json();
//           setPopularMovies(data.results);
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchMovies();
//   }, [searchTerm]);

//   const handleSearch = (searchTerm) => {
//     setSearchTerm(searchTerm);
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="movie-listing">
//       <SearchBar onSearch={handleSearch} />

//       {searchTerm.length > 0 ? (
//         <div>
//           <h2>Search Results</h2>
//           <ul className="movie-grid">
//             {movies.map((movie) => (
//               <li key={movie.id} className="movie-item">
//                 <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
//                 <div className="movie-info">
//                   <h3 className="movie-title">{movie.title}</h3>
//                   <p className="release-date">Release Date: {movie.release_date}</p>
//                   <p className="overview">{movie.overview}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div>
//           <h2>Popular Movies</h2>
//           <ul className="movie-grid">
//             {popularMovies.map((movie) => (
//               <li key={movie.id} className="movie-item">
//                 <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
//                 <div className="movie-info">
//                   <h3 className="movie-title">{movie.title}</h3>
//                   <p className="release-date">Release Date: {movie.release_date}</p>
//                   <p className="overview">{movie.overview}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieListing;
// import React, { useEffect, useState } from "react";
// import SearchBar from "./SearchBar";
// import "./PopularMovieList.css";

// const MovieListing = () => {
//   const [movies, setMovies] = useState([]);
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try { 
//         if (searchTerm) {
//           const response = await fetch(
//             `https://api.themoviedb.org/3/search/movie?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US&page=${page}&include_adult=false&query=${encodeURIComponent(searchTerm)}`
//           );
//           if (!response.ok) {
//             throw new Error("Failed to fetch movies.");
//           }
//           const data = await response.json();
//           if (page === 1) {
//             setMovies(data.results);
//           } else {
//             setMovies((prevMovies) => [...prevMovies, ...data.results]);
//           }
//         } else {
//           const response = await fetch( 
//             `https://api.themoviedb.org/3/movie/popular?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US&page=${page}`);
//           if (!response.ok) {
//             throw new Error("Failed to fetch movies.");
//           }
//           const data = await response.json();
//           if (page === 1) {
//             setPopularMovies(data.results);
//           } else {
//             setPopularMovies((prevMovies) => [...prevMovies, ...data.results]);
//           }
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchMovies();
//   }, [searchTerm, page]);

//   const handleSearch = (searchTerm) => {
//     setSearchTerm(searchTerm);
//     setPage(1);
//   };

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="movie-listing">
//       <SearchBar className="search" onSearch={handleSearch} />

//       {searchTerm.length > 0 ? (
//         <div>
//           <h2 className="searched">SEARCH RESULTS</h2>
//           <ul className="movie-grid">
//             {movies.map((movie) => (
//               <li key={movie.id} className="movie-item">
//                 <img
//                   className="movie-poster"
//                   src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                   alt={movie.title}
//                 />
//                 <div className="movie-info">
//                   <h3 className="movie-title">{movie.title}</h3>
//                   <p className="release-date">
//                     Release Date: {movie.release_date}
//                   </p>
//                   <p className="overview">{movie.overview}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div>
//           <h2 className="popular">POPULAR MOVIES</h2>
//           <ul className="movie-grid">
//             {popularMovies.map((movie) => (
//               <li key={movie.id} className="movie-item">
//                 <img
//                   className="movie-poster"
//                   src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                   alt={movie.title}
//                 />
//                 <div className="movie-info">
//                   <h3 className="movie-title">{movie.title}</h3>
//                   <p className="release-date">
//                     Release Date: {movie.release_date}
//                   </p>
//                   <p className="overview">{movie.overview}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {!searchTerm && (
//         <button className="load-more-btn" onClick={handleLoadMore}>
//           Load More
//         </button>
//       )}
//     </div>
//   );
// };

// export default MovieListing;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./PopularMovieList.css";

const MovieListing = () => {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try { 
        if (searchTerm) {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=558f43c34f606c4299fddeeb1b99fec1&language=en-US&page=${page}&include_adult=false&query=${encodeURIComponent(searchTerm)}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch movies.");
          }
          const data = await response.json();
          if (page === 1) {
            setMovies(data.results);
          } else {
            setMovies((prevMovies) => [...prevMovies, ...data.results]);
          }
        } else {
          const response = await fetch( 
            `https://api.themoviedb.org/3/movie/popular?api_key=558f43c34f606c4299fddeeb1b99fec1&language=en-US&page=${page}`);
          if (!response.ok) {
            throw new Error("Failed to fetch movies.");
          }
          const data = await response.json();
          if (page === 1) {
            setPopularMovies(data.results);
          } else {
            setPopularMovies((prevMovies) => [...prevMovies, ...data.results]);
          }
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, [searchTerm, page]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movie-listing">
      <SearchBar className="search" onSearch={handleSearch} />

      {searchTerm.length > 0 ? (
        <div>
          <h2 className="searched">SEARCH RESULTS</h2>
          <ul className="movie-grid">
            {movies.map((movie) => (
              <li key={movie.id} className="movie-item">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="popular">POPULAR MOVIES</h2>
          <ul className="movie-grid">
            {popularMovies.map((movie) => (
              <li key={movie.id} className="movie-item">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!searchTerm && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default MovieListing;
