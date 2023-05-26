import { useState } from 'react';
const useScroll = () => {
  const [touchBottom, setTouchBottom] = useState(1);
  const [movieArr, setMovieArr] = useState<any>([]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setTouchBottom(touchBottom + 1);
    }
  };

  return {
    handleScroll,
    movieArr,
    setMovieArr,
    touchBottom,
    setTouchBottom,
  };
};

export default useScroll;
