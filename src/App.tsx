// import { styled } from 'styled-components';
import MovieInfo from './components/MovieInfo';
import { GlobalStyle } from './styles/globalStyles';
import MovieDetailBox from './components/MovieDetailBox';

function App() {
  return (
    <>
      <GlobalStyle />
      <MovieInfo />
      <MovieDetailBox />
    </>
  );
}

// const StHeading = styled.h1`
//   ${({ theme }) => theme.fonts.Heading}
//   color: ${({ theme }) => theme.colors.red2}
// `;

export default App;
