import { styled } from 'styled-components';
import { dummyUser } from '../constants/dummyUser';

const UserInfo = () => {
  return (
    <StUserInfo>
      <StUserProfile>
        <StUserName>{dummyUser[0].name}님</StUserName>
      </StUserProfile>
    </StUserInfo>
  );
};

export default UserInfo;

const StUserInfo = styled.nav``;
const StUserProfile = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 196px;
  height: 280px;
  left: 359px;
  top: 234px;

  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 5px;
`;
const StUserName = styled.p`
  display: flex;

  align-items: center;
  letter-spacing: 1px;

  position: absolute;
  left: 51px;
  right: 45px;
  top: 232px;
  bottom: 48px;
  width: 70px;
  height: 0px;

  color: ${({ theme }) => theme.colors.gray90};

  font-size: ${({ theme }) => theme.fonts.Body3};
`;
