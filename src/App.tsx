import React, { useRef } from "react";
import logo from "assets/logo.png";
import "./App.css";
import Galaxy from "./components/Galaxy";
import { CryptoContextProvider } from "./context/CryptoContext";
import { FrontiersContextProvider } from "context/FrontiersContext";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "black",
        fontFamily: "Righteous",
      }}
    >
      {/* <header>
        <h1>Crypto Galaxy</h1>
      </header> */}
      <FrontiersContextProvider>
        <CryptoContextProvider>
          <Galaxy />
        </CryptoContextProvider>
      </FrontiersContextProvider>
    </div>
  );
}

export default App;
