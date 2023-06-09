import styled from 'styled-components';
import { IcPreeggImg, IcGoldeggImg, IcBrownTextBox } from '../asset/icon';
import useGetMovieInfo from '../libs/hooks/useGetMovieInfo';
function ScoreBox({ movieNumber }: { movieNumber: number }) {
  const { data } = useGetMovieInfo(movieNumber);

  if (!data) {
    return <div>error!!</div>;
  } else {
    return (
      <StScoreBox>
        <StTextBox>
          <StText>스토리가 탄탄하고</StText>
          <StText>기분이 좋아지는 영화</StText>
        </StTextBox>
        <StEggBox>
          <StEggIcon>
            <IcPreeggImg />
          </StEggIcon>
          <StIconTextBox>
            <IcBrownTextBox />
            <StTextBoxText>사전기대지수</StTextBoxText>

            <StTitleText>Pre Egg</StTitleText>
            <StScoreText>{data.preEgg}%</StScoreText>
          </StIconTextBox>
          <StBar />
          <StEggIcon>
            <IcGoldeggImg />
          </StEggIcon>
          <StIconTextBox>
            <IcBrownTextBox />
            <StTextBoxText>실관람평지수</StTextBoxText>

            <StTitleText>Golden Egg</StTitleText>
            <StScoreText>{data.goldenEgg}%</StScoreText>
          </StIconTextBox>
        </StEggBox>
      </StScoreBox>
    );
  }
}

export default ScoreBox;

const StScoreBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 18.5rem;

  border-top: 0.2rem solid ${({ theme }) => theme.colors.gray70};
`;

const StTextBox = styled.article`
  display: flex;
  flex-direction: column;

  margin: 1.9rem 0 0 0.4rem;
`;

const StText = styled.p`
  margin-bottom: 1.7rem;

  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.black};
`;

const StEggBox = styled.article`
  display: flex;
  align-items: center;

  margin-left: 1rem;
`;

const StEggIcon = styled.div`
  margin-right: 1.3rem;
`;

const StIconTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StTitleText = styled.p`
  margin: 0.5rem 0 0.6rem 0;

  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.red};
`;

const StScoreText = styled.p`
  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StTextBoxText = styled.p`
  position: absolute;

  margin: 0.6rem 0.5rem 1.4rem 0.7rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.white};
`;

const StBar = styled.div`
  width: 0.1rem;
  height: 5.3rem;
  margin: 0 2.8rem 0 4.6rem;

  background-color: ${({ theme }) => theme.colors.gray20};
`;
