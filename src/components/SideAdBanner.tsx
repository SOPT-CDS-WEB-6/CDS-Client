import styled from 'styled-components';
import { IcAd1Img } from '../asset/icon';
import { IcAd2Img } from '../asset/icon';

function SideAdBanner() {
  return (
    <StSection>
      <StDiv>
        <IcAd1Img />
      </StDiv>
      <StDiv>
        <IcAd2Img />
      </StDiv>
    </StSection>
  );
}

export default SideAdBanner;

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20rem;
`;

const StDiv = styled.div`
  margin-bottom: 0.7rem;
`;
