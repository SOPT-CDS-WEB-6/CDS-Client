import styled from 'styled-components';

function TrailerBox() {
  return (
    <StTrailerBox>
      <StTrailerBar>
        <StTrailerText>트레일러</StTrailerText>
        <StTrailerNo>5건</StTrailerNo>
      </StTrailerBar>
    </StTrailerBox>
  );
}

export default TrailerBox;

const StTrailerBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 96.7rem;
  height: 31.2rem;
`;

const StTrailerBar = styled.div`
  width: 100;
  height: 3.8rem;

  background-color: #f6f6f6;

  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StTrailerText = styled.p`
  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StTrailerNo = styled.p`
  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray40};
`;
