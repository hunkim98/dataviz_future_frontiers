import "./App.css";
import Infographic from "./components/Infographic";
import { CryptoContextProvider } from "./context/CryptoContext";
import { FrontiersContextProvider } from "context/FrontiersContext";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Righteous",
      }}
    >
      {/* <header>
        <h1>Crypto Galaxy</h1>
      </header> */}
      <FrontiersContextProvider>
        {/* <CryptoContextProvider> */}
        <Infographic />
        {/* </CryptoContextProvider> */}
      </FrontiersContextProvider>
    </div>
  );
}

export default App;
