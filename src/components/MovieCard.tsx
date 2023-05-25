import { styled } from 'styled-components';

import { MovieDataInfo } from '../types/MovieData';
import { IcDeleteButton, IcReviewdeleteButton, IcRevieweditButton, IcReviewwriteButton } from '../asset/icon';

export interface MovieCardProps {
  data: MovieDataInfo;
}

function MovieCard(props: MovieCardProps) {
  const { data } = props;
  const startTime = data.startDate?.slice(0, -3);
  const endTime = data.endDate?.split(' ')[1].slice(0, 5);

  return (
    <StWatchedMovieCard>
      <StMoviePoster src={data.posterLink} />

      <StWatchedMovieInfo>
        <StWatchedMovieName>
          {data.name}
          <IcDeleteButton className="deleteBtn" />
        </StWatchedMovieName>
        <StWatchedMovieSubName>{data.subName}</StWatchedMovieSubName>

        <StWatchedInfo>{data.date}</StWatchedInfo>
        <StWatchedInfo>{data.cinemaInfo}</StWatchedInfo>

        {data.reviewBtn ? <IcReviewwriteButton /> : <IcRevieweditButton />}
        {data.deleteBtn ? <IcReviewdeleteButton className="deleteReviewBtn" /> : <></>}
      </StWatchedMovieInfo>
    </StWatchedMovieCard>
  );
}

const StWatchedMovieCard = styled.article`
  display: flex;
  align-items: center;

  width: 43.4rem;
  height: 24.8rem;

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0.375552rem 0.375552rem 1.87776rem rgba(102, 128, 153, 0.2);
`;

const StMoviePoster = styled.img`
  width: 13.7rem;
  height: 19.3rem;
  margin-left: 2.7rem;
`;

const StWatchedMovieInfo = styled.div`
  height: 19.3rem;
  margin: 0rem 2.7rem 0rem 2.4rem;
`;

const StWatchedMovieName = styled.p`
  font-size: ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.black};

  .deleteBtn {
    position: relative;
    left: 15.2rem;
  }
`;

const StWatchedMovieSubName = styled.p`
  margin-top: 1.1rem;
  margin-bottom: 3rem;

  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StWatchedInfo = styled.p`
  margin-bottom: 2rem;

  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.black};
`;

export default MovieCard;
