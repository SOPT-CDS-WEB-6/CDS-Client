import styled from 'styled-components';
import { IcPlusButton } from '../asset/icon';
import { IcTrailer1Img } from '../asset/icon';
import { IcTrailer2Img } from '../asset/icon';
import { IcTrailer3Img } from '../asset/icon';
import { IcPlayButton } from '../asset/icon';

function TrailerBox() {
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
        <StEachTrailer>
          <StTrailerVid>
            <StPlayButton>
              <IcPlayButton />
            </StPlayButton>

            <IcTrailer1Img />
          </StTrailerVid>
          <StVidTitle>
            <StHdBox>HD</StHdBox>전 세계 최초 개봉!
          </StVidTitle>
          <StVidDate>2023.05.03</StVidDate>
        </StEachTrailer>

        <StEachTrailer>
          <StTrailerVid>
            <StPlayButton>
              <IcPlayButton />
            </StPlayButton>
            <IcTrailer2Img />
          </StTrailerVid>
          <StVidTitle>
            <StHdBox>HD</StHdBox>전 세계 최초 개봉!
          </StVidTitle>
          <StVidDate>2023.05.03</StVidDate>
        </StEachTrailer>

        <StEachTrailer>
          <StTrailerVid>
            <StPlayButton>
              <IcPlayButton />
            </StPlayButton>
            <IcTrailer3Img />
          </StTrailerVid>
          <StVidTitle>
            <StHdBox>HD</StHdBox>전 세계 최초 개봉!
          </StVidTitle>
          <StVidDate>2023.05.03</StVidDate>
        </StEachTrailer>
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

  background-color: #f6f6f6;

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

  width: 100%;
  padding: 0;
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

const StVidTitle = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;

  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StVidDate = styled.p`
  margin-top: 1.5rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray40};
`;

const StHdBox = styled.div`
  text-align: center;
  width: 3.9rem;
  height: 2.3rem;
  margin-right: 1rem;
  padding: 0.4rem;

  border: 0.1rem solid #0076b1;

  ${({ theme }) => theme.fonts.Body5};
  color: #0076b1;
`;

const StPlayButton = styled.div`
  position: absolute;
  top: 10.9rem;
  left: 24.9rem;
  /* right: 1rem;
  bottom: 1rem; */
`;
