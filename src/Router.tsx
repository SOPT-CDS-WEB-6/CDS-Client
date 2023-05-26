import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieInfoPage from './pages/MovieInfoPage';
import Home from './pages/Home';
import MyMoviePage from './pages/MyMoviePage';

const Router = () => {
  // const [movieNumber, setMovieNumber] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie">
          <Route path=":movieId" element={<MovieInfoPage />} />
        </Route>
        {/* mymovie */}
        <Route path="/my-movie" element={<MyMoviePage />} />
        {/* inquiry */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
