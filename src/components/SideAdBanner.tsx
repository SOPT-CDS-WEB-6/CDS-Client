import styled from 'styled-components';
//svg import use 어떻게??

function SideAdBanner() {
  return (
    <StSection>
      <StImg></StImg>
      <StImg></StImg>
    </StSection>
  );
}

export default SideAdBanner;

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 2.7rem;
`;

const StImg = styled.img`
  width: 20rem;
  height: 37.9rem;
  margin-bottom: 0.7rem;
`;
