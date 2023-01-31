import "./App.css";
import Infographic from "./components/Infographic";

import { FrontiersContextProvider } from "context/FrontiersContext";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        // fontFamily: "Questrial",
        // fontFamily: "Righteous",
      }}
    >
      {/* <header>
        <h1>Crypto Galaxy</h1>
      </header> */}
      <FrontiersContextProvider>
        <Infographic />
      </FrontiersContextProvider>
    </div>
  );
}

export default App;
