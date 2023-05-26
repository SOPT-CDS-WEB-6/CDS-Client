import { styled } from 'styled-components';

const SpecialCard = ({
  active,
  title,
  tag,
  index,
  hoverEvent,
}: {
  active: boolean;
  title: string;
  tag: string;
  index: number;
  hoverEvent: (i: number) => (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <>
      <StSpecialCard onMouseEnter={hoverEvent(index)} className={active ? 'active' : ''}>
        <StSpecialCardTitle>{title}</StSpecialCardTitle>
        <StSpecialCardTag>{tag}</StSpecialCardTag>
      </StSpecialCard>
      <hr />
    </>
  );
};

export default SpecialCard;

const StSpecialCardTag = styled.span`
  margin-right: 1.07rem;
  background-color: ${({ theme }) => theme.colors.gray10};
  font: ${({ theme }) => theme.fonts.Body5};
`;

const StSpecialCardTitle = styled.h3`
  margin-left: 3rem;
  font: ${({ theme }) => theme.fonts.Body2};
`;

const StSpecialCard = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 53.2rem;
  height: 8.2rem;

  &.active {
    border-radius: 1rem;
    border: 0.3rem solid;

    & > ${StSpecialCardTitle} {
      font: ${({ theme }) => theme.fonts.Body1};
    }
  }
`;
