import { ContainerAPP, GlobalStyle } from "./GlobalStyle";
import Router from "./routes/Router";

function App() {
  return (
    <ContainerAPP>
      <GlobalStyle />
      <Router />
    </ContainerAPP>
  );
}

export default App;
