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
        <StWatchedMovieName>{data.title}</StWatchedMovieName>
        <StBtnWrapper>
          <IcDeleteButton className="deleteBtn" />
        </StBtnWrapper>

        <StWatchedMovieSubName>{data.originTitle ? data.originTitle : '-'}</StWatchedMovieSubName>

        <StWatchedInfo>
          {startTime} ~ {endTime}
        </StWatchedInfo>
        <StWatchedInfo>
          {data.theaterName} / {data.headcount}명
        </StWatchedInfo>

        {data.reviewed ? <IcRevieweditButton /> : <IcReviewwriteButton />}
        {data.reviewed && <IcReviewdeleteButton style={{ marginLeft: '1rem' }} />}
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


const StBtnWrapper = styled.span`

  display: flex;
  justify-content: flex-end;

  width: 22.1rem;
  margin: 0;

  & > svg {
    position: relative;
    top: -2rem;
  }
`;

const StWatchedMovieInfo = styled.span`
  height: 19.3rem;
  margin: 0rem 2.7rem 0rem 2.4rem;
`;

const StWatchedMovieName = styled.p`
  width: 18rem;
  overflow: hidden;

  font-size: ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StWatchedMovieSubName = styled.p`
  width: 18rem;
  overflow: hidden;
  margin-top: -1.1rem;
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
