import useSWR from 'swr';
import client from '../libs/axios';
import { useState } from 'react';

const useGetWatchedMovieInfo = (url: string) => {
  const fetcher = (url: string) => client.get(url).then((res) => res.data);
  const [fetchURL, setFetchURL] = useState(url);

  const { data, error } = useSWR(fetchURL, fetcher, {
    errorRetryCount: 3,
  });

  return {
    data,
    isLoading: !error && !data?.data,
    setFetchURL: setFetchURL,
    // data?.data.page가 undefind일 경우, numOfCards에 빈 배열 넣어줌
    numOfCards: data?.data.page || [],
    numOfWatchedMovie: data?.data?.pageInfoRes?.totalElements,
  };
};

export default useGetWatchedMovieInfo;
