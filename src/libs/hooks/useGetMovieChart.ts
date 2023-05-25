import useSWR from 'swr';
import { cgvGetFetcher } from '../axios';

const useGetMovieChart = () => {
    const { data, error } = useSWR('/main/moviechart', cgvGetFetcher,
        {
            errorRetryCount: 3,
        }
    );

    return {
        movieChartData: data?.data,
        isLoading: !error && !data?.data,
        isError: error,
    }
}

export default useGetMovieChart;

