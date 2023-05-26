import { styled } from 'styled-components';
import useGetUserInfo from '../../libs/hooks/useGetUserInfo';
import { IcEditButton, IcNoticeBanner } from '../../asset/icon';

const UserInfo = () => {
  const { userName, email, phoneNumber } = useGetUserInfo();
  let modifiedPhoneNumber = '';

  if (phoneNumber) {
    modifiedPhoneNumber = phoneNumber?.replace(/(\d{3})-(\d{4})-(\d{4})/, '$1-****-$3');
  }

  return (
    <StUserInfoWrapper>
      <p>
        체크(<em>*</em>)된 항목은 필수 입력 사항입니다.
      </p>
      <StUserInfoTable>
        <tr>
          <th>이름</th>
          <td>{userName}</td>
        </tr>
        <tr>
          <th>휴대전화</th>
          <td>{modifiedPhoneNumber}</td>

          <th>이메일</th>
          <td>{email}</td>
        </tr>
      </StUserInfoTable>

      <div>
        <StWarningComment>※ 문의에 대한 빠른 답변을 위해 회원 가입 시 입력하신 연락처를 확인해주세요.</StWarningComment>{' '}
        <IcEditButton />
      </div>

      <IcNoticeBanner />
    </StUserInfoWrapper>
  );
};

const StUserInfoWrapper = styled.article`
  width: 100rem;

  > p:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1.1rem;

    height: 4rem;

    border-top: 0.1rem solid ${({ theme }) => theme.colors.gray40};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray40};

    ${({ theme }) => theme.fonts.Body4};

    background-color: ${({ theme }) => theme.colors.gray40};

    color: ${({ theme }) => theme.colors.gray70};

    > em {
      color: #fb4557;

      ${({ theme }) => theme.fonts.Body4};
    }
  }

  > div {
    display: flex;
    gap: 3.4rem;

    > svg {
      margin-top: 1.9rem;

      cursor: pointer;
    }
  }

  > svg {
    margin-top: 3.1rem;
  }
`;

const StUserInfoTable = styled.table`
  > tr {
    display: flex;

    height: 7.2rem;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray40};

    > th {
      display: flex;
      align-items: center;
      padding-left: 1.4rem;
      width: 8.4rem;
    }

    > td {
      display: flex;
      align-items: center;
      padding-left: 1.4rem;
    }
  }

  > tr:nth-of-type(2) {
    > td {
      margin-right: 28rem;
    }
  }
`;

const StWarningComment = styled.p`
  margin-top: 3.3rem;

  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.gray70};
`;

export default UserInfo;
