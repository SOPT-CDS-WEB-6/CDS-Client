import { styled } from 'styled-components';
import { IcAllDropdown } from '../asset/icon';
import { IcGoButton } from '../asset/icon';
import { ICAddAudience } from '../asset/icon';
import { MovieDataInfo } from '../types/MovieData';

export interface MyMovieProps {
  data: MovieDataInfo[];
}

function MovieHeader(props: MyMovieProps) {
  const { data } = props;
  // console.log(data[0].data);

  return (
    <StMyMovieHeader>
      <StHeaderTextWrapper>
        <StMyMovieTitle>내가 본 영화</StMyMovieTitle>
        <StMyMovieNum>?건</StMyMovieNum>
      </StHeaderTextWrapper>

      <StHeaderBtnWrapper>
        <IcAllDropdown className="dropDown" />
        <IcGoButton className="go" />
        <ICAddAudience className="addAudience" />
      </StHeaderBtnWrapper>
    </StMyMovieHeader>
  );
}

const StMyMovieHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 89.3rem;
`;

const StHeaderTextWrapper = styled.div`
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

const StHeaderBtnWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  > svg {
    height: 3.7rem;
  }

  > .dropDown {
    width: 7rem;
  }

  > .go {
    width: 4.9rem;
  }

  > .addAudience {
    width: 11.7rem;
  }
`;

export default MovieHeader;
