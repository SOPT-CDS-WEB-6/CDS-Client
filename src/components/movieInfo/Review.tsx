import { styled } from 'styled-components';
import { IcMoreDots, IcProfile, IcProfileGoldEgg, IcThumb } from '../../asset/icon';

interface ReviewProps {
  reviewerId: string;
  reviewContent: string;
  likes: number;
  createdAt: string;
}

const Review = (props: ReviewProps) => {
  const { reviewerId, reviewContent, likes, createdAt } = props;
  return (
    <StReviewItem>
      <IcProfile />

      <button type="button">
        <IcMoreDots />
      </button>

      <div>
        <IcProfileGoldEgg />
        <p>{reviewerId}</p>
      </div>

      <StReviewComment>{reviewContent}</StReviewComment>

      <footer>
        <time>{createdAt}</time>
        <Stlike>
          <IcThumb />
          <p>{likes}</p>
        </Stlike>
      </footer>
    </StReviewItem>
  );
};

const StReviewItem = styled.section`
  position: relative;

  width: 48.6rem;
  height: 25.9rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray20};

  > svg {
    position: absolute;
    left: 2.5rem;
    top: 3rem;
  }

  > button {
    position: absolute;
    top: 3rem;
    right: 1.9rem;

    border: none;
    background-color: transparent;

    cursor: pointer;
  }

  > div {
    display: flex;
    position: absolute;
    left: 13.8rem;
    top: 3rem;

    > svg {
      margin-right: 0.7rem;
    }

    > p {
      margin: 0;

      ${({ theme }) => theme.fonts.Body5};

      color: ${({ theme }) => theme.colors.gray70};
    }
  }

  > footer {
    display: flex;
    position: absolute;
    left: 13.8rem;
    bottom: 2.2rem;

    > time {
      margin-right: 1.4rem;
    }
  }
`;

const StReviewComment = styled.p`
  position: absolute;
  left: 13.8rem;
  top: 6.1rem;
  margin: 0;

  ${({ theme }) => theme.fonts.Body5};
`;

const Stlike = styled.div`
  display: flex;
  gap: 0.7rem;

  color: ${({ theme }) => theme.colors.gray70};

  > p {
    margin: 0;
  }
`;

export default Review;
