import { styled } from 'styled-components';
import { NAV_DATA } from '../constants/navData';
import { IcProfileImg } from '../asset/icon';
import { IcPencilImg } from '../asset/icon';
import PreferenceNav from './PreferenceNav';
import client from '../libs/axios';
import useSWR from 'swr';
import { NavDataInfo } from '../types/MovieData';

export interface UserPreferenceProps {
  data_1: NavDataInfo;
}

const UserPreference = (props: UserPreferenceProps) => {
  const fetcher = (url: string) => client.get(url).then((res) => res.data);
  const { data } = useSWR('/user/1', fetcher);
  const { data_1 } = props;

  return (
    <StUserInfo>
      <StUserProfile>
        <IcProfileImg />
        <StUserName>
          {data?.data.userName}님 <IcPencilImg />
        </StUserName>
      </StUserProfile>

      {NAV_DATA.map((data, idx) => {
        return <PreferenceNav data={data} key={idx} numData={data_1} idx={idx} />;
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
