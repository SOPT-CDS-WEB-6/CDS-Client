import { styled } from 'styled-components';
import { dummyUser } from '../constants/dummyUser';
import { dummyData } from '../constants/dummyUser';

import IcPencilImg from '../asset/icon/ic_PencilImg.svg';
import IcProfileImg from '../asset/icon/ic_ProfileImg.svg';

const UserInfo = () => {
  return (
    <StUserInfo>
      <StUserProfile>
        <StUserImg src={IcProfileImg} />
        <StUserName>
          {dummyUser[0].name}님 <StPencilImg src={IcPencilImg} />
        </StUserName>
      </StUserProfile>

      {dummyData.map((it, idx) => {
        return (
          <StInfoWrapper className={it.class} key={idx}>
            <StNumInfo>{it.num}</StNumInfo>
            <StTextInfo>{it.text}</StTextInfo>
          </StInfoWrapper>
        );
      })}
    </StUserInfo>
  );
};

export default UserInfo;

const StUserInfo = styled.nav`
  display: grid;
  width: 19.6rem;

  margin-top: 23.4rem;
  margin-left: 35.9rem;
`;

const StUserProfile = styled.div`
  justify-content: center;
  width: 19.6rem;
  height: 28rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray40};
  border-radius: 0.5rem;
`;

const StUserImg = styled.img`
  width: 17rem;
  height: 17rem;
  margin: 1.7rem 1.3rem 9.3rem;
`;

const StUserName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -5.5rem;

  color: ${({ theme }) => theme.colors.gray90};

  font-size: ${({ theme }) => theme.fonts.Body3};
`;

const StPencilImg = styled.img`
  width: 1.6rem;
  height: 2.3rem;
`;

const StInfoWrapper = styled.div`
  display: grid;

  width: 19.6rem;
  height: 10.4rem;

  margin-top: 1rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray40};
  border-radius: 0.5rem;

  &.selected {
    background-color: ${({ theme }) => theme.colors.red2};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StNumInfo = styled.p`
  display: flex;
  justify-content: center;

  margin-top: 1.5rem;

  font-size: ${({ theme }) => theme.fonts.Title};
`;

const StTextInfo = styled.p`
  display: flex;
  justify-content: center;

  margin-top: -3.3rem;

  font-size: ${({ theme }) => theme.fonts.Body5};
`;
