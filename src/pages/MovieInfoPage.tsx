import styled from 'styled-components';
import MovieDetail from '../components/MovieDetail';
import SideAdBanner from '../components/SideAdBanner';
import TrailerBox from '../components/TrailerBox';
import StillCutBox from '../components/StillCutBox';
import ScoreBox from '../components/ScoreBox';
import MovieInfo from '../components/MovieInfo';
// import { useEffect, useState } from 'react';
// import MovieInfoResponse from '../types/movieInfoResponse';
// import useGetMovieInfo from '../libs/hooks/useGetMovieInfo';

function MovieInfoPage() {
  // const { movieInfo, isError, isLoading } = useGetMovieInfo(1);
  // const [movieInfoData, setMovieInfoData] = useState<MovieInfoResponse[]>([]);

  // useEffect(() => {
  //   if (movieInfo) {
  //     setMovieInfoData(movieInfo);
  //   }
  // }, [movieInfo]);

  return (
    <StMovieInfoPage>
      <StInfoBox>
        <MovieInfo />
        <StDetailBox>
          <MovieDetail />
          <SideAdBanner />
        </StDetailBox>
      </StInfoBox>
      <StMediaBox>
        <StPreviewBox>
          <TrailerBox />
          <StillCutBox />
          <ScoreBox />
        </StPreviewBox>
        <StBlankBox />
      </StMediaBox>
    </StMovieInfoPage>
  );
}

export default MovieInfoPage;

const StMovieInfoPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4.9rem;
`;

const StInfoBox = styled.section`
  display: flex;
  flex-direction: column;
`;

const StDetailBox = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 14.2rem;
`;

const StPreviewBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 99.4rem;
`;

const StMediaBox = styled.section`
  display: flex;
`;

const StBlankBox = styled.section`
  width: 22.7rem;
`;
