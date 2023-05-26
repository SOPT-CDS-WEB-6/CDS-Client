import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import useGetMovieStillCut from '../libs/hooks/useGetMovieStillCut';
import styled from 'styled-components';
import { IcLeftarrowIcon, IcRightarrowIcon } from '../asset/icon';

export default function NewStillCut({ movieNumber }: { movieNumber: number }) {
  const { data } = useGetMovieStillCut(movieNumber);

  if (!data) {
    return <div>error!!</div>;
  } else {
    return (
      <StCarousel>
        <Carousel
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(clickHandler) => {
            return (
              <StLeftArrowButton onClick={clickHandler}>
                <IcLeftarrowIcon />
              </StLeftArrowButton>
            );
          }}
          renderArrowNext={(clickHandler) => {
            return (
              <StRightArrowButton onClick={clickHandler}>
                <IcRightarrowIcon />
              </StRightArrowButton>
            );
          }}>
          {data.data.map((eachStillCut, index) => {
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

const StLeftArrowButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 999999;
`;
const StRightArrowButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

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
