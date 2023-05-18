import { styled } from 'styled-components';
import { IcEggImg, IcMovie1Img } from '../asset/icon';

const MovieChartCard = ({
  chartRank,
  movieTitle,
  EggScore,
  ticketRatio,
}: {
  chartRank: number;
  movieTitle: string;
  EggScore: number;
  ticketRatio: number;
}) => {
  return (
    <StMovieChartCard>
      <StDiv>
        <IcMovie1Img></IcMovie1Img>
        <StShadowCard>
          <StChartNumberText>{chartRank}</StChartNumberText>
        </StShadowCard>
      </StDiv>
      <StMovieTitle>{movieTitle}</StMovieTitle>
      <StMovieInfo>
        <IcEggImg />
        <StMovieInfoText>{EggScore}%</StMovieInfoText>
        <StMovieInfoVerticalBar />
        <StMovieInfoText>예매율</StMovieInfoText>
        <StMovieInfoText>{ticketRatio}%</StMovieInfoText>
      </StMovieInfo>
    </StMovieChartCard>
  );
};

export default MovieChartCard;

const StMovieInfoVerticalBar = styled.div`
  width: 0.1rem;
  height: 1.2rem;
  margin-left: 1.4rem;
  margin-right: 1.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray40};
`;

const StMovieInfoText = styled.span`
  margin-left: 0.6rem;

  font: ${({ theme }) => theme.fonts.Body3};
`;

const StMovieInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const StMovieTitle = styled.p`
  width: 21.3rem;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;

  font: ${({ theme }) => theme.fonts.Body1};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StChartNumberText = styled.p`
  margin: 0 0 1.2rem 2.4rem;

  font: ${({ theme }) => theme.fonts.Heading};
  color: ${({ theme }) => theme.colors.white};
`;

const StDiv = styled.div`
  position: relative;
`;

const StShadowCard = styled.div`
  content: '';
  display: flex;
  align-items: flex-end;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 26rem;
  height: 35.5rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.85));
`;

const StMovieChartCard = styled.article`
  width: 26rem;
  height: 100%;
`;
