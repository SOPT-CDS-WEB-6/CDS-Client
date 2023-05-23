import styled from 'styled-components';
import { IcMidadImg, IcChart1Img, IcChart2Img } from '../asset/icon';

function MovieDetail() {
  const ButtonList = ['주요정보', '트레일러', '스틸컷', '평점/리뷰'];

  return (
    <StMovieDetail>
      <StUl>
        <StArrowLi>☞</StArrowLi>
        {ButtonList.map((eachButton) => {
          return (
            <>
              <StLi>{eachButton}</StLi>
              <StBar />
            </>
          );
        })}

        <StLi>상영시간표</StLi>
      </StUl>
      <article>
        <StSynopsis>
          ‘가모라’를 잃고 슬픔에 빠져 있던 ‘피터 퀼’이 위기에 처한 은하계와 동료를 지키기 위해 다시 한번 가디언즈 팀과
          힘을 모으고,
        </StSynopsis>
        <StSynopsis>성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기</StSynopsis>
      </article>
      <StChartSection>
        <StEachChart>
          <StChartTitle>성별 예매 분포</StChartTitle>
          <StDonutChart>
            <IcChart1Img />
          </StDonutChart>
        </StEachChart>
        <StChartBar />
        <StEachChart>
          <StChartTitle>연령별 예매 분포</StChartTitle>
          <StBarChart>
            <IcChart2Img />
          </StBarChart>
        </StEachChart>
      </StChartSection>
      <IcMidadImg />
    </StMovieDetail>
  );
}

export default MovieDetail;

const StMovieDetail = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 99.4rem;
  margin: 0 2.7rem 11.1rem 0;
`;

const StUl = styled.ul`
  display: flex;
  align-items: center;

  height: 4.6rem;
  margin-bottom: 10.8rem;

  background-color: ${({ theme }) => theme.colors.gray20};
`;

const StLi = styled.li`
  margin: 0 1.5rem 0 1.5rem;

  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray80};
`;

const StArrowLi = styled(StLi)`
  margin: 0 0 0 1.5rem;
`;

const StBar = styled.div`
  width: 0.1rem;
  height: 1.6rem;

  background-color: ${({ theme }) => theme.colors.gray70};
`;

const StSynopsis = styled.p`
  margin-bottom: 1.3rem;

  ${({ theme }) => theme.fonts.Body4};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StChartSection = styled.section`
  display: flex;
  position: relative;

  width: 96.7rem;
  height: 28.6rem;
  margin: 6.3rem 0 4.1rem 0;
`;

const StChartTitle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 7.5rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray40};
  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray40};

  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray70};
`;

const StEachChart = styled.article`
  display: flex;
  flex-direction: column;
`;

const StDonutChart = styled.div`
  margin: 0.9rem 3.4rem 0 0;
`;

const StBarChart = styled.div`
  margin: 0.9rem 0 0 1.3rem;
`;

const StChartBar = styled.div`
  position: absolute;
  left: 48.4rem;

  width: 0.1rem;
  height: 23.3rem;

  background-color: ${({ theme }) => theme.colors.gray40};
`;
