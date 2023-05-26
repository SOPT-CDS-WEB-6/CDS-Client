import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieInfoPage from './pages/MovieInfoPage';
import Home from './pages/Home';

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
        {/* inquiry */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
