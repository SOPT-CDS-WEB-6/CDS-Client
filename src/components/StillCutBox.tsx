import styled from 'styled-components';
import { IcPlusButton, IcStillCutImg, IcLeftarrowIcon, IcRightarrowIcon } from '../asset/icon';

function StillCutBox() {
  return (
    <StStillCutBox>
      <StStillCutBar>
        <StStillCutText>스틸컷</StStillCutText>
        <StStillCutNo>5건</StStillCutNo>
        <StPlusButton>
          <IcPlusButton />
        </StPlusButton>
      </StStillCutBar>

      <StStillCutGallery>
        <div>
          <IcLeftarrowIcon />
        </div>
        <article>
          <IcStillCutImg />
        </article>
        <div>
          <IcRightarrowIcon />
        </div>
      </StStillCutGallery>
    </StStillCutBox>
  );
}

export default StillCutBox;

const StStillCutBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 96.7rem;
  margin-bottom: 5rem;
`;

const StStillCutBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 3.8rem;

  background-color: ${({ theme }) => theme.colors.gray10};

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StStillCutText = styled.p`
  margin-left: 1.5rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StStillCutNo = styled.p`
  margin-left: 0.8rem;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray40};
`;

const StPlusButton = styled.div`
  margin-left: 0.8rem;
`;

const StStillCutGallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 5rem;
`;
