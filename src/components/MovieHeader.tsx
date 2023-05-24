import { styled } from 'styled-components';
import { IcGoButton, ICAddAudience } from '../asset/icon';
import { MovieDataInfo } from '../types/MovieData';
import { useEffect, useState } from 'react';

export interface MyMovieProps {
  data: MovieDataInfo;
  setFetchURL: React.Dispatch<React.SetStateAction<string>>;
}

function MovieHeader(props: MyMovieProps) {
  const { data, setFetchURL } = props;
  const wathedMovieYear = ['전체', '2023', '2022'];
  const watchedMoviesNum = data?.data?.pageInfoRes?.totalElements;
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    handleFetchURL();
  }, [selectedOption]);

  const handleFetchURL = () => {
    switch (selectedOption) {
      case '전체':
        setFetchURL('/user/1/movielog/watched?page=1&size=6');
        break;

      case '2023':
        setFetchURL('/user/1/movielog/watched?page=1&size=6&year=2023');
        break;

      case '2022':
        setFetchURL('/user/1/movielog/watched?page=1&size=6&year=2022');
        break;

      default:
        setFetchURL('/user/1/movielog/watched?page=1&size=6');
        break;
    }
  };

  const handleSelectedOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <StMyMovieHeader>
      <StHeaderTextWrapper>
        <StMyMovieTitle>내가 본 영화</StMyMovieTitle>
        <StMyMovieNum>{watchedMoviesNum}건</StMyMovieNum>
      </StHeaderTextWrapper>

      <StHeaderBtnWrapper>
        <StYearSelector onChange={handleSelectedOption}>
          {wathedMovieYear.map((year) => {
            return <StYearOption>{year}</StYearOption>;
          })}
        </StYearSelector>
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
  height: 3.7rem;
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

const StYearSelector = styled.select`
  width: 7rem;
  height: 3.7rem;
  border: 1px solid #e3e3e3;
`;

const StYearOption = styled.option`
  ${({ theme }) => theme.colors.gray70}
`;

export default MovieHeader;
