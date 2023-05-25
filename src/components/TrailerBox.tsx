import styled from 'styled-components';
import { IcPlusButton, IcPlayButton } from '../asset/icon';
import useGetMovieInfo from '../libs/hooks/useGetMovieInfo';

function TrailerBox() {
  const { data } = useGetMovieInfo(2);

  if (!data) {
    return <div>error!!</div>;
  } else
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
          {data.data.trailerList.map((eachTrailer) => {
            return (
              <StEachTrailer key={eachTrailer.trailerTitle}>
                <StTrailerVidWrapper>
                  <StTrailerVid src={eachTrailer.thumbnailLink} />
                  <StPlayButton>
                    <IcPlayButton />
                  </StPlayButton>
                </StTrailerVidWrapper>

                <StVidTitleBox>
                  <StHdBox>HD</StHdBox>
                  <StVidTitle>{eachTrailer.trailerTitle}</StVidTitle>
                </StVidTitleBox>
                <StVidDate>{eachTrailer.trailerReleasedAt}</StVidDate>
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

const StTrailerVidWrapper = styled.div`
  position: relative;
`;

const StTrailerVid = styled.img`
  display: flex;
  justify-content: center;

  width: 30.9rem;
  height: 16.9rem;
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
  width: 26rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

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
