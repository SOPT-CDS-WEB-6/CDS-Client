import { styled } from 'styled-components';
import { NavDataInfo } from '../types/MovieData';

export interface PreferenceNavProps {
  data: NavDataInfo;
  numData: NavDataInfo;
  idx: number;
}

function PreferenceNav(props: PreferenceNavProps) {
  const { data } = props;
  const { numData } = props;
  const { idx } = props;

  return (
    <StInfoWrapper className={data.class}>
      <StNumInfo>{idx === 1 ? numData?.data?.pageInfoRes?.totalElements : 0}</StNumInfo>
      {data.content ? <StPointerIcon>{data.content}</StPointerIcon> : <></>}
      <StTextInfo>{data.text}</StTextInfo>
    </StInfoWrapper>
  );
}

const StInfoWrapper = styled.div`
  display: grid;
  align-items: center;

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

const StPointerIcon = styled.p`
  position: absolute;
  margin-left: 2.4rem;

  font-size: ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.white};
`;

const StTextInfo = styled.p`
  display: flex;
  justify-content: center;

  margin-top: -3.3rem;

  font-size: ${({ theme }) => theme.fonts.Body5};
`;

export default PreferenceNav;
