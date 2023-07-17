import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Componentsfb/Header/Header";
import MovieDetailPage from './Componentsfb/Header/MovieDetailPage';
import MovieListing from "./Componentsfb/Header/PopularMovieList";


function App() {
  
   
  return (
    <>
    <div>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieListing/>} />
      <Route path="/movie/:id" element={<MovieDetailPage/>} />
    </Routes>
  </BrowserRouter>
  </div>
  </>
  );
  }

export default App;
 