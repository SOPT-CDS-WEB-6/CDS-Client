import { styled } from 'styled-components';
import { DUMMY_MOVIE_DATA } from '../constants/dummyData';
import MovieHeader from './MovieHeader';
import MovieCard from './MovieCard';

function MyMovie() {
  return (
    <MyMovieSection>
      <MovieHeader dummyData={DUMMY_MOVIE_DATA} />

      <MovieCardWrapper>
        {DUMMY_MOVIE_DATA.map((data, idx) => {
          return <MovieCard data={data} key={idx} />;
        })}
      </MovieCardWrapper>
    </MyMovieSection>
  );
}

const MyMovieSection = styled.section`
  display: grid;

  width: 136.5rem;

  margin: -64rem 41.4rem 0rem 60rem;
`;

const MovieCardWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;

  margin-top: 1.85rem;
`;

export default MyMovie;
