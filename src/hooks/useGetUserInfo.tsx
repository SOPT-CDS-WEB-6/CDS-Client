import useSWR from 'swr';
import client from '../libs/axios';

const useGetUserInfo = () => {
  const fetcher = (url: string) => client.get(url).then((res) => res.data);
  const { data } = useSWR('/user/1', fetcher, {
    errorRetryCount: 3,
  });

  return {
    userName: data?.data.userName,
  };
};

export default useGetUserInfo;
