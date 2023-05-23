import { styled } from 'styled-components';
import { IcCardImg, IcLockIcon, IcLogoImg, IcMypageIcon, IcSearchButton, IcServiceIcon } from '../../asset/icon';

const Header = () => {
  const nav = ['영화', '극장', '예매', '스토어', '이벤트', '혜택'];

  return (
    <StHeader>
      <StHeaderTobBar>
        <IcLogoImg />
        <StHeaderTobBarLeftSection>
          <IcCardImg />
          <StMyPageButtonWrapper>
            <StMyPageButton>
              <IcLockIcon />
              <span>로그아웃</span>
            </StMyPageButton>
            <StMyPageButton>
              <IcMypageIcon />
              <span>MY CGV</span>
            </StMyPageButton>
            <StMyPageButton>
              <IcServiceIcon />
              <span>고객센터</span>
            </StMyPageButton>
          </StMyPageButtonWrapper>
        </StHeaderTobBarLeftSection>
      </StHeaderTobBar>
      <StHeaderNavBar>
        <StHeaderNavButtonWrapper>
          {nav.map((item) => {
            return <StHeaderNavButton key={item}>{item}</StHeaderNavButton>;
          })}
        </StHeaderNavButtonWrapper>
        <StHeaderNavSearchBar>
          <StHeaderNavSearchInput placeholder="짱구는 못말려" />
          <IcSearchButton />
        </StHeaderNavSearchBar>
      </StHeaderNavBar>
    </StHeader>
  );
};

export default Header;

const StHeaderNavSearchInput = styled.input`
  border: none;

  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray70};
`;

const StHeaderNavSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 27.4rem;
  height: 2.4rem;
  padding-left: 1.7rem;
  padding-right: 1.7rem;

  border-top: none;
  border-bottom: none;
  border-left: 1px solid ${({ theme }) => theme.colors.gray40};
  border-right: 1px solid ${({ theme }) => theme.colors.gray40};
`;

const StHeaderNavButton = styled.div`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray90};
`;

const StHeaderNavButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 56.4rem;
  height: 1.5rem;
`;

const StHeaderNavBar = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 118.3rem;
  height: 2.4rem;
`;

const StMyPageButton = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    ${({ theme }) => theme.fonts.Body5};
    color: ${({ theme }) => theme.colors.gray90};
  }
`;

const StMyPageButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 21.6rem;
  height: 5.6rem;
`;

const StHeaderTobBarLeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 44.6rem;
  height: 5.9rem;
`;

const StHeaderTobBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 107.8rem;
  height: 10.3rem;
`;

const StHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 18rem;
`;
