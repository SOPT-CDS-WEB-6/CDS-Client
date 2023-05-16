import { styled } from 'styled-components';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <>
      {/*<StHeading>Vite + React</StHeading> */}
      <UserInfo />
    </>
  );
}

const StHeading = styled.h1`
  ${({ theme }) => theme.fonts.Heading}
  color: ${({ theme }) => theme.colors.red2}
`;

export default App;
