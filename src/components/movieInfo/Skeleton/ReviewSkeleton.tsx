import { IcMoreDots } from '../../../asset/icon';
import { styled } from 'styled-components';
import { loading } from '../../../constants/animation';

const ReviewSkeleton = () => {
  return (
    <StReviewItem>
      <button type="button">
        <IcMoreDots />
      </button>
    </StReviewItem>
  );
};

const StReviewItem = styled.section`
  position: relative;

  width: 48.6rem;
  height: 25.9rem;

  border: 0.1rem solid gray;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 28%, #eeeeee 53%);

  animation: 2s ${loading} forwards infinite linear;

  > button {
    position: absolute;
    top: 3rem;
    right: 1.9rem;

    border: none;
    background-color: transparent;

    cursor: pointer;
  }
`;

export default ReviewSkeleton;
