import { styled } from 'styled-components';
import ReviewSkeleton from './ReviewSkeleton';

const ReviewLanding = () => {
  return (
    <>
      <StReviewWrapper>
        {Array(6)
          .fill(true)
          ?.map((_, idx) => (
            <ReviewSkeleton key={idx} />
          ))}
      </StReviewWrapper>
    </>
  );
};

const StReviewWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default ReviewLanding;
