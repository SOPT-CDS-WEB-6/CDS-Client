export type NavDataInfo = {
  num: number;
  text: string;
  content?: string;
  class?: string;
  idx?: number;
};

export type MovieDataInfo = {
  imgSrc?: string;
  name: string;
  subName: string;
  date: string;
  cinemaInfo: string;
  reviewBtn?: boolean;
  editBtn?: boolean;
  deleteBtn?: boolean;
};
