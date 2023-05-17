import styled from 'styled-components';
import MovieDetail from './MovieDetail';
import SideAdBanner from './SideAdBanner';
import TrailerBox from './TrailerBox';
import StillCutBox from './StillCutBox';
import ScoreBox from './ScoreBox';

function MovieDetailBox() {
  return (
    <StMovieDetailBox>
      <StDiv>
        <MovieDetail />
        <SideAdBanner />
      </StDiv>
      <StDiv2>
        <TrailerBox />
        <StillCutBox />
        <ScoreBox />
      </StDiv2>
    </StMovieDetailBox>
  );
}

export default MovieDetailBox;

const StMovieDetailBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 14.7rem 36.3rem 0 36.3rem;
`;

const StDiv = styled.div`
  display: flex;
`;

const StDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 99.4rem;
`;
