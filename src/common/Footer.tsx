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

const FooterWrapper = styled.footer``;

const FooterTopContents = styled.div``;

const FooterTextWrapper = styled.div``;

const EachContent = styled.p`
  &.underline {
  }

  &.bottom {
  }
`;

const FooterBottomContents = styled.div``;

const FooterBtnWrapper = styled.div``;

export default Footer;
