/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CoreConcept from "../coreconcetp/CoreConcept";
import "./Main.css";
import MeuObjetivoComReact from "./MeuObjetivoComReact/MeuObjetivoComReact";

import {conceitosChaves} from "../../data.js"

// Atividade 4 - Destructuring e Spread Operators em Props e Renderização Condicional 
// Adapte CoreConcept para receber uma imagem que deve ser centralizada no meio abaixo ou acima (sua escolha) do título de CoreConcept.
// Realize as estilizações necessárias
// Importe as imagens no arquivo data.js lembrando de apontá-los no atributo do objetos em conceitosChaves
// Utilize conditional rendering para renderizar imagens somente se houver um valor de caminho no arquivo.

const Main = () => {
  return (
    <main>
      <MeuObjetivoComReact />
      <section id="core-concepts">
        {/* {conceitosChaves.map((conceito, key) => {
          return (
            <CoreConcept
              key={key}
              id={conceito.id}
              titulo={conceito.titulo}
              conceitos={conceito.conceitos}
            />
          );
        })} */}
        {conceitosChaves.map((conceitoChave, key) => {
          return <CoreConcept key={key} {...conceitoChave} />;
        })}
      </section>
    </main>
  );
};

export default Main;
