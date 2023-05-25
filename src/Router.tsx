
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyMovie from './components/MyMovie';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        {/* movieInfo */}
        {/* mymovie */}
        <Route path="/my-movie" element={<MyMovie />} />
        {/* inquiry */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

