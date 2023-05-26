import useSWR from 'swr';
import { cgvGetFetcher } from '../axios';
import MovieStillCuts from '../../types/movieStillCuts';

function useGetMovieStillCut(movieNumber: number) {
  const { data, error } = useSWR<MovieStillCuts>(`/movie/${movieNumber}/stillcuts`, cgvGetFetcher, {
    errorRetryCount: 3,
  });
  return {
    data: data,
    isLoading: !error && !data?.data,
    isError: error,
  };
}

export default useGetMovieStillCut;
