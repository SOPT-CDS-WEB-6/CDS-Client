import { styled } from 'styled-components';
import { DUMMY_MOVIE_DATA } from '../constants/dummyData';
import MovieHeader from './MovieHeader';
import MovieCard from './MovieCard';
import UserPreference from './UserPreference';

function MyMovie() {
  return (
    <StTopWrapper>
      <UserPreference />
      <StMyMovieSection>
        <MovieHeader dummyData={DUMMY_MOVIE_DATA} />

        <StMovieCardWrapper>
          {DUMMY_MOVIE_DATA.map((data, idx) => {
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
  width: 100vw;
`;

const StMyMovieSection = styled.section`
  display: grid;
  justify-content: center;

  /* 푸터 위에까지의 마진 */
  margin: 24.6rem 41.4rem 30.2rem 5.8rem;
`;

const StMovieCardWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 89.3rem;
  margin-top: 1.85rem;

  gap: 2.5rem;
`;

export default MyMovie;
