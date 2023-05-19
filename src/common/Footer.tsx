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
                {data.content}
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
  align-items: center;

  width: 192rem;

  background-color: #f8f8f8;
`;

const StFooterTopContents = styled.section`
  display: flex;

  padding-top: 3.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray20};

  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};

  gap: 2.4rem;
`;

const StFooterDataWrapper = styled.article`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray70};
  letter-spacing: 0.2rem;
  line-height: 0%;

  > p {
    margin-bottom: 0rem;
  }
`;

const StEachContent = styled.p<{ idx: number }>`
  margin-bottom: 4rem;

  ${({ idx }) => (idx === 5 ? 'text-decoration : underline' : 'text-decoration : none')}

  &.underline {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray90};
    letter-spacing: 0.2rem;
    text-decoration-line: underline;
  }
`;

const StFooterBottomContents = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 4rem 0rem;
`;

const StFooterBtnWrapper = styled.article`
  display: flex;
  align-items: end;

  gap: 0.5rem;
`;

export default Footer;
