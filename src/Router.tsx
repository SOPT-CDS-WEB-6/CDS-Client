import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyMovie from './components/MyMovie';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* movieInfo */}
        {/* mymovie */}
        <Route path="/my-movie" element={<MyMovie />} />
        {/* inquiry */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;