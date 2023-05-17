import { styled } from 'styled-components';
import { IcBody1 } from '../asset/icon';

const MainPromotionBox = () => {
  return (
    <StMoviePromotionWrapper>
      <IcBody1 />
    </StMoviePromotionWrapper>
  );
};

export default MainPromotionBox;

const StMoviePromotionWrapper = styled.div`
  width: 100%;
  height: 599rem;
`;
