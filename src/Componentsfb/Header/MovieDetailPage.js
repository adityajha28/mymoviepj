// import React, { useEffect, useState } from 'react';
// import "./MovieDetailPage.css";
// import { useParams } from 'react-router-dom';

// const MovieDetailPage = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch movie.');
//         }
//         const data = await response.json();
//         setMovie(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchMovie();
//   }, [id]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div >
//       <h2>Movie Detail</h2>
//       <div className="movie-details">
//         <img
//           className="movie-poster"
//           src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//           alt={movie.title}
//         />
//         <div className="movie-info">
//           <h3 className="movie-title">{movie.title}</h3>
//           <p className="release-date">Release Date: {movie.release_date}</p>
//           <p className="overview">{movie.overview}</p>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default MovieDetailPage;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./MovieDetailPage.css";

// const MovieDetailPage = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch movie details.");
//         }
//         const data = await response.json();
//         setMovie(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="movie-detail-page">
//       <h2 className="detail-heading">Movie Detail</h2>
//       <div className="movie-details">
//         <div className="poster-container">
//           <img
//             className="movie-poster"
//             src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//             alt={movie.title}
//           />
//         </div>
//         <div className="info-container">
//           <h3 className="movie-title">{movie.title}</h3>
//           <div className="movie-meta">
//             <span className="release-date">Release Date: {movie.release_date}</span>
//             <span className="runtime">Runtime: {movie.runtime} mins</span>
//             <span className="vote-average">Average Vote: {movie.vote_average}</span>
//           </div>
//           <h4 className="overview-heading">Overview</h4>
//           <p className="overview">{movie.overview}</p>
//           <h4 className="genres-heading">Genres</h4>
//           <ul className="genres-list">
//             {movie.genres.map((genre) => (
//               <li key={genre.id} className="genre-item">{genre.name}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetailPage;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [casting, setCasting] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=60fa11f117911a1fc6479b38ad505cdd&language=en-US`
        );
        if (!movieResponse.ok) {
          throw new Error("Failed to fetch movie details.");
        }
        const movieData = await movieResponse.json();
        setMovie(movieData);

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=60fa11f117911a1fc6479b38ad505cdd`
        );
        if (!creditsResponse.ok) {
          throw new Error("Failed to fetch casting details.");
        }
        const creditsData = await creditsResponse.json();
        setCasting(creditsData.cast);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail-page">
      <h2 className="detail-heading">Movie Detail</h2>
      <div className="movie-details">
        <div className="poster-container">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="info-container">
          <h3 className="movie-title">{movie.title}</h3>
          <div className="movie-meta">
            <span className="release-date">Release Date: {movie.release_date}</span>
            <span className="runtime">Runtime: {movie.runtime} mins</span>
            <span className="vote-average">Average Vote: {movie.vote_average}</span>
          </div>
          <h4 className="overview-heading">Overview</h4>
          <p className="overview">{movie.overview}</p>
          <h4 className="genres-heading">Genres</h4>
          <ul className="genres-list">
            {movie.genres.map((genre) => (
              <li key={genre.id} className="genre-item">{genre.name}</li>
            ))}
          </ul>
          <h4 className="casting-heading">Casting</h4>
            <ul className="casting-list">
             {casting.map((cast) => (
             <li key={cast.id} className="cast-item">
             <img
              className="cast-profile"
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              alt={cast.name}
             />
             <div className="cast-details">
            <span className="cast-name">{cast.name}  </span>
            <span className="cast-character"> as {cast.character}</span>
            </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
