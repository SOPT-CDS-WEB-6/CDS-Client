import styled from 'styled-components';
import SideAdBanner from './SideAdBanner';

function MovieDetail() {
  return (
    <StSection>
      <StArticle>
        <StUl>
          <li>☞</li>
          <li>주요정보</li>
          <li>트레일러</li>
          <li>스틸컷</li>
          <li>평점/리뷰</li>
          <li>상영시간표</li>
        </StUl>
        <StDiv>
          <p>
            "‘가모라’를 잃고 슬픔에 빠져 있던 ‘피터 퀼’이 위기에 처한 은하계와 동료를 지키기 위해 다시 한번 가디언즈
            팀과 힘을 모으고,"
            <br />
            "성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기"
          </p>
        </StDiv>
        <StChartSection></StChartSection>
        <StBottomAd src="" />
      </StArticle>
      <SideAdBanner />
    </StSection>
  );
}

export default MovieDetail;

const StSection = styled.section`
  display: flex;
  justify-content: center;

  width: 119.4rem;
  margin: 14.7rem 36.3rem 2.7rem 36.3rem;
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StUl = styled.ul`
  display: flex;

  width: 55.8rem;
  height: 4.6rem;
  margin-bottom: 10.8rem;

  background-color: ${({ theme }) => theme.colors.gray20};

  ${({ theme }) => theme.fonts.Body3};
  color: #454545;
`;

const StDiv = styled.div`
  ${({ theme }) => theme.fonts.Body4};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StBottomAd = styled.img`
  width: 96.7rem;
  height: 10.6rem;
`;

const StChartSection = styled.section`
  width: 96.7rem;
  height: 28.6rem;
`;
