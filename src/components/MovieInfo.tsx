import styled from 'styled-components';
import { IcImaxImg, Ic4dxLogoImg, IcEggIcon, IcInfoIcon, IcQuestionEgg, IcMovieImg } from '../asset/icon';

function MovieInfo() {
  return (
    <StMovieInfoBox>
      <StMoviePoster>
        <IcMovieImg />
      </StMoviePoster>
      <StMovieInfo>
        <StTitle>
          가디언즈 오브 갤럭시-Volume 3
          <StNowShowingBox>
            <StNowShowingText>현재상영중</StNowShowingText>
          </StNowShowingBox>
        </StTitle>
        <StBody3 className="engTitle">Guardians of the Galaxy Volume 3</StBody3>
        <StRateBox>
          <StBody3 className="rate">예매율 38.0%</StBody3>
          <StEggIcon>
            <IcEggIcon />
          </StEggIcon>

          <StBody3 className="eggRate">98%</StBody3>
        </StRateBox>
        <StRowBar />
        <StBody5>
          감독 : 제임스 건 / 배우 : 크리스 프랫 , 조 샐다나 , 데이브 바티스타 , 카렌 길런 , 폼 클레멘티에프 , 빈 디젤 ,
          브래들리 쿠퍼 , 윌 폴터
        </StBody5>
        <StBody5>장르 : 엑션 / 기본 : 12, 150분, 미국</StBody5>
        <StBody5>개봉 : 2023.05.03</StBody5>

        <StMovieInfoDetailBox>
          <StMovieTypeSpan>
            <StImaxIcon>
              <IcImaxImg />
            </StImaxIcon>
            <Ic4dxLogoImg />
          </StMovieTypeSpan>
        </StMovieInfoDetailBox>

        <StButtonSpan>
          <StButton className="freeEgg">
            <StQuestionEggIcon>
              <IcQuestionEgg />
            </StQuestionEggIcon>
            프리에그
          </StButton>
          <StButton className="reserve">특별한 영화 경험 시작하기 🎬</StButton>
        </StButtonSpan>
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
  top: 25rem;
  left: 134.8rem;
`;

const StMovieInfoBox = styled.section`
  display: flex;

  width: 119.4rem;
  margin: 4.9rem 36.3rem 0 36.3rem;
`;

const StMoviePoster = styled.div`
  margin: 0 2.8rem 0 0.2rem;
`;

const StMovieTypeSpan = styled.span`
  display: flex;
`;

const StButtonSpan = styled.span`
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

  border: 0.1rem solid #0076b1;

  color: #0076b1;
`;

const StNowShowingText = styled.span`
  ${({ theme }) => theme.fonts.Body5};
`;

const StBody3 = styled.h3`
  margin-left: 4.9rem;

  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray70};

  &.rate {
    margin-bottom: 1.3rem;

    color: ${({ theme }) => theme.colors.gray90};
  }
  &.eggRate {
    margin: 0 0 1.3rem 0;

    color: ${({ theme }) => theme.colors.gray90};
  }

  &.engTitle {
    margin-bottom: 2.6rem;
  }
`;

const StBody5 = styled.h5`
  margin: 0 0 1.5rem 4.4rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StButton = styled.button`
  width: 13.1rem;
  height: 4.1rem;

  &.freeEgg {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.6rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray90};
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.Body3};
    color: ${({ theme }) => theme.colors.gray90};
  }

  &.reserve {
    width: 26.9rem;

    border: none;
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.colors.red2};

    ${({ theme }) => theme.fonts.Body3};
    color: ${({ theme }) => theme.colors.white};
  }
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
