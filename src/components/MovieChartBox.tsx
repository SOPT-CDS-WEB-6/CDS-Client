import { styled } from 'styled-components';
import { IcWhiteallButton } from '../asset/icon';
import MovieChartCard from './MovieChartCard';
import { useEffect, useState } from 'react';
import dummyMovieChart, { TypeMovieChart } from '../constants/DummyMovieChart';

const MovieChartBox = () => {
  const [movieChart, setMovieChart] = useState<TypeMovieChart[]>([]);

  useEffect(() => {
    const movieChartData = dummyMovieChart;
    setMovieChart(movieChartData);
  }, []);

  return (
    <StMovieChartSection>
      <StBackgroundBar />
      <StMovieChartWrapper>
        <StButtonWrapper>
          <StTopicWrapper>
            <StMovieChartText className="current">무비차트</StMovieChartText>
            <StBar></StBar>
            <StMovieChartText>상영예정작</StMovieChartText>
          </StTopicWrapper>
          <IcWhiteallButton />
        </StButtonWrapper>
        <StChartCardWrapper>
          {movieChart.map((movieData) => {
            return <MovieChartCard {...movieData} key={movieData.chartRank} />;
          })}
        </StChartCardWrapper>
      </StMovieChartWrapper>
    </StMovieChartSection>
  );
};

export default MovieChartBox;

const StChartCardWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 44.3rem;
  margin-top: 8.45rem;
`;

const StMovieChartText = styled.p`
  font: ${({ theme }) => theme.fonts.Title};
  &.current {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StTopicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 3.5rem;
`;

const StBar = styled.div`
  width: 0.1rem;
  height: 1.8rem;
  margin-left: 1.7rem;
  margin-right: 1.7rem;
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colors.gray20};
`;

const StMovieChartWrapper = styled.div`
  width: 118.4rem;
  height: 55.4rem;
  margin: 0;
  padding: 0;
`;

const StMovieChartSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 69.6rem;
  padding: 0;
`;

const StBackgroundBar = styled.div`
  position: absolute;
  top: 59.9rem;
  z-index: -1;

  width: 100%;
  height: 23.6rem;
  padding: 0;
  margin: 0;

  background: ${({ theme }) => theme.colors.red2};
`;
