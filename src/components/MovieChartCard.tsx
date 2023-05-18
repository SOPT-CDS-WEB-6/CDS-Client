import { styled } from 'styled-components';
import { IcEggImg, IcInfoHover, IcMovie1Img, IcTicketingHover } from '../asset/icon';
import { useState } from 'react';

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
  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <StMovieChartCard>
      <StDiv>
        <StPosterWrapper isHover={isHover} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
          <StMovieButtonWrapper isHover={isHover}>
            <IcInfoHover />
            <IcTicketingHover />
          </StMovieButtonWrapper>
          <IcMovie1Img></IcMovie1Img>
          <StShadowCard>
            <StChartNumberText>{chartRank}</StChartNumberText>
          </StShadowCard>
        </StPosterWrapper>
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

const StMovieButtonWrapper = styled.div<{ isHover: boolean }>`
  display: ${({ isHover }) => (isHover ? 'flex' : 'none')};
  flex-direction: column;

  position: absolute;
  top: 13rem;
  left: 7rem;
  z-index: 99;
`;

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
  height: 44.3rem;
`;

const StPosterWrapper = styled.div<{ isHover: boolean }>`
  position: relative;
  width: 26rem;
  height: 35.5rem;
  transform-origin: bottom left;
  transform: scaleY(${(props) => (props.isHover ? '1.05' : '1')}) scaleX(${(props) => (props.isHover ? '1.05' : '1')});
  & > svg {
    filter: ${(props) => (props.isHover ? 'brightness(0.5)' : 'brightness(1)')};
    transition: transform 0.3s;
    transform-origin: bottom left;
    transform: scaleY(${(props) => (props.isHover ? '1.05' : '1')}) scaleX(${(props) => (props.isHover ? '1.05' : '1')});
  }
  & > ${StShadowCard} {
    transition: transform 0.3s;
    transform-origin: bottom left;
    transform: scaleY(${(props) => (props.isHover ? '1.05' : '1')}) scaleX(${(props) => (props.isHover ? '1.05' : '1')});
  }
`;
