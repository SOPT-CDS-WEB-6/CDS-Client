import { styled } from 'styled-components';
import { IcCardImg, IcLockIcon, IcLogoImg, IcMypageIcon, IcSearchButton, IcServiceIcon } from '../../asset/icon';
import { useNavigate } from 'react-router-dom';
import { ReactEventHandler, useState } from 'react';

const Header = () => {
  const nav = ['영화', '극장', '예매', '스토어', '이벤트', '혜택'];
  const [isHover, setIsHover] = useState(false);

  const classes = isHover ? `hover` : ``;

  const navigate = useNavigate();

  const hoverNavHandler: ReactEventHandler = (e: React.MouseEvent) => {
    setIsHover(!isHover);
  };

  const clickLogoHandler = (e: React.MouseEvent) => {
    navigate('/');
  };

  const navMenuItem = [
    {
      title: '영화',
      subMenu: ['무비차트', '아트하우스', 'ICECON'],
    },
    {
      title: '극장',
      subMenu: ['CGV 극장', '특별관'],
    },
    {
      title: '예매',
      subMenu: ['빠른예매', '상영스케줄', 'English Ticketing', 'English Schedule'],
    },
    {
      title: '스토어',
      subMenu: ['패키티', '영화관람권', '기프트카드', '콤보', '팝콘', '음료', '스낵', '플레이존', '씨네샵'],
    },
    {
      title: '이벤트',
      subMenu: ['SPECIAL', '영화/예매', '멤버십/CLUB', 'CGV 극장별', '제휴할인', '당점자 발표', '종료된 이벤트'],
    },
    {
      title: '혜택',
      subMenu: ['CGV 할인정보', 'CLUB 서비스', 'VIP 라운지'],
    },
  ];

  return (
    <StHeader>
      <StHeaderTobBar>
        <StLogoContainer onClick={clickLogoHandler}>
          <IcLogoImg />
        </StLogoContainer>
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
      <StHeaderNavBox>
        <StHeaderNavBar>
          <StHeaderNavButtonWrapper onMouseEnter={hoverNavHandler} onMouseLeave={hoverNavHandler}>
            {nav.map((item) => {
              return <StHeaderNavButton key={item}>{item}</StHeaderNavButton>;
            })}
            <StHeaderNavDetailBar className={classes}>
              {navMenuItem.map((item, index) => {
                return (
                  <StHeaderNavMenu key={item.title}>
                    <StHeaderNavOverMenu>
                      <StHeaderNavOverMenuTitle>
                        <StHeaderNavOverMenuTitleText>{item.title}</StHeaderNavOverMenuTitleText>
                      </StHeaderNavOverMenuTitle>
                      {item.subMenu.map((subItem) => {
                        return (
                          <StHeaderNavOverMenuData key={subItem}>
                            <StHeaderNavOverMenuDataText>{subItem}</StHeaderNavOverMenuDataText>
                          </StHeaderNavOverMenuData>
                        );
                      })}
                    </StHeaderNavOverMenu>
                    {index == navMenuItem.length - 1 ? null : <StheaderSplitLine />}
                  </StHeaderNavMenu>
                );
              })}
            </StHeaderNavDetailBar>
          </StHeaderNavButtonWrapper>
          <StHeaderNavSearchBar>
            <StHeaderNavSearchInput placeholder="짱구는 못말려" />
            <IcSearchButton />
          </StHeaderNavSearchBar>
        </StHeaderNavBar>
      </StHeaderNavBox>
    </StHeader>
  );
};

export default Header;

const StHeaderNavOverMenuDataText = styled.span`
  ${({ theme }) => theme.fonts.Body3};
`;

const StHeaderNavOverMenuTitleText = styled.h2`
  ${({ theme }) => theme.fonts.Body3};
  font-weight: 700;
`;

const StheaderSplitLine = styled.div`
  width: 0.1rem;
  height: 31.2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray20};
`;

const StHeaderNavOverMenuData = styled.dd`
  padding-top: 2rem;

  color: ${({ theme }) => theme.colors.gray70};
`;

const StHeaderNavOverMenuTitle = styled.dt`
  color: ${({ theme }) => theme.colors.gray90};
`;

const StHeaderNavOverMenu = styled.dl`
  display: flex;
  flex-direction: column;
  padding-left: 3.1rem;
  width: 100%;
  height: 31.2rem;
`;

const StHeaderNavMenu = styled.li`
  display: flex;

  width: 20.3rem;
  height: 100%;
  padding-top: 2.1rem;
`;

const StHeaderNavDetailBar = styled.ul`
  position: absolute;
  display: none;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 18rem;

  width: 100%;
  height: 43.4rem;

  background-color: ${({ theme }) => theme.colors.white};

  &.hover {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StLogoContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

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
  align-items: center;

  width: 56.4rem;
  height: 6.5rem;
`;

const StHeaderNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 118.3rem;
  height: 6.5rem;
`;

const StHeaderNavBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 6.5rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray40};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray40};
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
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 18rem;
`;
