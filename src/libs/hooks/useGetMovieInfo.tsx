import useSWR from 'swr';
import { cgvGetFetcher } from '../axios';
import MovieInfoResponse from '../../types/movieInfoResponse';

function useGetMovieInfo(movieNumber: number) {
  const { data, error } = useSWR<MovieInfoResponse>(`/movie/${movieNumber}`, cgvGetFetcher, {
    errorRetryCount: 3,
  });
  return {
    data: data,
    isLoading: !error && !data?.data,
    isError: error,
  };

  // if (data == undefined) {
  //   console.log('durltj dhfb');
  // }
  // if (data !== undefined) {
  //   console.log(data);
  //   return {
  //     response: data,
  //   };
  // }
}

export default useGetMovieInfo;
