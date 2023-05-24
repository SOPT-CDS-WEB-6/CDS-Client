export type NavDataInfo = {
  num: number;
  text: string;
  content?: string;
  class?: string;
  idx?: number;
  // data?: {
  //   page?: object;
  // }[];
};

export type MovieDataInfo = {
  // data?: {
  //   page?: object;
  // }[];

  title?: string;
  originTitle?: string;
  posterLink?: string;
  headcount?: string;
  endDate?: string;
  reservatedAt?: string;
  startDate?: string;
  theaterName?: string;
  reviewed?: boolean;
};
