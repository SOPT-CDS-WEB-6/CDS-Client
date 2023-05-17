import IcMoviecard1Img from '../asset/icon/ic_Moviecard1Img.svg';
import IcMoviecard2Img from '../asset/icon/ic_Moviecard2Img.svg';
import IcReviewwriteButton from '../asset/icon/ic_ReviewwriteButton.svg';
import IcRevieweditButton from '../asset/icon/ic_RevieweditButton.svg';
import IcReviewdeleteButton from '../asset/icon/ic_ReviewdeleteButton.svg';

export const DUMMY_USER = [
  {
    name: '김나현',
  },
] as const;

export const DUMMY_NAV_DATA = [
  {
    num: 0,
    text: '기대되는 영화',
  },
  {
    num: 8,
    text: '내가 본 영화',
    content: '☞',
    class: 'selected',
  },
  {
    num: 0,
    text: '내가 쓴 평점',
  },
];

export const DUMMY_MOVIE_DATA = [
  {
    imgSrc: IcMoviecard1Img,
    name: '헌트',
    subName: 'HUNT',
    date: '2022.08.12 (금) 16:05 ~ 18:20',
    cinemaInfo: 'CGV수원 7관 (Laser) / 2명',
    reviewBtn: IcReviewwriteButton,
  },
  {
    imgSrc: IcMoviecard2Img,
    name: '영웅',
    subName: '-',
    date: '2022.12.24 (토) 19:20 ~ 21:30',
    cinemaInfo: 'CGV부천역 7관 10층 / 2명',
    editBtn: IcRevieweditButton,
    deleteBtn: IcReviewdeleteButton,
  },
  {
    imgSrc: IcMoviecard1Img,
    name: '헌트',
    subName: 'HUNT',
    date: '2022.08.12 (금) 16:05 ~ 18:20',
    cinemaInfo: 'CGV수원 7관 (Laser) / 2명',
    reviewBtn: IcReviewwriteButton,
  },
  {
    imgSrc: IcMoviecard2Img,
    name: '영웅',
    subName: '-',
    date: '2022.12.24 (토) 19:20 ~ 21:30',
    cinemaInfo: 'CGV부천역 7관 10층 / 2명',
    editBtn: IcRevieweditButton,
    deleteBtn: IcReviewdeleteButton,
  },
  {
    imgSrc: IcMoviecard1Img,
    name: '헌트',
    subName: 'HUNT',
    date: '2022.08.12 (금) 16:05 ~ 18:20',
    cinemaInfo: 'CGV수원 7관 (Laser) / 2명',
    reviewBtn: IcReviewwriteButton,
  },
  {
    imgSrc: IcMoviecard2Img,
    name: '영웅',
    subName: '-',
    date: '2022.12.24 (토) 19:20 ~ 21:30',
    cinemaInfo: 'CGV부천역 7관 10층 / 2명',
    editBtn: IcRevieweditButton,
    deleteBtn: IcReviewdeleteButton,
  },
  {
    imgSrc: IcMoviecard1Img,
    name: '헌트',
    subName: 'HUNT',
    date: '2022.08.12 (금) 16:05 ~ 18:20',
    cinemaInfo: 'CGV수원 7관 (Laser) / 2명',
    reviewBtn: IcReviewwriteButton,
  },
  {
    imgSrc: IcMoviecard2Img,
    name: '영웅',
    subName: '-',
    date: '2022.12.24 (토) 19:20 ~ 21:30',
    cinemaInfo: 'CGV부천역 7관 10층 / 2명',
    editBtn: IcRevieweditButton,
    deleteBtn: IcReviewdeleteButton,
  },
];
