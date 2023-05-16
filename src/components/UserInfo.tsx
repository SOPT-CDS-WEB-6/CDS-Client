import { styled } from 'styled-components';
import { dummyUser } from '../constants/dummyUser';
import { dummyData } from '../constants/dummyUser';

import { IcPencilImg, IcProfileImg } from '../asset/icon';

const UserInfo = () => {
  return (
    <StUserInfo>
      <StUserProfile>
        <StUserImg src={IcProfileImg} />
        <StUserName>
          {dummyUser[0].name}님 <StPencilImg src={IcPencilImg} />
        </StUserName>
      </StUserProfile>

      {dummyData.map((it) => {
        return (
          <StWanted className={it.class}>
            <StWantedNum>{it.num}</StWantedNum>
            <StWantedText>{it.text}</StWantedText>
          </StWanted>
        );
      })}
    </StUserInfo>
  );
};

export default UserInfo;

const StUserInfo = styled.nav``;

const StUserProfile = styled.div`
  display: grid;

  width: 19.6rem;
  height: 28rem;

  margin-top: 23.4rem;
  margin-left: 35.9rem;

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

const StWanted = styled.div`
  display: grid;

  width: 19.6rem;
  height: 10.4rem;

  margin-top: 1rem;
  margin-left: 35.9rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray40};
  border-radius: 0.5rem;

  &.selected {
    background-color: ${({ theme }) => theme.colors.red2};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StWantedNum = styled.p`
  display: flex;
  justify-content: center;

  margin-top: 1.5rem;

  font-size: ${({ theme }) => theme.fonts.Title};
`;

const StWantedText = styled.p`
  display: flex;
  justify-content: center;

  margin-top: -3.3rem;

  font-size: ${({ theme }) => theme.fonts.Body5};
`;
