/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const isLoggedIn = true; 
  return (
    <>
    {isLoggedIn ? (
      <>
      <Header />
      <Main />
      </>
    ):(
      <h2>Você precisa logar para ver o conteúdo</h2>
    )
    }
    </>
  );
}

export default App;
