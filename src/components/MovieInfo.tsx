import styled from 'styled-components';
import { IcImaxImg } from '../asset/icon';
import { Ic4dxLogoImg } from '../asset/icon';
import { IcEggIcon } from '../asset/icon';
import { IcInfoIcon } from '../asset/icon';
import { IcQuestionEgg } from '../asset/icon';
import { IcMovieImg } from '../asset/icon';

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
            <StNowShowingText className="now">현재상영중</StNowShowingText>
          </StNowShowingBox>
        </StTitle>
        <StBody3 className="engTitle">Guardians of the Galaxy Volume 3</StBody3>
        <StBody3 className="rate">
          예매율 38.0%
          <StEggIcon>
            <IcEggIcon />
          </StEggIcon>
          98%
        </StBody3>
        <StBody5>
          감독 : 제임스 건 / 배우 : 크리스 프랫 , 조 샐다나 , 데이브 바티스타 , 카렌 길런 , 폼 클레멘티에프 , 빈 디젤 ,
          브래들리 쿠퍼 , 윌 폴터
        </StBody5>
        <StBody5>장르 : 엑션 / 기본 : 12, 150분, 미국</StBody5>
        <StBody5>개봉 : 2023.05.03</StBody5>

        <StMovieInfoDetailBox>
          <StMovieTypeSpan>
            <StButtonSpan>
              <StButton className="freeEgg">
                <StQuestionEggIcon>
                  <IcQuestionEgg />
                </StQuestionEggIcon>
                프리에그
              </StButton>
              <StButton className="reserve">특별한 영화 경험 시작하기 🎬</StButton>
            </StButtonSpan>
            <StImaxIcon>
              <IcImaxImg />
            </StImaxIcon>
            <Ic4dxLogoImg />
          </StMovieTypeSpan>
          <StPreEgg>
            <StPreEggText>
              <StInfoIcon>
                <IcInfoIcon />
              </StInfoIcon>
              프리에그(Pre Egg)란?
            </StPreEggText>
            <StPreEggText>개봉 전 영화에 대한 기대 수치를 의미합니다.</StPreEggText>
          </StPreEgg>
        </StMovieInfoDetailBox>

        {/* <StButtonSpan>
          <StButton className="freeEgg">
            <StQuestionEggIcon>
              <IcQuestionEgg />
            </StQuestionEggIcon>
            프리에그
          </StButton>
          <StButton className="reserve">특별한 영화 경험 시작하기 🎬</StButton>
        </StButtonSpan> */}
        {/* <StDiv>
          <StP>
            <StInfoIcon>
              <IcInfoIcon />
            </StInfoIcon>
            프리에그(Pre Egg)란?
          </StP>
          <StP>개봉 전 영화에 대한 기대 수치를 의미합니다.</StP>
        </StDiv> */}
      </StMovieInfo>
    </StMovieInfoBox>
  );
}

export default MovieInfo;

const StMovieInfoDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 24rem;
`;

const StMovieInfoBox = styled.section`
  display: flex;

  width: 119.4rem;
  margin: 4.9rem 36.1rem;
`;

const StMoviePoster = styled.div`
  margin: 0 2.8rem 0 0.2rem;
`;

const StMovieTypeSpan = styled.span`
  display: flex;

  /* margin-left: 75.8rem; */
  /* margin-left: 1.4rem; */
`;

const StButtonSpan = styled.span`
  display: flex;
  align-items: center;

  margin: 7rem 33.6rem 0 0;
`;

const StMovieInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 2.1rem;
`;

const StTitle = styled.h1`
  /* margin-bottom: 3.5rem; */
  //피그마 상 간격
  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.black};
`;

const StNowShowingBox = styled.em`
  display: inline;
  position: relative;
  text-align: center;
  vertical-align: middle;

  margin-left: 1rem;
  padding: 0.4rem;

  border: 0.1rem solid #0076b1;

  color: #0076b1;
`;

const StNowShowingText = styled.span`
  ${({ theme }) => theme.fonts.Body5};
`;

const StBody3 = styled.h3`
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray70};

  &.rate {
    display: flex;
    align-items: center;

    width: 96.7rem;
    /* padding-bottom: 2rem; */
    //피그마 상 간격
    padding-bottom: 0.3rem;

    /* margin-bottom: 4.4rem; */
    //피그마 상 간격
    margin-bottom: 4rem;

    border-bottom: 0.1rem solid #e3e3e3;

    color: ${({ theme }) => theme.colors.gray90};
  }

  &.engTitle {
    /* margin-bottom: 3.9rem; */
    //피그마 상 간격
    margin-bottom: 1.5rem;
  }
`;

const StBody5 = styled.h5`
  /* margin-bottom: 2.5rem; */
  //피그마 상 간격
  margin-bottom: 1rem;

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
  /* margin-top: 2.6rem; */
  //피그마 상 간격

  margin-top: 1.5rem;
`;

const StPreEggText = styled.p`
  display: flex;
  align-items: center;

  /* margin-bottom: 2.5rem; */
  //피그마 상 간격
  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};
`;

const StEggIcon = styled.div`
  margin: 0 0.5rem 0 1rem;
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
