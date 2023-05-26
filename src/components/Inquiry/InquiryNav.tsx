import { css, styled } from 'styled-components';
import { INQUIRY_NAV_MENUS } from '../../constants/inquiry';

const InquiryNav = () => {
  return (
    <StNavBar>
      {INQUIRY_NAV_MENUS.map((menu, idx) => (
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
  margin-left: 36.3rem;
  margin-top: 4.6rem;
  margin-right: 6.9rem;

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
