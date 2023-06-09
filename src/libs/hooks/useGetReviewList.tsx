import useSWR from 'swr';
import { cgvGetFetcher } from '../axios';

const useGetReviewList = (movieId: number, page: number) => {
  const { data, error } = useSWR(`/movie/${movieId}/review?page=${page}&size=6`, cgvGetFetcher, {
    errorRetryCount: 3,
  });

  return {
    reviewList: data?.data.content,
    totalPages: data?.data.totalPages,
    isError: error,
    isLoading: !error && !data?.data,
  };
};

export default useGetReviewList;
