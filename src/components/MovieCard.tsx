import { styled } from 'styled-components';

import { MovieDataInfo } from '../types/MovieData';
import { IcDeleteButton } from '../asset/icon';

export interface MovieCardProps {
  data: MovieDataInfo;
}

function MovieCard(props: MovieCardProps) {
  const { data } = props;

  return (
    <StWatchedMovieCard>
      <StMoviePoster src={data.imgSrc} />

      <StWatchedMovieInfo>
        <StWatchedMovieName>
          {data.name}
          <IcDeleteButton className="deleteBtn" />
        </StWatchedMovieName>
        <StWatchedMovieSubName>{data.subName}</StWatchedMovieSubName>

        <StWatchedInfo>{data.date}</StWatchedInfo>
        <StWatchedInfo>{data.cinemaInfo}</StWatchedInfo>

        <ReviewBtn src={data.reviewBtn ? data.reviewBtn : data.editBtn} id={data.editBtn ? 'edit' : ''} />
        {data.deleteBtn ? <ReviewDelBtn src={data.deleteBtn} /> : <></>}
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

const StWatchedMovieInfo = styled.div`
  height: 19.3rem;
  margin: 0rem 2.7rem;
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
`;

const StWatchedInfo = styled.p`
  margin-bottom: 2rem;

  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.black};
`;

const ReviewBtn = styled.img`
  width: 9.9rem;
  height: 3.7rem;

  margin-top: 1rem;

  &.edit {
    width: 9.1rem;

    margin-top: 1rem;
  }
`;
const ReviewDelBtn = styled.img`
  width: 9.1rem;
  height: 3.7rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export default MovieCard;
