import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import useGetMovieStillCut from '../libs/hooks/useGetMovieStillCut';
import styled from 'styled-components';
// import {IcStillCutImg, IcLeftarrowIcon, IcRightarrowIcon } from '../asset/icon';

export default function NewStillCut() {
  const { data } = useGetMovieStillCut(3);

  if (!data) {
    return <div>error!!</div>;
  } else {
    return (
      <StCarousel>
        <Carousel showArrows={true} showIndicators={false} width={'100%'}>
          {data?.data.map((eachStillCut, index) => {
            return (
              <StSlide key={index}>
                <StStillCut src={eachStillCut.stillCutLink} />
              </StSlide>
            );
          })}
        </Carousel>
      </StCarousel>
    );
  }
}

const StCarousel = styled.div`
  width: 100%;
  margin-top: 4.25rem;
`;

const StSlide = styled.div`
  width: 100%;
  height: 100%;
`;

const StStillCut = styled.img`
  &&& {
    width: 36.6rem;
    height: 52.3rem;
  }
`;
