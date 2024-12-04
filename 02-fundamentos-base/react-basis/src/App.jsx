/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useState } from "react";

function App() {
  
  //states
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButton = () => {
    setIsLoggedIn(true);
    alert("Você logou!");
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <>
          <h2>Você precisa logar para ver o conteúdo</h2>
          <button onClick={handleButton}>Clique aqui</button>
        </>
      )}
    </>
  );
}

export default App;
