import styled from 'styled-components';
import { IcImaxImg, Ic4dxLogoImg, IcEggIcon, IcInfoIcon, IcQuestionEgg, IcMovieImg } from '../asset/icon';
import useGetMovieInfo from '../libs/hooks/useGetMovieInfo';
import { useEffect, useState } from 'react';
import MovieInfoResponse from '../types/movieInfoResponse';

function MovieInfo() {
  // const movieInfo = useGetMovieInfo(1)?.response.data;
  const { data, isError, isLoading } = useGetMovieInfo(1);
  const [movieInfoData, setMovieInfoData] = useState<MovieInfoResponse[]>([]);

  useEffect(() => {
    if (data !== undefined) {
      setMovieInfoData(data);
    }
  }, [data]);

  return (
    <StMovieInfoBox>
      <StMoviePoster src={movieInfoData[2].data.posterLink} />
      {/* <IcMovieImg /> */}
      {/* </StMoviePoster> */}
      <StMovieInfo>
        <StTitle>
          {movieInfo?.title}
          {/* 가디언즈 오브 갤럭시-Volume 3 */}
          <StNowShowingBox>
            <StNowShowingText>현재상영중</StNowShowingText>
          </StNowShowingBox>
        </StTitle>
        <StEngTitle>
          {movieInfo?.originTitle}
          {/* Guardians of the Galaxy Volume 3 */}
        </StEngTitle>
        <StRateBox>
          <StRate>
            예매율&nbsp;
            {movieInfo?.reservationRate}%{/* 38.0% */}
          </StRate>
          <StEggIcon>
            <IcEggIcon />
          </StEggIcon>

          <StEggRate>
            {movieInfo?.goldenEgg}%{/* 98% */}
          </StEggRate>
        </StRateBox>
        <StRowBar />
        <StMovieDetail>
          감독 :&nbsp;{movieInfo?.director}
          {/* 제임스 건 */}&nbsp;/ 배우 :&nbsp;{movieInfo?.actor}
          {/* 크리스 프랫 , 조 샐다나 , 데이브 바티스타 , 카렌 길런 , 폼 클레멘티에프 , 빈 디젤 ,
          브래들리 쿠퍼 , 윌 폴터 */}
        </StMovieDetail>
        <StMovieDetail>
          장르 : &nbsp;
          {movieInfo?.genre}
          {/* 엑션  */}
          &nbsp;/ 기본 :&nbsp;
          {movieInfo?.ageLimit},&nbsp;
          {movieInfo?.duration},&nbsp;
          {movieInfo?.nation}
          {/* 12, 150분, 미국 */}
        </StMovieDetail>
        <StMovieDetail>
          개봉 :&nbsp;
          {movieInfo?.releasedAt}
          {/* 2023.05.03 */}
        </StMovieDetail>

        <StMovieInfoDetailBox>
          <StMovieTypeWrapper>
            <StImaxIcon>
              <IcImaxImg />
            </StImaxIcon>
            <Ic4dxLogoImg />
          </StMovieTypeWrapper>
        </StMovieInfoDetailBox>

        <StButtonWrapper>
          <StFreeEggBtn>
            <StQuestionEggIcon>
              <IcQuestionEgg />
            </StQuestionEggIcon>
            프리에그
          </StFreeEggBtn>
          <StReserveBtn>특별한 영화 경험 시작하기 🎬</StReserveBtn>
        </StButtonWrapper>
        <StPreEgg>
          <StPreEggText>
            <StInfoIcon>
              <IcInfoIcon />
            </StInfoIcon>
            프리에그(Pre Egg)란?
          </StPreEggText>
          <StPreEggText>개봉 전 영화에 대한 기대 수치를 의미합니다.</StPreEggText>
        </StPreEgg>
      </StMovieInfo>
    </StMovieInfoBox>
  );
}

export default MovieInfo;

const StMovieInfoBox = styled.section`
  display: flex;
  justify-content: center;

  width: 119.4rem;
  margin-top: 4.9rem;
`;

const StRateBox = styled.article`
  display: flex;
  align-items: center;
`;

const StRowBar = styled.div`
  width: 96.7rem;
  height: 0.1rem;
  margin: 0 0 3.9rem 2.8rem;

  background-color: ${({ theme }) => theme.colors.gray20};
`;

const StMovieInfoDetailBox = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30rem;
  left: 113rem;
`;

const StMoviePoster = styled.img`
  width: 19.9rem;
  height: 30.4rem;
  margin: 0 2.8rem 0 0.2rem;
`;

const StMovieTypeWrapper = styled.span`
  display: flex;
`;

const StButtonWrapper = styled.span`
  display: flex;
  align-items: center;

  margin: 2.4rem 0 1.7rem 4.4rem;
`;

const StMovieInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StTitle = styled.h1`
  display: flex;
  align-items: center;

  margin: 1rem 0 1.7rem 4.9rem;

  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.black};
`;

const StNowShowingBox = styled.em`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8.9rem;
  height: 3.1rem;
  margin-left: 1rem;
  padding: 1rem 1rem 1.1rem 1rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.blue};

  color: ${({ theme }) => theme.colors.blue};
`;

const StNowShowingText = styled.span`
  ${({ theme }) => theme.fonts.Body5};
`;

const StInfoText = styled.h3`
  margin-left: 4.9rem;

  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray70};
`;

const StRate = styled(StInfoText)`
  margin-bottom: 1.3rem;

  color: ${({ theme }) => theme.colors.gray90};
`;

const StEggRate = styled(StInfoText)`
  margin: 0 0 1.3rem 0;

  color: ${({ theme }) => theme.colors.gray90};
`;

const StEngTitle = styled(StInfoText)`
  margin-bottom: 2.6rem;
`;

const StMovieDetail = styled.h5`
  margin: 0 0 1.5rem 4.4rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StButton = styled.button`
  width: 13.1rem;
  height: 4.1rem;
`;

const StFreeEggBtn = styled(StButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.6rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray90};
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StReserveBtn = styled(StButton)`
  width: 26.9rem;

  border: none;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.red2};

  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.white};
`;

const StPreEgg = styled.div`
  margin-left: 4.4rem;
`;

const StPreEggText = styled.p`
  display: flex;
  align-items: center;
  margin: 0 0 1.4rem 0.4rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};
`;

const StEggIcon = styled.div`
  margin: 0 0.5rem 0.4rem 1rem;
`;

const StInfoIcon = styled.div`
  margin-right: 0.8rem;
`;

const StQuestionEggIcon = styled.div`
  margin-right: 0.2rem;
`;

const StImaxIcon = styled.div`
  margin-right: 0.6rem;
`;
