/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CoreConcept from "../coreconcetp/CoreConcept";
import "./Main.css";
import MeuObjetivoComReact from "./MeuObjetivoComReact/MeuObjetivoComReact";

import {conceitosChaves} from "../../data.js"

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
