import { styled } from 'styled-components';

import IcAllDropdown from '../asset/icon/ic_AllDropdown.svg';
import IcGoButton from '../asset/icon/ic_GoButton.svg';
import ICAddAudience from '../asset/icon/ic_AddAudience.svg';

import { MovieDataInfo } from '../types/MovieData';

export interface MyMovieProps {
  dummyData: MovieDataInfo[];
}

function MovieHeader(props: MyMovieProps) {
  const { dummyData } = props;

  return (
    <MyMovieHeader>
      <HeaderTextWrapper>
        <MyMovieTitle>내가 본 영화</MyMovieTitle>
        <MyMovieNum>{dummyData.length}건</MyMovieNum>
      </HeaderTextWrapper>

      <HeaderBtnWrapper>
        <DropDownBtn src={IcAllDropdown} />
        <GoBtn src={IcGoButton} />
        <AddAudienceBtn src={ICAddAudience} />
      </HeaderBtnWrapper>
    </MyMovieHeader>
  );
}

const MyMovieHeader = styled.header`
  display: flex;
  justify-content: space-between;

  margin-left: 1.25rem;
`;

const HeaderTextWrapper = styled.div`
  display: flex;
`;

const MyMovieTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.Body2};
`;

const MyMovieNum = styled.p`
  margin: 2.45rem 0 0 1rem;

  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};
`;

const HeaderBtnWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-right: 46.5rem;

  gap: 1rem;
`;

const DropDownBtn = styled.img`
  width: 7rem;
  height: 3.7rem;
`;

const GoBtn = styled.img`
  width: 4.9rem;
  height: 3.7rem;
`;

const AddAudienceBtn = styled.img`
  width: 11.7rem;
  height: 3.7rem;
`;

export default MovieHeader;
