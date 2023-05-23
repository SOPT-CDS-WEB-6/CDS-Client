import { styled } from 'styled-components';
import RadarChart from './components/movieInfo/RadarChart';

function App() {
  return (
    <>
      <RadarChart />
      <StHeading>Vite + React</StHeading>
    </>
  );
}

const StHeading = styled.h1`
  ${({ theme }) => theme.fonts.Heading}
  color: ${({ theme }) => theme.colors.red2}
`;

export default App;
