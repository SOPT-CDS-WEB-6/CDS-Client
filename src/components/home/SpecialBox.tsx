import { styled } from 'styled-components';
import { Ic4dxImg, IcChefImg, IcGrayallButton, IcLivingImg, IcSuiteImg } from '../../asset/icon';
import { useState } from 'react';
import SpecialCard from './SpecialCard';
import dummySepcialDataList from '../../constants/dummySpecialCard';

const SpecialBox = () => {
  const specialImgList = [<IcSuiteImg />, <IcLivingImg />, <Ic4dxImg />, <IcChefImg />];
  const specialCardData = dummySepcialDataList;
  const [specialImgIndex, setspecialImgIndex] = useState(0);

  const changeSpecialImg = (i: number) => () => {
    setspecialImgIndex(i);
  };

  return (
    <StSpecialBoxSection>
      <StSpecialBoxWrapper>
        <StSpecialBoxHeader>
          <StSpecialBoxHeaderTitle>특별관</StSpecialBoxHeaderTitle>
          <IcGrayallButton />
        </StSpecialBoxHeader>
        <StSpecialContentWrapper>
          <StSpecialImgWrapper>{specialImgList[specialImgIndex]}</StSpecialImgWrapper>
          <StSpecialCardWrapper>
            {specialCardData.map((card, index) => (
              <SpecialCard
                active={specialImgIndex === index}
                key={card.title}
                title={card.title}
                tag={card.tag}
                index={index}
                hoverEvent={changeSpecialImg}
              />
            ))}
          </StSpecialCardWrapper>
        </StSpecialContentWrapper>
      </StSpecialBoxWrapper>
    </StSpecialBoxSection>
  );
};

export default SpecialBox;

const StSpecialImgWrapper = styled.div`
  width: 61rem;
  height: 33.3rem;
`;

const StSpecialCardWrapper = styled.div`
  width: 53.2rem;
  height: 33rem;
`;

const StSpecialContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 33.3rem;
`;

const StSpecialBoxHeaderTitle = styled.h2`
  font: ${({ theme }) => theme.fonts.Title};
`;

const StSpecialBoxHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  margin-bottom: 3.3rem;
`;

const StSpecialBoxWrapper = styled.div`
  width: 118.4rem;
  height: 40.4rem;
`;

const StSpecialBoxSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40.4rem;

  margin-top: 9.5rem;
  margin-bottom: 4.5rem;
`;
