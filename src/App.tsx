import { styled } from 'styled-components';
import MovieInfo from './components/MovieInfo';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <StHeading>Vite + React</StHeading>
      <MovieInfo />
    </>
  );
}

const StHeading = styled.h1`
  ${({ theme }) => theme.fonts.Heading}
  color: ${({ theme }) => theme.colors.red2}
`;

export default App;
