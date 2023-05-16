import { styled } from 'styled-components';
import IcAllDropdown from '../asset/icon/ic_AllDropdown.svg';
import IcGoButton from '../asset/icon/ic_GoButton.svg';
import ICAddAudience from '../asset/icon/ic_AddAudience.svg';

function MyMovie() {
  return (
    <MyMovieSection>
      <MyMovieHeader>
        <MyMovieTitle>내가 본 영화</MyMovieTitle>
        <MyMovieNum>8건</MyMovieNum>
        <HeaderBtnWrapper>
          <DropDownBtn src={IcAllDropdown} />
          <GoBtn src={IcGoButton} />
          <AddAudienceBtn src={ICAddAudience} />
        </HeaderBtnWrapper>
      </MyMovieHeader>
    </MyMovieSection>
  );
}

const MyMovieSection = styled.section``;
const MyMovieHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
const MyMovieTitle = styled.p`
  display: flex;
  position: absolute;
  top: 23.4rem;
  left: 61.3rem;

  font-weight: 500;

  font-size: ${({ theme }) => theme.fonts.Body2};
`;

const MyMovieNum = styled.p`
  position: absolute;
  top: 24.6rem;
  left: 72.9rem;

  margin-left: 0.9rem;

  color: ${({ theme }) => theme.colors.gray70};
  font-size: ${({ theme }) => theme.fonts.Body5};
`;

const HeaderBtnWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 25.4rem;
  right: 41.4rem;

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

export default MyMovie;
