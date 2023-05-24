import { styled } from 'styled-components';
import { FOOTER_BOTTOM_DATA, FOOTER_TOP_DATA } from '../constants/footerData';
import { IcFooterDropDown, IcFooterGo } from '../asset/icon';

function Footer() {
  return (
    <StFooterWrapper>
      <StFooterTopContents>
        {FOOTER_TOP_DATA.map((data, idx) => {
          return (
            <StEachContent key={idx} idx={idx}>
              {data}
            </StEachContent>
          );
        })}
      </StFooterTopContents>

      <StFooterBottomContents>
        <StFooterDataWrapper>
          {FOOTER_BOTTOM_DATA.map((data, idx) => {
            return (
              <StEachContent key={idx} idx={idx}>
                {data}
              </StEachContent>
            );
          })}
        </StFooterDataWrapper>

        <StFooterBtnWrapper>
          <IcFooterDropDown />
          <IcFooterGo />
        </StFooterBtnWrapper>
      </StFooterBottomContents>
    </StFooterWrapper>
  );
}

const StFooterWrapper = styled.footer`
  display: grid;
  justify-content: center;

  width: 100%;

  background-color: #f8f8f8;
`;

const StFooterTopContents = styled.section`
  display: flex;
  align-items: center;
  height: 7.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray20};

  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};

  gap: 2.4rem;
`;

const StEachContent = styled.p<{ idx: number }>`
  ${({ idx, theme }) =>
    idx === 7
      ? `
      text-decoration: underline;
      font-weight: 700;
      color: ${theme.colors.gray90};
      letter-spacing: 0.2rem;
    `
      : 'text-decoration: none;'}
`;

const StFooterBottomContents = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StFooterDataWrapper = styled.article`
  display: grid;
  align-items: center;

  height: 10.6rem;
  padding-top: 4rem;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray70};
  letter-spacing: 0.2rem;
`;

const StFooterBtnWrapper = styled.article`
  display: flex;
  margin-top: 8.7rem;
  margin-bottom: 1.9rem;

  width: 23.7rem;
  height: 4rem;

  gap: 0.5rem;
`;

export default Footer;
