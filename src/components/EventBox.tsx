import { styled } from 'styled-components';
import { IcEvent1Img, IcEvent2Img, IcEvent3Img, IcGrayallButton, IcStopButton } from '../asset/icon';

const EventBox = () => {
  const data = [
    {
      img: IcEvent1Img,
      title: '[CGV]5월엔 네모행 event',
      period: '2023.05.02~2023.05.07',
    },
    {
      img: IcEvent2Img,
      title: '[극장판짱구는못말려]닌자 피규어',
      period: '2023.04.20~2023.05.04',
    },
    {
      img: IcEvent3Img,
      title: '[슈퍼 마리오 브라더스]현장 이벤트',
      period: '2023.04.20~2023.05.04',
    },
  ];
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
          {data.map((item) => {
            return (
              <StEventCard key={item.title}>
                <item.img />
                <StEventCardTitleText>{item.title}</StEventCardTitleText>
                <StEventCardPeriodText>{item.period}</StEventCardPeriodText>
              </StEventCard>
            );
          })}
        </StEventCardWrapper>
      </StEventBoxWrapper>
    </StEventBoxSection>
  );
};

export default EventBox;

const StEventCardWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StEventCardPeriodText = styled.time`
  font: ${({ theme }) => theme.fonts.Body5};
`;

const StEventCardTitleText = styled.span`
  margin-top: 1.1rem;
  margin-bottom: 1.1rem;

  font: ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.gray90};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StEventCard = styled.article`
  display: flex;
  flex-direction: column;

  width: 37.8rem;
  height: 32.4rem;
`;

const StEventButtonWrapper = styled.div`
  display: flex;

  height: 3.5rem;

  & > * {
    margin-left: 0.7rem;
  }
`;

const StEventTopBarText = styled.p`
  font: ${({ theme }) => theme.fonts.Title};
`;

const StEventTopBar = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 3.5rem;
  margin-bottom: 3.3rem;
`;

const StEventBoxWrapper = styled.div`
  width: 118.4rem;
  height: 55.4rem;
`;

const StEventBoxSection = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 38.5rem;
`;
