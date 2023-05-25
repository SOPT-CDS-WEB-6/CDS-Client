import useSWR from 'swr';
import { cgvGetFetcher } from '../axios';

const useGetEventList = () => {
    const { data, error, isLoading } = useSWR('/events', cgvGetFetcher, {
        errorRetryCount: 3,
    });

    return {
        eventListData: data?.data,
        isLoading: !isLoading && !data?.data,
        isError: error,
    }
}

export default useGetEventList;