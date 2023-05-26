import InquiryNav from '../components/Inquiry/InquiryNav';
import InquiryForm from '../components/Inquiry/InquiryForm';
import UserInfo from '../components/Inquiry/UserInfo';
import { styled } from 'styled-components';

const Inquiry = () => {
  return (
    <>
      <StInquiryWrapper>
        <InquiryNav />
        <StInquiryMain>
          <StInquiryIntro>
            <h1>이메일 문의</h1>
            <p>자주찾는 질문에서 원하는 답변을 찾지 못하셨군요</p>
            <p>불편사항이나 문의사항을 남겨주시면 최대한 신속하게 답변 드리겠습니다.</p>
          </StInquiryIntro>

          <UserInfo />

          <InquiryForm />
        </StInquiryMain>
      </StInquiryWrapper>
    </>
  );
};

const StInquiryIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.4rem;
  margin-bottom: 4.8rem;

  width: 58rem;

  > h1 {
    width: 100%;

    ${({ theme }) => theme.fonts.Body2};

    color: ${({ theme }) => theme.colors.gray70};
  }

  > p {
    ${({ theme }) => theme.fonts.Body3};

    color: ${({ theme }) => theme.colors.gray70};
  }
`;

const StInquiryWrapper = styled.div`
  display: flex;
`;

const StInquiryMain = styled.main`
  display: flex;
  flex-direction: column;
`;
export default Inquiry;
