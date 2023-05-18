import { styled } from 'styled-components';
import { FOOTER_BOTTOM_DATA, FOOTER_TOP_DATA } from '../constants/footerData';
import { IcFooterDropDown, IcFooterGo } from '../asset/icon';

function Footer() {
  return (
    <FooterWrapper>
      <FooterTopContents>
        {FOOTER_TOP_DATA.map((data, idx) => {
          return (
            <EachContent className={data.attr ? data.attr : ''} key={idx}>
              {data.content}
            </EachContent>
          );
        })}
      </FooterTopContents>

      <FooterBottomContents>
        <FooterTextWrapper>
          {FOOTER_BOTTOM_DATA.map((data, idx) => {
            return (
              <EachContent className="bottom" key={idx}>
                {data.content}
              </EachContent>
            );
          })}
        </FooterTextWrapper>

        <FooterBtnWrapper>
          <IcFooterDropDown />
          <IcFooterGo />
        </FooterBtnWrapper>
      </FooterBottomContents>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: grid;
  justify-content: center;
  align-items: center;

  width: 192rem;

  background-color: #f8f8f8;
`;

const FooterTopContents = styled.div`
  display: flex;

  padding-top: 3.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray20};

  font-size: ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.colors.gray70};

  gap: 2.4rem;
`;

const FooterTextWrapper = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray70};
  letter-spacing: 0.2rem;
  line-height: 0%;
`;

const EachContent = styled.p`
  margin-bottom: 4rem;

  &.bottom {
    margin-bottom: 0rem;
  }

  &.underline {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray90};
    letter-spacing: 0.2rem;
    text-decoration-line: underline;
  }
`;

const FooterBottomContents = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 4rem 0rem;
`;

const FooterBtnWrapper = styled.div`
  display: flex;
  align-items: end;

  gap: 0.5rem;
`;

export default Footer;
