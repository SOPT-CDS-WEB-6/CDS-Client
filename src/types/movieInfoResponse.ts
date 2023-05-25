export default interface MovieInfoResponse {
  status: number;
  message: string;
  data: {
    movieNumber: number;
    title: string;
    originTitle: string;
    posterLink: string;
    reservationRate: number;
    preEgg: number;
    goldenEgg: number;
    director: string;
    actor?: string[];
    genre: string;
    ageLimit: string;
    duration: number;
    nation: string;
    synopsis: string;
    releasedAt: string;
    closedAt: string;
    trailerList: {
      trailerNumber: number;
      movieNumber: number;
      trailerTitle: string;
      thumbnailLink: string;
      trailerReleasedAt: string;
    }[];
  };
}
