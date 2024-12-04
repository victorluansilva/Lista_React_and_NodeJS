/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useState } from "react";

function App() {
  
  //Exempolo de useStates
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButton = () => {
    setIsLoggedIn(true);
    alert("Você logou!");
  };
  // Exemplo de rendeziação condicional
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <>
          <h2>Clique no botão abaixo para ver o conteúdo!</h2>
          {/* Exemplo de gerencia de enventos */}
          <button onClick={handleButton}>Clique aqui</button>
        </>
      )}
    </>
  );
}

export default App;
