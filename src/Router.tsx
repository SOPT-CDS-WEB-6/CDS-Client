import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Inquiry from './pages/Inquiry';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* movieInfo */}
        {/* mymovie */}
        {/* inquiry */}
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
