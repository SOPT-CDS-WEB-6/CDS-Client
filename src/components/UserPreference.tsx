import { styled } from 'styled-components';
import { DUMMY_USER } from '../constants/dummyData';
import { DUMMY_NAV_DATA } from '../constants/dummyData';
import { IcProfileImg } from '../asset/icon';
import { IcPencilImg } from '../asset/icon';
import PreferenceNav from './PreferenceNav';

const UserPreference = () => {
  return (
    <StUserInfo>
      <StUserProfile>
        <IcProfileImg />
        <StUserName>
          {DUMMY_USER[0].name}님 <IcPencilImg />
        </StUserName>
      </StUserProfile>

      {DUMMY_NAV_DATA.map((data, idx) => {
        return <PreferenceNav data={data} key={idx} />;
      })}
    </StUserInfo>
  );
};

export default UserPreference;

const StUserInfo = styled.nav`
  display: flex;
  flex-direction: column;
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

  > svg {
    justify-content: center;

    width: 17rem;
    height: 17rem;
    margin: 1.7rem 1.3rem 9.3rem;
  }
`;

const StUserName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -5.5rem;

  font-size: ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray90};

  > svg {
    width: 1.6rem;
    height: 2.3rem;
  }
`;
