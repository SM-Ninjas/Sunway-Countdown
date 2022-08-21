import Form from './components/Form';
import Landing from './components/Landing';
import styled from 'styled-components';
import { devices } from './config';

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  ${devices.tablet} {
    flex-direction: column;
    min-height: 100vh;
    background-color: #8a1f2a;
  }
`;

const App = () => {
  return (
    <Root>
      <Landing />
      <Form />
    </Root>
  );
};
export default App;
