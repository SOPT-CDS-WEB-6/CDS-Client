import { styled } from 'styled-components';
import {
  IcGiftcard1Img,
  IcGiftcard2Img,
  IcGiftcard3Img,
  IcMoreButton,
  IcPackageImg1,
  IcPackageImg2,
  IcPackageImg3,
  IcTicketImg1,
  IcTicketImg2,
  IcTicketImg3,
} from '../asset/icon';

const ProductBox = () => {
  const productData = [
    {
      title: '패키지',
      products: [
        {
          title: '우리 패키지',
          price: '61,000원',
          img: <IcPackageImg1 />,
        },
        {
          title: '나랑 너 패키지',
          price: '34,000원',
          img: <IcPackageImg2 />,
        },
        {
          title: '좋은 날 패키지',
          price: '18,000원',
          img: <IcPackageImg3 />,
        },
      ],
    },
    {
      title: '영화관람권',
      products: [
        {
          title: 'CGV 골드클래스',
          price: '40,000원',
          img: <IcTicketImg1 />,
        },
        {
          title: 'CGV 영화관람권',
          price: '13,000원',
          img: <IcTicketImg2 />,
        },
        {
          title: '4DX관람권',
          price: '19,000원',
          img: <IcTicketImg3 />,
        },
      ],
    },
    {
      title: '기프티카드',
      products: [
        {
          title: 'PANCONNIE A형',
          price: '금액충전형',
          img: <IcGiftcard1Img />,
        },
        {
          title: 'PANCONNIE B형',
          price: '금액충전형',
          img: <IcGiftcard2Img />,
        },
        {
          title: 'PANCONNIE C형',
          price: '금액충전형',
          img: <IcGiftcard3Img />,
        },
      ],
    },
  ];

  return (
    <StProductSection>
      <StProductBoxWrapper>
        {productData.map((product) => (
          <StProductBox key={product.title}>
            <StProductHeader>
              <StProductTitle>{product.title}</StProductTitle>
              <IcMoreButton />
            </StProductHeader>
            {product.products.map((product) => (
              <StPackageCard key={product.title}>
                {product.img}
                <StPackageTextWrapper>
                  <StPackageText>{product.title}</StPackageText>
                  <StPackageText>{product.price}</StPackageText>
                </StPackageTextWrapper>
              </StPackageCard>
            ))}
          </StProductBox>
        ))}
      </StProductBoxWrapper>
    </StProductSection>
  );
};

export default ProductBox;

const StPackageText = styled.h3`
  font: ${({ theme }) => theme.fonts.Body5};
  margin: 0.6rem;
`;

const StPackageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const StPackageCard = styled.article`
  display: flex;
  align-items: center;
  margin: 3.2rem;
`;

const StProductTitle = styled.h2`
  margin-left: 2.4rem;
  font: ${({ theme }) => theme.fonts.Body1};
`;

const StProductHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.4rem;

  & > svg {
    margin-right: 2.6rem;
  }
`;

const StProductBox = styled.section`
  width: 37.2rem;
  height: 45.3rem;
  border-radius: 1rem;
  border: 0.1rem solid;
`;

const StProductBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 118.4rem;
  height: 45.3rem;
`;

const StProductSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 45.3rem;

  margin-top: 9.5rem;
  margin-bottom: 4.5rem;
`;
