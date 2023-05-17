import { styled } from 'styled-components';
import MovieInfo from './components/MovieInfo';
import { GlobalStyle } from './styles/globalStyles';
import MovieDetail from './components/MovieDetail';
import TrailerBox from './components/TrailerBox';

function App() {
  return (
    <>
      <GlobalStyle />
      <StHeading>Vite + React</StHeading>
      <MovieInfo />
      <MovieDetail />
      <TrailerBox />
    </>
  );
}

const StHeading = styled.h1`
  ${({ theme }) => theme.fonts.Heading}
  color: ${({ theme }) => theme.colors.red2}
`;

export default App;
