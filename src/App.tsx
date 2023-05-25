import { styled } from 'styled-components';
import Review from './components/movieInfo /Review';

function App() {
  return (
    <>
      <Review />
      <StHeading>Vite + React</StHeading>
    </>
  );
}

const StHeading = styled.h1`
  ${({ theme }) => theme.fonts.Heading}
  color: ${({ theme }) => theme.colors.red2}
`;

export default App;
