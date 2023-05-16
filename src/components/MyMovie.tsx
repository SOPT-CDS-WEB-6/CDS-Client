import { styled } from 'styled-components';
import IcAllDropdown from '../asset/icon/ic_AllDropdown.svg';
import IcGoButton from '../asset/icon/ic_GoButton.svg';
import ICAddAudience from '../asset/icon/ic_AddAudience.svg';

import { dummyMovieData } from '../constants/dummyUser';

function MyMovie() {
  return (
    <MyMovieSection>
      <MyMovieHeader>
        <HeaderTextWrapper>
          <MyMovieTitle>내가 본 영화</MyMovieTitle>
          <MyMovieNum>{dummyMovieData.length}건</MyMovieNum>
        </HeaderTextWrapper>

        <HeaderBtnWrapper>
          <DropDownBtn src={IcAllDropdown} />
          <GoBtn src={IcGoButton} />
          <AddAudienceBtn src={ICAddAudience} />
        </HeaderBtnWrapper>
      </MyMovieHeader>

      <MovieCardWrapper>
        {dummyMovieData.map((data) => {
          return (
            <MovieCard>
              <MoviePoster src={data.imgSrc} />

              <WatchedMovieInfo>
                <WatchedMovieName>{data.name}</WatchedMovieName>
                <WatchedMovieSubName>{data.subName}</WatchedMovieSubName>
                <WatchedInfo>{data.date}</WatchedInfo>
                <WatchedInfo>{data.cinemaInfo}</WatchedInfo>
                <ReviewBtn src={data.reviewBtn ? data.reviewBtn : data.editBtn} id={data.editBtn ? 'edit' : ''} />
                {data.deleteBtn ? <ReviewDelBtn src={data.deleteBtn} /> : <></>}
              </WatchedMovieInfo>
            </MovieCard>
          );
        })}
      </MovieCardWrapper>
    </MyMovieSection>
  );
}

const MyMovieSection = styled.section`
  display: grid;

  width: 94.5rem;

  margin: -64rem 41.4rem 0rem 60rem;
`;
const MyMovieHeader = styled.header`
  display: flex;
  justify-content: space-between;

  margin-left: 1.25rem;
`;

const HeaderTextWrapper = styled.div`
  display: flex;
`;
const MyMovieTitle = styled.p`
  display: flex;

  font-size: ${({ theme }) => theme.fonts.Body2};
`;

const MyMovieNum = styled.p`
  margin-top: 2.45rem;
  margin-left: 0.9rem;

  color: ${({ theme }) => theme.colors.gray70};
  font-size: ${({ theme }) => theme.fonts.Body5};
`;

const HeaderBtnWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  margin-right: 4rem;
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

const MovieCardWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;

  margin-top: 3.1rem;
`;

const MovieCard = styled.div`
  display: flex;
  align-items: center;

  width: 43.4rem;
  height: 24.8rem;

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0.375552rem 0.375552rem 1.87776rem rgba(102, 128, 153, 0.2);

  margin: 1.25rem;
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

  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.Body1};
`;

const WatchedMovieSubName = styled.p`
  color: ${({ theme }) => theme.colors.gray70};
  font-size: ${({ theme }) => theme.fonts.Body5};
`;

const WatchedInfo = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.Body5};
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

export default MyMovie;
