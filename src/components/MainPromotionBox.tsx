import { styled } from 'styled-components';
import { IcBody1 } from '../asset/icon';

const MainPromotionBox = () => {
  return (
    <StMoviePromotionWrapper>
      <StContent>
        <IcBody1 />
      </StContent>
    </StMoviePromotionWrapper>
  );
};

export default MainPromotionBox;

const StContent = styled.div`
  height: 100%;
`;

const StMoviePromotionWrapper = styled.div`
  width: 100%;
  height: 59.9rem;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
`;
