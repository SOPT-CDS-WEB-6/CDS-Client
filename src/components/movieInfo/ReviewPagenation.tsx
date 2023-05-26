import React, { useState } from 'react';
import useGetReviewList from '../../libs/hooks/useGetReviewList';
import { css, styled } from 'styled-components';
import Review from './Review';
import { ReviewInfo } from '../../types/movieInfo';
import ReviewLanding from './Skeleton/ReviewLanding';
import { IcMore10Button, IcMoreArrowButton } from '../../asset/icon';

const ReviewPagenation = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { reviewList, totalPages, isError, isLoading } = useGetReviewList(2, currentPage);
  const pageList = [...Array(totalPages)].map((_, idx) => idx + 1);

  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const pageBtn = e.target as HTMLButtonElement;
    setCurrentPage(() => Number(pageBtn.innerText));
  };

  const handleGoToEnd = () => {
    setCurrentPage(() => totalPages);
  };

  if (isError) {
    console.log('error');
  }

  if (isLoading) {
    return <ReviewLanding />;
  }

  return (
    <>
      <StReviewWrapper>
        {reviewList?.map((review: ReviewInfo) => (
          <Review
            key={review.reviewNumber}
            reviewerId={review.reviewerId}
            reviewContent={review.reviewContent}
            likes={review.likes}
            createdAt={review.createdAt}
          />
        ))}
      </StReviewWrapper>

      <StPageChangeBtnWrapper>
        {pageList.map((pageNum, idx) => (
          <StPageBtn isCurrentPage={currentPage === pageNum} key={idx} onClick={(e) => handlePageChange(e)}>
            {pageNum}
          </StPageBtn>
        ))}
        <IcMore10Button />
        <button type="button" onClick={() => handleGoToEnd()}>
          <IcMoreArrowButton />
        </button>
      </StPageChangeBtnWrapper>
    </>
  );
};

const StReviewWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StPageChangeBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  margin-top: 6rem;

  > button:last-child {
    border: none;
    background-color: transparent;

    cursor: pointer;
  }
`;

const StPageBtn = styled.button<{ isCurrentPage: boolean }>`
  border: none;
  background-color: transparent;

  ${({ theme }) => theme.fonts.Body3};

  cursor: pointer;

  ${({ isCurrentPage }) =>
    isCurrentPage &&
    css`
      color: ${({ theme }) => theme.colors.red2};

      text-decoration: underline;
    `};
`;

export default ReviewPagenation;
