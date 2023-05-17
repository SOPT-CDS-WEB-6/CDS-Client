import { css, styled } from 'styled-components';
import { INQUIRY_NAV_MENU_LIST } from '../../constants/inquiry';

const InquiryNav = () => {
  return (
    <StNavBar>
      {INQUIRY_NAV_MENU_LIST.map((menu, idx) => (
        <StNavMenu idx={idx} key={idx}>
          {menu}
        </StNavMenu>
      ))}
    </StNavBar>
  );
};

const StNavBar = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
`;

const StNavMenu = styled.li<{ idx: number }>`
  display: flex;
  align-items: center;
  padding-left: 1.2rem;

  width: 20.6rem;
  height: 4.3rem;

  ${({ idx }) =>
    idx === 3
      ? css`
          font-weight: 700;
          font-size: 1.8rem;
          letter-spacing: 0.1rem;

          background-color: ${({ theme }) => theme.colors.red};

          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          ${({ theme }) => theme.fonts.Body4};

          background-color: ${({ theme }) => theme.colors.white};
        `}

  cursor: pointer;
`;

export default InquiryNav;
