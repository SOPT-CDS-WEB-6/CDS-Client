export default interface MovieStillCuts {
  status: number;
  message: string;
  data: {
    stillCutNumber: number;
    movieId: number;
    stillCutLink: string;
  }[];
}
