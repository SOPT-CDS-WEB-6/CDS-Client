import { styled } from 'styled-components';

import { MovieDataInfo } from '../types/MovieData';
import { IcDeleteButton, IcReviewdeleteButton, IcRevieweditButton, IcReviewwriteButton } from '../asset/icon';

export interface MovieCardProps {
  data: MovieDataInfo;
}

function MovieCard(props: MovieCardProps) {
  const { data } = props;

  return (
    <StWatchedMovieCard>
      <StMoviePoster src={data.posterLink} />

      <StWatchedMovieInfo>
        <StWatchedMovieName>{data.title}</StWatchedMovieName>
        <StBtnWrapper>
          <IcDeleteButton className="deleteBtn" />
        </StBtnWrapper>

        <StWatchedMovieSubName>{data.originTitle ? data.originTitle : '-'}</StWatchedMovieSubName>

        <StWatchedInfo>
          {data.startDate?.slice(0, -3)} ~ {data.endDate?.split(' ')[1].slice(0, 5)}
        </StWatchedInfo>
        <StWatchedInfo>
          {data.theaterName} / {data.headcount}명
        </StWatchedInfo>

        {data.reviewed ? <IcRevieweditButton /> : <IcReviewwriteButton />}
        {data.reviewed ? <IcReviewdeleteButton className="deleteReviewBtn" /> : <></>}
      </StWatchedMovieInfo>
    </StWatchedMovieCard>
  );
}

const StWatchedMovieCard = styled.div`
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

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 22.1rem;
  margin: 0;
  & > svg {
    position: relative;
    top: -2rem;
  }
`;

const StWatchedMovieInfo = styled.div`
  height: 19.3rem;
  margin: 0rem 2.7rem 0rem 2.4rem;

  & > .deleteReviewBtn {
    margin-left: 1rem;
  }
`;

const StWatchedMovieName = styled.p`
  width: 18rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  font-size: ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.black};
`;

const StWatchedMovieSubName = styled.p`
  width: 18rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: -1.1rem;
  margin-bottom: 3rem;

  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};
`;

const StWatchedInfo = styled.p`
  margin-bottom: 2rem;

  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.black};
`;

export default MovieCard;
