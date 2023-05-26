import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieInfoPage from './pages/MovieInfoPage';
import Home from './pages/Home';
import MyMoviePage from './pages/MyMoviePage';
import Inquiry from './pages/Inquiry';

const Router = () => {
  // const [movieNumber, setMovieNumber] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie">
          <Route path=":movieId" element={<MovieInfoPage />} />
        </Route>

        <Route path="/my-movie" element={<MyMoviePage />} />

        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
