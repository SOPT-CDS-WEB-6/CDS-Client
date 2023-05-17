import { styled } from 'styled-components';

import { MovieDataInfo } from '../types/MovieData';

export interface MovieCardProps {
  data: MovieDataInfo;
}

function MovieCard(props: MovieCardProps) {
  const { data } = props;

  return (
    <WatchedMovieCard>
      <MoviePoster src={data.imgSrc} />

      <WatchedMovieInfo>
        <WatchedMovieName>{data.name}</WatchedMovieName>
        <WatchedMovieSubName>{data.subName}</WatchedMovieSubName>
        <WatchedInfo>{data.date}</WatchedInfo>
        <WatchedInfo>{data.cinemaInfo}</WatchedInfo>
        <ReviewBtn src={data.reviewBtn ? data.reviewBtn : data.editBtn} id={data.editBtn ? 'edit' : ''} />
        {data.deleteBtn ? <ReviewDelBtn src={data.deleteBtn} /> : <></>}
      </WatchedMovieInfo>
    </WatchedMovieCard>
  );
}

const WatchedMovieCard = styled.div`
  display: flex;
  align-items: center;

  width: 43.4rem;
  height: 24.8rem;
  margin: 1.25rem;
  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0.375552rem 0.375552rem 1.87776rem rgba(102, 128, 153, 0.2);
`;

const MoviePoster = styled.img`
  width: 13.7rem;
  height: 19.3rem;
  margin-left: 2.7rem;
`;

const WatchedMovieInfo = styled.div`
  height: 19.3rem;
  margin: 0rem 2.7rem;
`;

const WatchedMovieName = styled.p`
  margin: 0;

  font-size: ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.black};
`;

const WatchedMovieSubName = styled.p`
  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};
`;

const WatchedInfo = styled.p`
  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.black};
`;

const ReviewBtn = styled.img`
  width: 9.9rem;
  height: 3.7rem;

  &.edit {
    width: 9.1rem;
  }
`;
const ReviewDelBtn = styled.img`
  width: 9.1rem;
  height: 3.7rem;
  margin-left: 1rem;
`;

export default MovieCard;
