import { styled } from 'styled-components';
import { IcAdImg1, IcAdImg2, IcAdImg3 } from '../asset/icon';

const AdBox = () => {
  return (
    <StAdBoxSection>
      <StPosterWrapper>
        <IcAdImg1 />
      </StPosterWrapper>
      <IcAdImg2 />
      <IcAdImg3 />
    </StAdBoxSection>
  );
};

export default AdBox;

const StPosterWrapper = styled.div`
  & > svg {
    transform: translateY(-10%);
  }
`;

const StAdBoxSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 22.2rem;
  margin-top: 13.5rem;
  background-color: #1f0463;
`;
