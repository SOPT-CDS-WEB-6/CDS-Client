interface TypeMovieChart {
    chartRank: number;
    movieTitle: string;
    EggScore: number;
    ticketRatio: number;
}

const dummyMovieChart: TypeMovieChart[] = [
    {
        chartRank: 1,
        movieTitle: '가디언즈 오브 갤럭시',
        EggScore: 99,
        ticketRatio: 99,
    },
    {
        chartRank: 2,
        movieTitle: '가디언즈 오브 갤럭시',
        EggScore: 99,
        ticketRatio: 99,
    },
    {
        chartRank: 3,
        movieTitle: '가디언즈 오브 갤럭시',
        EggScore: 99,
        ticketRatio: 99,
    },
    {
        chartRank: 4,
        movieTitle: '가디언즈 오브 갤럭시',
        EggScore: 99,
        ticketRatio: 99,
    },
];

export default dummyMovieChart;
export type { TypeMovieChart };