import { styled } from 'styled-components';
import { IcEvent1Img, IcEvent2Img, IcEvent3Img, IcGrayallButton, IcStopButton } from '../../asset/icon';
import useGetEventList from '../../libs/hooks/useGetEventList';
import { useEffect, useState } from 'react';

interface EventProps {
  eventNumber: number;
  eventThumbnailLink: string;
  startedAt: string;
  endedAt: string;
  eventTitle: string;
}

const EventBox = () => {
  const [eventList, setEventList] = useState<EventProps[]>([]);

  const { eventListData, error } = useGetEventList();

  useEffect(() => {
    if (eventListData) {
      setEventList(eventListData);
    }
  });

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
          {eventList.map((item) => {
            return (
              <StEventCard key={item.eventTitle}>
                <StEventImg src={item.eventThumbnailLink} />
                <StEventCardTitleText>{item.eventTitle}</StEventCardTitleText>
                <StEventCardPeriodText>
                  {item.startedAt}~{item.endedAt}
                </StEventCardPeriodText>
              </StEventCard>
            );
          })}
        </StEventCardWrapper>
      </StEventBoxWrapper>
    </StEventBoxSection>
  );
};

export default EventBox;

const StEventImg = styled.img`
  width: 37.8rem;
  height: 26.3rem;

  object-fit: cover;
`;

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
