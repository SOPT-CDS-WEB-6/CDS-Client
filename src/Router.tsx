import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyMoviePage from './pages/MyMoviePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* movieInfo */}
        {/* mymovie */}
        <Route path="/my-movie" element={<MyMoviePage />} />
        {/* inquiry */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
