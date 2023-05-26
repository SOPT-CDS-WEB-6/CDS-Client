import styled from 'styled-components';
import { IcPlusButton } from '../asset/icon';
import useGetMovieStillCuts from '../libs/hooks/useGetMovieStillCut';
import NewStillCut from './NewStillCut';

function StillCutBox() {
  const { data } = useGetMovieStillCuts(3);
  const totalSlideNo = data?.data.length;

  if (!data) {
    return <div>error!!</div>;
  } else {
    return (
      <StStillCutBox>
        <StStillCutBar>
          <StStillCutText>스틸컷</StStillCutText>
          <StStillCutNo>{totalSlideNo}건</StStillCutNo>
          <StPlusButton>
            <IcPlusButton />
          </StPlusButton>
        </StStillCutBar>

        <StStillCutGallery>
          <NewStillCut />
        </StStillCutGallery>
      </StStillCutBox>
    );
  }
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
  width: 100%;
`;
