/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CoreConcept from "../coreconcetp/CoreConcept";
import "./Main.css";
import MeuObjetivoComReact from "./MeuObjetivoComReact/MeuObjetivoComReact";

import {conceitosChaves} from "../../data.js"

// Atividade 4 - Destructuring e Spread Operators em Props e Renderização Condicional 
// Adapte CoreConcept para receber uma imagem que deve ser centralizada e posicionada abaixo de seu título;
// Realize as estilizações necessárias para que a imagem fique ao centro, tenha largura do tamanho CoreConcept, porém, com 15px de magem nas laterais;
// Importe as imagens no arquivo data.js lembrando de criar um novo atributo imgSrc, que refere à imagem importada, para cada objeto em conceitosChaves
// Utilize conditional rendering para renderizar imagens se houver um valor de caminho no atributo imgSrc.

const handleConceptCick = (e) => {
  //Método para lidar com o click que "joga" um alert com o texto do elemento target/"alvo" clicado  
  alert(e.target.innerText);
}
const Main = () => {
  return (
    <main>
      <MeuObjetivoComReact />
      <section id="core-concepts">
        {conceitosChaves.map((conceitoChave, key) => {
          // Exemplo de props via 'Spread Operators ...conceitoChave e exemplo de Handler de click no componente CoreConcept '
          return <CoreConcept key={key} {...conceitoChave} action={handleConceptCick}/>;
        })}
      </section>
    </main>
  );
};

export default Main;