export type NavDataInfo = {
  text: string;
  content?: string;
  class?: string;
  key?: number;
  data?: {
    pageInfoRes?: {
      totalElements?: number;
    };
  };
};

export type MovieDataInfo = {
  data?: {
    pageInfoRes?: {
      totalElements?: number;
    };
  };

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
