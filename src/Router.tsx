import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* movieInfo */}
        {/* mymovie */}
        {/* inquiry */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
