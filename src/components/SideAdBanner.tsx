import styled from 'styled-components';
import { IcAd1Img, IcAd2Img } from '../asset/icon';

function SideAdBanner() {
  return (
    <StAdBanner>
      <StAd>
        <IcAd1Img />
      </StAd>
      <StAd>
        <IcAd2Img />
      </StAd>
    </StAdBanner>
  );
}

export default SideAdBanner;

const StAdBanner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20rem;
`;

const StAd = styled.article`
  margin-bottom: 0.7rem;
`;
