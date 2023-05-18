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

export default App;
