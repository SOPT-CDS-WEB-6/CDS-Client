import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieInfoPage from './pages/MovieInfoPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/movieInfo" element={<MovieInfoPage />} />
        {/* mymovie */}
        {/* inquiry */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
