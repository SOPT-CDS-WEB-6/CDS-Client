import styled from 'styled-components';
import MovieDetail from '../components/MovieDetail';
import SideAdBanner from '../components/SideAdBanner';
import TrailerBox from '../components/TrailerBox';
import StillCutBox from '../components/StillCutBox';
import ScoreBox from '../components/ScoreBox';
import MovieInfo from '../components/MovieInfo';

function MovieInfoPage() {
  return (
    <StMovieInfoBox>
      <StFirstBox>
        <MovieInfo />
        <StSecondBox>
          <MovieDetail />
          <SideAdBanner />
        </StSecondBox>
      </StFirstBox>
      <StFourthBox>
        <StThirdBox>
          <TrailerBox />
          <StillCutBox />
          <ScoreBox />
        </StThirdBox>
        <StBlankBox />
      </StFourthBox>
    </StMovieInfoBox>
  );
}

export default MovieInfoPage;

const StMovieInfoBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4.9rem;
`;

const StFirstBox = styled.section`
  display: flex;
  flex-direction: column;
`;

const StSecondBox = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 14.2rem;
`;

const StThirdBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 99.4rem;
`;

const StFourthBox = styled.section`
  display: flex;
`;

const StBlankBox = styled.section`
  width: 22.7rem;
`;
