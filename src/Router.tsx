import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieInfoPage from './pages/MovieInfoPage';
// import { useState } from 'react';

const Router = () => {
  // const [movieNumber, setMovieNumber] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/movieInfo">
          <Route path=":movieId" element={<MovieInfoPage />} />
        </Route>
        {/* mymovie */}
        {/* inquiry */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
