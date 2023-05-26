import useSWR from 'swr';
import { cgvGetFetcher } from '../axios';

const useGetUserInfo = () => {
  const { data, error } = useSWR(`/user/1`, cgvGetFetcher, {
    errorRetryCount: 3,
  });
  console.log(data);

  return {
    userName: data?.data.userName,
    email: data?.data.email,
    phoneNumber: data?.data.phoneNumber,
    isLoading: !error && !data?.data,
    isError: error,
  };
};

export default useGetUserInfo;
