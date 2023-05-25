import { styled } from 'styled-components';
import { IcAllDropdown, IcGoButton, ICAddAudience } from '../asset/icon';
import { MovieDataInfo } from '../types/MovieData';

export interface MyMovieProps {

  data: MovieDataInfo;

}

function MovieHeader(props: MyMovieProps) {
  const { data } = props;

  const watchedMoviesNum = data?.data?.pageInfoRes?.totalElements;


  return (
    <StMyMovieHeader>
      <StHeaderTextWrapper>
        <StMyMovieTitle>내가 본 영화</StMyMovieTitle>
        <StMyMovieNum>{watchedMoviesNum}건</StMyMovieNum>

      </StHeaderTextWrapper>

      <StHeaderBtnWrapper>
        <IcAllDropdown style={{ width: '7rem' }} />
        <IcGoButton style={{ width: '4.9rem' }} />
        <ICAddAudience style={{ width: '11.7rem' }} />
      </StHeaderBtnWrapper>
    </StMyMovieHeader>
  );
}

const StMyMovieHeader = styled.header`
  display: flex;
  justify-content: space-between;
  
  width: 89.3rem;
`;

const StHeaderTextWrapper = styled.span`
  display: flex;
`;

const StMyMovieTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.Body2};
`;

const StMyMovieNum = styled.p`
  margin: 0.3rem 0 0 0.9rem;

  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};
`;

const StHeaderBtnWrapper = styled.span`
  display: flex;
  align-items: center;

  gap: 1rem;

  > svg {
    height: 3.7rem;
  }
`;

export default MovieHeader;
