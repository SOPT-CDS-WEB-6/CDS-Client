import { styled } from "styled-components";

function App() {
  return (
    <>
      <StHeading>Vite + React</StHeading>
    </>
  );
}

const StHeading = styled.h1`
  ${({ theme }) => theme.fonts.Heading}
  color: ${({ theme }) => theme.colors.red2}
`;

export default App;
