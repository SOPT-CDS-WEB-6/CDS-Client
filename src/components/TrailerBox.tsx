import styled from 'styled-components';
import { IcPlusButton, IcTrailer1Img, IcTrailer2Img, IcTrailer3Img, IcPlayButton } from '../asset/icon';

function TrailerBox() {
  const TrailerList = [
    {
      title: '전 세계 최초 개봉!',
      date: '2023.05.03',
      trailer: <IcTrailer1Img />,
    },
    {
      title: '전 세계 최초 개봉!',
      date: '2023.06.03',
      trailer: <IcTrailer2Img />,
    },
    {
      title: '전 세계 최초 개봉!',
      date: '2023.07.03',
      trailer: <IcTrailer3Img />,
    },
  ];

  return (
    <StTrailerBox>
      <StTrailerBar>
        <StTrailerText>트레일러</StTrailerText>
        <StTrailerNo>5건</StTrailerNo>
        <StPlusButton>
          <IcPlusButton />
        </StPlusButton>
      </StTrailerBar>
      <StVidBox>
        {TrailerList.map((eachTrailer) => {
          return (
            <StEachTrailer>
              <StTrailerVid>
                <StPlayButton>
                  <IcPlayButton />
                </StPlayButton>
                {eachTrailer.trailer}
              </StTrailerVid>
              <StVidTitleBox>
                <StHdBox>HD</StHdBox>
                <StVidTitle>{eachTrailer.title}</StVidTitle>
              </StVidTitleBox>
              <StVidDate>{eachTrailer.date}</StVidDate>
            </StEachTrailer>
          );
        })}
      </StVidBox>
    </StTrailerBox>
  );
}

export default TrailerBox;

const StTrailerBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 96.7rem;
  height: 35rem;
`;

const StTrailerBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 3.8rem;

  background-color: ${({ theme }) => theme.colors.gray10};

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StTrailerText = styled.p`
  margin-left: 1.5rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StTrailerNo = styled.p`
  margin-left: 0.8rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray40};
`;

const StPlusButton = styled.div`
  margin-left: 0.8rem;
`;

const StVidBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  width: 100%;
  margin-top: 1.5rem;
`;

const StEachTrailer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StTrailerVid = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const StVidTitleBox = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;

const StHdBox = styled.div`
  text-align: center;
  width: 3.9rem;
  height: 2.3rem;
  margin-right: 1rem;
  padding: 0.6rem 0.8rem 0.7rem 0.9rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.blue};

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.blue};
`;

const StVidTitle = styled.p`
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StVidDate = styled.p`
  margin-top: 1.5rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray40};
`;

const StPlayButton = styled.div`
  position: absolute;
  top: 10.9rem;
  left: 24.9rem;
`;
