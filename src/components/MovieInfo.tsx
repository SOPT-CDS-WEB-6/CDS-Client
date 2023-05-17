import styled from 'styled-components';

function MovieInfo() {
  return (
    <StSection>
      <StImg
        src="https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
        alt="guardians of the galaxy vol 3 영화 포스터"></StImg>
      <StArticle>
        <StTitle>
          가디언즈 오브 갤럭시-Volume 3
          <StNowShowingBox>
            <StNowShowingText className="now">현재상영중</StNowShowingText>
          </StNowShowingBox>
        </StTitle>
        <StBody3 className="engTitle">Guardians of the Galaxy Volume 3</StBody3>
        <StBody3 className="rate">예매율 38.0% 98%</StBody3>
        <StBody5>
          감독 : 제임스 건 / 배우 : 크리스 프랫 , 조 샐다나 , 데이브 바티스타 , 카렌 길런 , 폼 클레멘티에프 , 빈 디젤 ,
          브래들리 쿠퍼 , 윌 폴터
        </StBody5>
        <StBody5>장르 : 엑션 / 기본 : 12, 150분, 미국</StBody5>
        <StBody5>개봉 : 2023.05.03</StBody5>
        <span></span>
        <span>
          <StButton className="freeEgg">프리에그</StButton>
          <StButton className="reserve">특별한 영화 경험 시작하기 🎬</StButton>
        </span>
        <StDiv>
          <StP>프리에그(Pre Egg)란?</StP>
          <StP>개봉 전 영화에 대한 기대 수치를 의미합니다.</StP>
        </StDiv>
      </StArticle>
    </StSection>
  );
}

export default MovieInfo;

const StSection = styled.section`
  display: flex;

  margin: 4.9rem 36.1rem;
`;

const StImg = styled.img`
  width: 19.9rem;
  height: 30.4rem;
  margin: 0 2.8rem 0 0.2rem;
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 96.7rem;
  margin-top: 2.1rem;
`;

const StTitle = styled.h1`
  margin-bottom: 3.5rem;

  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.black};
`;

const StNowShowingBox = styled.em`
  display: inline-block;
  position: relative;
  text-align: center;
  vertical-align: middle;

  width: 8.9rem;
  height: 3.1rem;
  margin-left: 1rem;
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
    width: 96.7rem;
    padding-bottom: 2rem;
    margin-bottom: 4.4rem;
    border-bottom: 0.1rem solid #e3e3e3;

    color: ${({ theme }) => theme.colors.gray90};
  }

  &.engTitle {
    margin-bottom: 3.9rem;
  }
`;

const StBody5 = styled.h5`
  margin-bottom: 2.5rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StButton = styled.button`
  width: 13.1rem;
  height: 4.1rem;

  &.freeEgg {
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

const StDiv = styled.div`
  margin-top: 2.6rem;
`;

const StP = styled.p`
  margin-bottom: 2.4rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};
`;