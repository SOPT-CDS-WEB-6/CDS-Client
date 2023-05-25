import useSWR from 'swr';
import { cgvGetFetcher } from '../axios';
import MovieInfoResponse from '../../types/movieInfoResponse';

declare let response: MovieInfoResponse;

function useGetMovieInfo(movieNumber: number) {
  const { data } = useSWR<MovieInfoResponse>(`https://www.cgv-redesign.p-e.kr/movie/${movieNumber}`, cgvGetFetcher, {
    // errorRetryCount: 3,
  });

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

export default useGetMovieInfo;
