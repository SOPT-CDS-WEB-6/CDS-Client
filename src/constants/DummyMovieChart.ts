import { FunctionComponent, SVGProps } from "react";
import { IcMovie1Img, IcMovie2Img, IcMovie3Img, IcMovie4Img } from "../asset/icon";

interface TypeMovieChart {
    svgImg: FunctionComponent<SVGProps<SVGSVGElement>>;
    chartRank: number;
    movieTitle: string;
    EggScore: number;
    ticketRatio: number;
}

const dummyMovieChart: TypeMovieChart[] = [
    {
        svgImg: IcMovie1Img,
        chartRank: 1,
        movieTitle: '가디언즈 오브 갤럭시',
        EggScore: 99,
        ticketRatio: 99,
    },
    {
        svgImg: IcMovie2Img,
        chartRank: 2,
        movieTitle: '가디언즈 오브 갤럭시',
        EggScore: 99,
        ticketRatio: 99,
    },
    {
        svgImg: IcMovie3Img,
        chartRank: 3,
        movieTitle: '가디언즈 오브 갤럭시',
        EggScore: 99,
        ticketRatio: 99,
    },
    {
        svgImg: IcMovie4Img,
        chartRank: 4,
        movieTitle: '가디언즈 오브 갤럭시',
        EggScore: 99,
        ticketRatio: 99,
    },
];

export default dummyMovieChart;
export type { TypeMovieChart };