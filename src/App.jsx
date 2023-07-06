import AppRouter from "AppRouter";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};

export default App;
