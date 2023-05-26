import useSWR from 'swr';
import { cgvGetFetcher } from '../axios';

const useGetRadarInfo = (movieNumber: number) => {
  const { data, error } = useSWR(`/movie/${movieNumber}/review-statistics/score`, cgvGetFetcher, {
    errorRetryCount: 3,
  });

  return {
    charmingPointInfo: data?.data.charmingPointRes,
    emotionPointInfo: data?.data.emotionPointRes,
    isLoading: !error && !data?.data,
    isError: error,
  };
};

export default useGetRadarInfo;
