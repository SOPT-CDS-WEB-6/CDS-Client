import { styled } from 'styled-components';
import MovieHeader from './MovieHeader';
import MovieCard from './MovieCard';
import UserPreference from './UserPreference';
import client from '../libs/axios';
import useSWR from 'swr';


function MyMovie() {
  const fetcher = (url: string) => client.get(url).then((res) => res.data);
  const { data } = useSWR('/user/1/movielog/watched?page=1&size=6&year=2023', fetcher);

  return (
    <StTopWrapper>
      <UserPreference data_1={data} />
      <StMyMovieSection>
        <MovieHeader data={data} />

        <StMovieCardWrapper>
          {data?.data.page.map((data: object, idx: number) => {
            return <MovieCard data={data} key={idx} />;
          })}
        </StMovieCardWrapper>
      </StMyMovieSection>

      <StSideDiv></StSideDiv>
    </StTopWrapper>
  );
}

const StSideDiv = styled.div`
  width: 5.5rem;
  height: 100vh;
`;

const StTopWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const StMyMovieSection = styled.section`
  display: grid;
  justify-content: center;

  /* 푸터 위에까지의 마진 */
  margin: 24.6rem 41.4rem 30.2rem 5.8rem;
`;

const StMovieCardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  
  width: 89.3rem;
  margin-top: 1.85rem;

  gap: 2.5rem;
`;

export default MyMovie;
