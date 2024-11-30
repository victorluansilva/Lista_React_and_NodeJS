import './Main.css';
import MeuObjetivoComReact from './MeuObjetivoComReact/MeuObjetivoComReact';

//Construir um componente do zero chamado de MeuObjetivoComReact
// Na pasta dentro de Main que deve ser exportado por padrão (default)
// E importado no Main.js
// No componente você deve listar 
// 3 objetivos que você almeja com o aprendizado de React
// Utilize o .map tal como realizado no primeiro projeto de exemplo de React

const Main = () => {
    return (
      <main>
        <MeuObjetivoComReact />
      </main>
    );
  };

  export default Main;