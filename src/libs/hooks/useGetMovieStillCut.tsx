import useSWR from 'swr';
import { cgvGetFetcher } from '../axios';
import MovieStillCuts from '../../types/movieStillCuts';
// import MovieInfoResponse from '../../types/movieInfoResponse';

declare let response: MovieStillCuts;

function useGetMovieStillCuts(movieNumber: number) {
  const { data } = useSWR<MovieStillCuts>(
    `https://www.cgv-redesign.p-e.kr/movie/${movieNumber}/stillcuts`,
    cgvGetFetcher,
    {
      // errorRetryCount: 3,
    },
  );

  if (data == undefined) {
    console.log('durltj dhfb');
  }
  if (data !== undefined) {
    console.log(data);
    return {
      response: data,
    };
  }
}

export default useGetMovieStillCuts;
