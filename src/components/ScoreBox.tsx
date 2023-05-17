import styled from 'styled-components';
import { IcPreeggImg } from '../asset/icon';
import { IcGoldeggImg } from '../asset/icon';

function ScoreBox() {
  return (
    <StScoreBox>
      <StTextBox>
        스토리가 탄탄하고
        <br />
        기분이 좋아지는 영화
      </StTextBox>
      <StEggBox>
        <StEggIcon>
          <IcPreeggImg />
        </StEggIcon>
        <StIconTextBox>
          <StIconText className="title">Pre Egg</StIconText>
          <StIconText className="score">99%</StIconText>
        </StIconTextBox>
        <StBar />
        <StEggIcon>
          <IcGoldeggImg />
        </StEggIcon>
        <StIconTextBox>
          <StIconText className="title">Golden Egg</StIconText>
          <StIconText className="score">98%</StIconText>
        </StIconTextBox>
      </StEggBox>
    </StScoreBox>
  );
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
  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.black};
`;

const StEggBox = styled.article`
  display: flex;
  margin-left: 1rem;
`;

const StEggIcon = styled.div`
  margin-right: 1.3rem;
`;

const StIconTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StIconText = styled.p`
  &.title {
    ${({ theme }) => theme.fonts.Body3};
    color: ${({ theme }) => theme.colors.red};
  }

  &.score {
    ${({ theme }) => theme.fonts.Title};
    color: ${({ theme }) => theme.colors.gray90};
  }
`;

const StBar = styled.div`
  width: 0.1rem;
  height: 5.3rem;
  margin: 0 2.8rem 0 4.6rem;

  background-color: ${({ theme }) => theme.colors.gray20};
`;
