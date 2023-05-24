import styled from 'styled-components';
import { IcAd1Img, IcAd2Img } from '../asset/icon';

function SideAdBanner() {
  const SideAd = [<IcAd1Img />, <IcAd2Img />];

  return (
    <StAdBanner>
      {SideAd.map((eachAd) => {
        return <StAd>{eachAd}</StAd>;
      })}
    </StAdBanner>
  );
}

export default SideAdBanner;

const StAdBanner = styled.section`
  display: flex;
  flex-direction: column;

  width: 20rem;
`;

const StAd = styled.article`
  margin-bottom: 0.7rem;
`;