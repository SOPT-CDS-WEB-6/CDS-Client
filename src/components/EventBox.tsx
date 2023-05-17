import { styled } from 'styled-components';
import { IcEvent1Img, IcGrayallButton, IcStopButton } from '../asset/icon';

const EventBox = () => {
  return (
    <StEventBoxSection>
      <StEventBoxWrapper>
        <StEventTopBar>
          <StEventTopBarText>EVENT</StEventTopBarText>
          <StEventButtonWrapper>
            <IcStopButton />
            <IcGrayallButton />
          </StEventButtonWrapper>
        </StEventTopBar>
        <StEventCardWrapper>
          <StEventCard>
            <IcEvent1Img></IcEvent1Img>
            <StEventCardTitleText>[CGV]5월엔 네모행 event</StEventCardTitleText>
            <StEventCardPeriodText>2023.05.02~2023.05.07</StEventCardPeriodText>
          </StEventCard>
          <StEventCard>
            <IcEvent1Img></IcEvent1Img>
            <StEventCardTitleText>[CGV]5월엔 네모행 event</StEventCardTitleText>
            <StEventCardPeriodText>2023.05.02~2023.05.07</StEventCardPeriodText>
          </StEventCard>
          <StEventCard>
            <IcEvent1Img></IcEvent1Img>
            <StEventCardTitleText>[CGV]5월엔 네모행 event</StEventCardTitleText>
            <StEventCardPeriodText>2023.05.02~2023.05.07</StEventCardPeriodText>
          </StEventCard>
        </StEventCardWrapper>
      </StEventBoxWrapper>
    </StEventBoxSection>
  );
};

export default EventBox;

const StEventCardWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StEventCardPeriodText = styled.span`
  font: ${({ theme }) => theme.fonts.Body5};
`;

const StEventCardTitleText = styled.span`
  margin-top: 1.1rem;
  margin-bottom: 1.1rem;
  font: ${({ theme }) => theme.fonts.Body1};
`;

const StEventCard = styled.article`
  width: 37.8rem;
  height: 32.4rem;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const StEventButtonWrapper = styled.div`
  height: 3.5rem;
  display: flex;

  & > * {
    margin-left: 0.7rem;
  }
`;

const StEventTopBarText = styled.div`
  font: ${({ theme }) => theme.fonts.Title};
`;

const StEventTopBar = styled.div`
  width: 100%;
  height: 3.5rem;
  margin-bottom: 3.3rem;
  display: flex;
  justify-content: space-between;
`;

const StEventBoxWrapper = styled.div`
  width: 118.4rem;
  height: 55.4rem;
  padding: 0;
  margin: 0;
`;

const StEventBoxSection = styled.div`
  width: 100%;
  height: 38.5rem;
  padding: 0;
  display: flex;
  justify-content: center;
`;
