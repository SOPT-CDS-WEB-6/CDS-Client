import styled from 'styled-components';
import MovieDetail from './MovieDetail';
import SideAdBanner from './SideAdBanner';
import TrailerBox from './TrailerBox';
import StillCutBox from './StillCutBox';
import ScoreBox from './ScoreBox';

function MovieDetailBox() {
  return (
    <StMovieDetailBox>
      <StTopBox>
        <MovieDetail />
        <SideAdBanner />
      </StTopBox>
      <StBottomBox>
        <TrailerBox />
        <StillCutBox />
        <ScoreBox />
      </StBottomBox>
    </StMovieDetailBox>
  );
}

export default MovieDetailBox;

const StMovieDetailBox = styled.section`
  display: flex;
  flex-direction: column;

  margin: 14.2rem 36.3rem 0 36.3rem;
`;

const StTopBox = styled.section`
  display: flex;
`;

const StBottomBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 99.4rem;
`;
