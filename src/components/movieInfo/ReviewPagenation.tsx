import React, { useEffect, useState } from 'react';
import useGetReviewList from '../../libs/hooks/useGetReviewList';
import { css, styled } from 'styled-components';
import Review from './Review';
import { ReviewInfo } from '../../types/movieInfo';
import ReviewLanding from './Skeleton/ReviewLanding';

const ReviewPageNation = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { reviewList, totalPages, isError, isLoading } = useGetReviewList(2, currentPage);
  const pageList = [...Array(totalPages)].map((_, idx) => idx + 1);

  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const pageBtn = e.target as HTMLButtonElement;
    setCurrentPage(() => Number(pageBtn.innerText));
  };

  if (isError) {
    console.log('error');
  }

  if (isLoading) {
    return (
      <>
        <ReviewLanding />

        <StPageChangeBtnWrapper>
          {pageList.map((pageNum, idx) => (
            <StPageBtn isCurrentPage={currentPage === pageNum} key={idx}>
              {pageNum}
            </StPageBtn>
          ))}
        </StPageChangeBtnWrapper>
      </>
    );
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

export default ReviewPageNation;
