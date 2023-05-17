import { styled } from 'styled-components';
import { IcEggImg, IcGoldeggImg, IcMovie1Img, IcMovie2Img, IcWhiteallButton } from '../asset/icon';

const MovieChartBox = () => {
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
          <StMovieChartCard>
            <StDiv>
              <IcMovie1Img></IcMovie1Img>
              <StShadowCard>
                <StChartNumberText>1</StChartNumberText>
              </StShadowCard>
            </StDiv>
            <StMovieTitle>가디언즈 오브 갤럭시</StMovieTitle>
            <StMovieInfo>
              <IcEggImg />
              <StMovieInfoText>98%</StMovieInfoText>
              <StMovieInfoVerticalBar />
              <StMovieInfoText>예매율</StMovieInfoText>
              <StMovieInfoText>49.6%</StMovieInfoText>
            </StMovieInfo>
          </StMovieChartCard>
          <StMovieChartCard>
            <StDiv>
              <IcMovie1Img></IcMovie1Img>
              <StShadowCard>
                <StChartNumberText>1</StChartNumberText>
              </StShadowCard>
            </StDiv>
            <StMovieTitle>가디언즈 오브 갤럭시</StMovieTitle>
            <StMovieInfo>
              <IcEggImg />
              <StMovieInfoText>98%</StMovieInfoText>
              <StMovieInfoVerticalBar />
              <StMovieInfoText>예매율</StMovieInfoText>
              <StMovieInfoText>49.6%</StMovieInfoText>
            </StMovieInfo>
          </StMovieChartCard>
          <StMovieChartCard>
            <StDiv>
              <IcMovie1Img></IcMovie1Img>
              <StShadowCard>
                <StChartNumberText>1</StChartNumberText>
              </StShadowCard>
            </StDiv>
            <StMovieTitle>가디언즈 오브 갤럭시</StMovieTitle>
            <StMovieInfo>
              <IcEggImg />
              <StMovieInfoText>98%</StMovieInfoText>
              <StMovieInfoVerticalBar />
              <StMovieInfoText>예매율</StMovieInfoText>
              <StMovieInfoText>49.6%</StMovieInfoText>
            </StMovieInfo>
          </StMovieChartCard>
          <StMovieChartCard>
            <StDiv>
              <IcMovie1Img></IcMovie1Img>
              <StShadowCard>
                <StChartNumberText>1</StChartNumberText>
              </StShadowCard>
            </StDiv>
            <StMovieTitle>가디언즈 오브 갤럭시</StMovieTitle>
            <StMovieInfo>
              <IcEggImg />
              <StMovieInfoText>98%</StMovieInfoText>
              <StMovieInfoVerticalBar />
              <StMovieInfoText>예매율</StMovieInfoText>
              <StMovieInfoText>49.6%</StMovieInfoText>
            </StMovieInfo>
          </StMovieChartCard>
        </StChartCardWrapper>
      </StMovieChartWrapper>
    </StMovieChartSection>
  );
};

export default MovieChartBox;

const StMovieInfoVerticalBar = styled.div`
  width: 0.1rem;
  height: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray40};
  margin-left: 1.4rem;
  margin-right: 1.4rem;
`;

const StMovieInfoText = styled.span`
  font: ${({ theme }) => theme.fonts.Body3};
  margin-left: 0.6rem;
`;

const StMovieInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const StMovieTitle = styled.p`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  width: 21.3rem;
  font: ${({ theme }) => theme.fonts.Body1};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StChartNumberText = styled.p`
  font: ${({ theme }) => theme.fonts.Heading};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 1.2rem 2.4rem;
`;

const StDiv = styled.div`
  position: relative;
`;

const StShadowCard = styled.div`
  content: '';
  display: flex;
  align-items: flex-end;
  position: absolute;
  left: 0;
  top: 0;
  width: 26rem;
  height: 35.5rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.85));
  z-index: 2;
`;

const StChartCardWrapper = styled.section`
  width: 100%;
  height: 44.3rem;
  display: flex;
  justify-content: space-between;
  margin-top: 8.45rem;
`;

const StMovieChartCard = styled.article`
  width: 26rem;
  height: 100%;
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
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
`;

const StBar = styled.div`
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colors.gray20};
  width: 0.1rem;
  height: 1.8rem;
  margin-left: 1.7rem;
  margin-right: 1.7rem;
`;

const StMovieChartWrapper = styled.div`
  width: 118.4rem;
  height: 55.4rem;
  padding: 0;
  margin: 0;
`;

const StMovieChartSection = styled.div`
  width: 100%;
  height: 69.6rem;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBackgroundBar = styled.div`
  width: 100%;
  height: 23.6rem;
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.colors.red2};
  position: absolute;
  top: 59.9rem;
  z-index: -1;
`;
