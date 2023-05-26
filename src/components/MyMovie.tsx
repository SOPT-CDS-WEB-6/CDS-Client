import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import MovieHeader from './MovieHeader';
import MovieCard from './MovieCard';
import UserPreference from './UserPreference';
import useGetWatchedMovieInfo from '../hooks/useGetWatchedMovieInfo';

function MyMovie() {
  const { data, setFetchURL, numOfCards, numOfWatchedMovie } = useGetWatchedMovieInfo(
    `/user/1/movielog/watched?page=1&size=6`,
  );
  const [touchBottom, setTouchBottom] = useState(1);
  const [movieArr, setMovieArr] = useState<any>([]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + (clientHeight + 0.99) >= scrollHeight) {
      setTouchBottom(touchBottom + 1);
    }
  };

  useEffect(() => {
    const newMovieArr = [...movieArr, ...numOfCards];
    setMovieArr(newMovieArr);
  }, [numOfCards]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <StTopWrapper>
      <UserPreference numData={numOfWatchedMovie} />
      <StMyMovieSection>
        <MovieHeader
          data={data}
          setFetchURL={setFetchURL}
          setMovieArr={setMovieArr}
          touchBottom={touchBottom}
          setTouchBottom={setTouchBottom}
        />

        <StMovieCardWrapper>
          {movieArr.map((data: object, idx: number) => {
            return <MovieCard data={data} key={idx} />;
          })}
        </StMovieCardWrapper>
      </StMyMovieSection>

      <StSideDiv></StSideDiv>
    </StTopWrapper>
  );
}

const StSideDiv = styled.div`
  width: 5.5rem;
  height: 100vh;
`;

const StTopWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const StMyMovieSection = styled.section`
  display: grid;
  justify-content: center;

  /* 푸터 위에까지의 마진 */
  margin: 24.6rem 41.4rem 30.2rem 5.8rem;
`;

const StMovieCardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 89.3rem;
  margin-top: 1.85rem;

  gap: 2.5rem;
`;

export default MyMovie;
