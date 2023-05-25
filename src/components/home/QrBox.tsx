import { styled } from 'styled-components';
import { IcQrImg } from '../../asset/icon';

const QrBox = () => {
  return (
    <StQRCodeBox>
      <StQRTitle>앱 다운로드</StQRTitle>
      <StQRComment>
        CGV앱에서
        <br /> 더 편리하게 이용하세요
      </StQRComment>
      <IcQrImg />
      <StQRDesc>
        QR코드를 스캔하고
        <br />
        앱설치 페이지로 바로 이동하세요
      </StQRDesc>
    </StQRCodeBox>
  );
};

export default QrBox;

const StQRDesc = styled.p`
  margin-top: 2.4rem;
  font: ${({ theme }) => theme.fonts.Body5};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray70};
`;

const StQRComment = styled.span`
  margin-top: 1rem;
  font: ${({ theme }) => theme.fonts.Body5};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray90};
`;

const StQRTitle = styled.strong`
  margin-top: 3.2rem;
  font: ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StQRCodeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  & > svg {
    margin: 2.9rem auto 0;
  }
`;
