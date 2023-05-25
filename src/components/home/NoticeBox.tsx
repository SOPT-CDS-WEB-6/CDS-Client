import { styled } from 'styled-components';
import { IcMoreButton, IcPaymoneyImg, IcQrImg } from '../../asset/icon';
import QrBox from './QrBox';

const NoticeBox = () => {
  return (
    <StNoticeBoxSection>
      <StNoticeBoxWrapper>
        <StNoticeBox>
          <StNotice>
            <StNoticeTitle>공지사항</StNoticeTitle>
            <StNoticeContent>[극장][전주고사]’24회 전주국제영화제..</StNoticeContent>
            <IcMoreButton />
          </StNotice>
          <StCustomerService>
            <StCSTitle>고객센터</StCSTitle>
            <StCSContentWrapper>
              <StCSPhoneText>1544-1122</StCSPhoneText>
              <StCSContent>고객센터 운영시간 (평일 09:00~18:00)</StCSContent>
              <StCSAdditionalContent>업무시간 외 자동응답 안내 가능합니다.</StCSAdditionalContent>
            </StCSContentWrapper>
          </StCustomerService>
          <StInquiryButtonWrapper>
            <StInquiryButton>FAQ</StInquiryButton>
            <StInquiryButton>1:1 문의</StInquiryButton>
            <StInquiryButton>대관/단체 문의</StInquiryButton>
          </StInquiryButtonWrapper>
        </StNoticeBox>
        <QrBox />
        <StPromotionImg>
          <IcPaymoneyImg />
        </StPromotionImg>
      </StNoticeBoxWrapper>
    </StNoticeBoxSection>
  );
};

export default NoticeBox;

const StPromotionImg = styled.div`
  margin-left: 1rem;
`;

const StInquiryButton = styled.button`
  padding: 0.6rem;
  margin: 1.28rem;
  background-color: ${({ theme }) => theme.colors.gray10};
  font: ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray90};
  border: none;
`;

const StInquiryButtonWrapper = styled.div`
  margin-left: 2.5rem;
  margin-bottom: 2.6rem;
`;

const StCSAdditionalContent = styled.h3`
  color: ${({ theme }) => theme.colors.gray40};
`;

const StCSContent = styled.h3`
  color: ${({ theme }) => theme.colors.gray70};
`;

const StCSPhoneText = styled.h3`
  color: ${({ theme }) => theme.colors.gray90};
`;

const StCSContentWrapper = styled.div``;

const StCSTitle = styled.h3`
  margin-left: 3.8rem;
  margin-right: 2.8rem;
`;

const StCustomerService = styled.div`
  display: flex;
  margin-top: 5.2rem;
  & h3 {
    margin-bottom: 1.2rem;
    font: ${({ theme }) => theme.fonts.Body3};
  }
`;

const StNoticeContent = styled.div`
  font: ${({ theme }) => theme.fonts.Body3};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StNoticeTitle = styled.h3`
  margin-left: 3.8rem;
  font: ${({ theme }) => theme.fonts.Body3};
`;

const StNotice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.4rem;

  color: ${({ theme }) => theme.colors.gray90};

  & > svg {
    margin-right: 2.7rem;
  }
`;

const StNoticeBox = styled.div`
  width: 62.4rem;
  height: 100%;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray40};
`;

const StNoticeBoxWrapper = styled.div`
  display: flex;
  width: 118.4rem;
  height: 28.5rem;
`;

const StNoticeBoxSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 28.5rem;

  margin-top: 9.5rem;
  margin-bottom: 4.5rem;
`;
