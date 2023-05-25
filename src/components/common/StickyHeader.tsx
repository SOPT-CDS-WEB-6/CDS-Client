import { useEffect, useState } from 'react';
import { IcCgvLogo, IcSearchButton, IcWhiteSearchImg } from '../../asset/icon';
import { styled } from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StickyHeader = () => {
  const [isSticky, setSticky] = useState('');
  const navigate = useNavigate();

  const clickLogoHandler = () => {
    navigate('/');
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 18 * parseInt(getComputedStyle(document.documentElement).fontSize)) {
        setSticky('sticky');
      } else {
        setSticky('');
      }
    });
  }, []);

  const classes = `${isSticky}`;

  const navMenu = ['영화', '극장', '예매', '스토어', '이벤트', '혜택'];

  return (
    <StStickyHeader className={classes}>
      <IcCgvLogo onClick={clickLogoHandler} />
      <StStickyHeaderWrapper>
        <StStickyHeaderNavWrapper>
          {navMenu.map((menu, index) => (
            <StStickyHeaderNav key={menu}>{menu}</StStickyHeaderNav>
          ))}
        </StStickyHeaderNavWrapper>
        <StStickyHeaderSearchWarpper>
          <StStickyHeaderSearchInput></StStickyHeaderSearchInput>
          <IcWhiteSearchImg />
        </StStickyHeaderSearchWarpper>
      </StStickyHeaderWrapper>
    </StStickyHeader>
  );
};

export default StickyHeader;

const StStickyHeaderSearchInput = styled.input`
  width: 100%;

  border: none;
  background-color: transparent;
`;

const StStickyHeaderSearchWarpper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 28.85rem;
  height: 2.6rem;
  padding: 0 1rem;

  border-left: 1px solid ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.white};

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StStickyHeaderNav = styled.span`
  ${({ theme }) => theme.fonts.Body2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

const StStickyHeaderNavWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 58.4rem;
`;

const StStickyHeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 107.554rem;
  height: 2.6rem;
`;

const StStickyHeader = styled.header`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 7.6rem;

  background: ${({ theme }) => theme.colors.cgv_gradient};

  &.sticky {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
  }

  & > svg {
    margin-right: 5.5rem;

    cursor: pointer;
  }
`;
